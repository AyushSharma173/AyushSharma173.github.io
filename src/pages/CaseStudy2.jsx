// src/pages/CaseStudy2.jsx
import React from 'react';
import './CaseStudy.css'; // Reuse the same CSS for consistency

const CaseStudy2 = () => {
  return (
    <div className="case-study-container">
      <header>
        <h1>Constructing a Rigorous Quantum Circuit Simulator in Python</h1>

        <p className="repo-link">
          <a 
            href="https://github.com/AyushSharma173/QuantumComputingSimulator.git" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View the GitHub Repository
          </a>
        </p>
        
      </header>

      <section>
          <h2>Live Demo</h2>
          <p>
            To experience the simulator in real time, interact with the live demo below. I have deployed the
            Quantum Circuit Simulator as a web app, and you can try out the command-driven interface directly
            from this page.
          </p>
          <iframe
            src="https://your-quantum-simulator-fd067b09811a.herokuapp.com/"
            title="Quantum Circuit Simulator Live Demo"
            style={{ width: '100%', height: '600px', border: 'none' }}
          ></iframe>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <em>If the live demo does not load, please ensure you have a stable internet connection or click
            <a href="https://your-quantum-simulator-fd067b09811a.herokuapp.com/" target="_blank" rel="noopener noreferrer"> here</a> to open it in a new tab.</em>
          </p>
        </section>

      <article className="case-study-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Quantum computing stands at the intersection of physics, mathematics, and computer science, offering
            profoundly different computational capabilities compared to classical systems. The core objective of
            this project was to engineer a versatile Quantum Circuit Simulator in Python—capable of reading
            high-level circuit commands and accurately evolving quantum states via matrix-free operations.
          </p>
          <p>
            Drawing inspiration from IBM’s Quantum Experience, my implementation supports a wide range of quantum
            gates, including those essential to many prominent algorithms (e.g., Grover’s search and Shor’s algorithm).
            This simulator provides a robust educational platform for exploring advanced concepts such as entanglement,
            phase estimation, and the Quantum Fourier Transform (QFT).
          </p>
        </section>

        <section>
          <h2>Parsing and Command Processing</h2>
          <p>
            The simulator’s backbone is a command interpreter that translates textual instructions into actual
            quantum operations on a state vector. Users can declare an initial number of qubits with <code>init</code>,
            apply fundamental gates like <code>h</code>, <code>x</code>, and <code>z</code>, and also perform
            multi-qubit operations such as controlled-NOT (<code>cx</code>) or phase shifts (<code>csk</code>).
          </p>
          <p>
            A pivotal design decision was to allow compact notation for specifying gate application to qubit
            ranges—for instance, <code>h q[0:4];</code> applies a Hadamard gate to qubits 0 through 4 inclusively.
            Below is a glimpse of the parsing routine that extracts qubit indices from each command:
          </p>
          <pre>{`def get_qbits(command):
    before, sep, after = command.rpartition(";")
    g = before.split()[0]
    if g not in ['cx', 'sk', 'csk', 'N&m']:
        before1, sep1, after1 = before.rpartition(":")
        if sep1 == ':':
            a = [int(s) for s in before1 if s.isdigit()]
            qbit_i = a[0] if len(a) == 1 else 10 * a[0] + a[1]
            a = [int(s) for s in after1 if s.isdigit()]
            qbit_f = a[0] if len(a) == 1 else 10 * a[0] + a[1]
        else:
            a = [int(s) for s in before if s.isdigit()]
            qbit_i = sum(a[i] * 10 ** (len(a) - i - 1) for i in range(len(a)))
            qbit_f = qbit_i
        return qbit_i, qbit_f
    # (Extra parsing for multi-qubit commands follows)
`}
          </pre>
          <p>
            By allowing the specification of flexible, human-readable commands, this architecture can scale from
            simple educational circuits (like demonstrating the Bell states) to more extensive quantum algorithms.
          </p>
        </section>

        <section>
          <h2>Matrix-Free Simulation Engine</h2>
          <p>
            An essential challenge in simulating quantum circuits is the exponential growth of the state space,
            with a system of <em>n</em> qubits requiring a vector of length 2<sup>n</sup>. A naive matrix-based
            gate application can quickly become infeasible for modestly large <em>n</em>. To address this, the
            simulator employs a “matrix-free” approach to evolve the state vector directly, iterating only over
            indices whose amplitudes are non-zero.
          </p>
          <p>
            Consider the Hadamard operation on a single qubit <em>q</em>. Instead of multiplying by a full
            2<sup>n</sup> × 2<sup>n</sup> matrix, the simulator inspects each element of the state vector, checks
            whether the target bit in the index is set or unset, and updates the corresponding amplitudes accordingly:
          </p>
          <pre>{`def H(n_qbits, qbit, A):
    B = np.zeros(2**n_qbits, dtype=np.complex128)
    isq2 = 1.0 / np.sqrt(2.0)
    for j in range(2**n_qbits):
        if A[j] != 0:
            bit_parity = (j >> qbit) & 1
            if bit_parity == 0:
                B[j] += isq2 * A[j]
                B[set_bit(j, qbit)] += isq2 * A[j]
            else:
                B[clear_bit(j, qbit)] += isq2 * A[j]
                B[j] -= isq2 * A[j]
    return B
`}
          </pre>
          <p>
            This fine-grained control allows for significant computational savings, making the simulator more
            scalable and flexible. Additionally, it sets the stage for further optimizations, such as partial
            amplitude tracking and potential GPU acceleration.
          </p>
        </section>

        <section>
          <h2>Beyond Basic Gates: QFT, IQFT, and Grover’s Algorithm</h2>
          <p>
            The simulator offers advanced commands to execute the Quantum Fourier Transform (<code>QFT</code>),
            its inverse (<code>IQFT</code>), and even more specialized operations like Grover’s sign-flip used
            for the Grover search algorithm. The <code>QFT</code> command, for instance, applies a global
            transformation across a range of qubits in <em>O(n 2<sup>n</sup>)</em> rather than the naive
            <em>O(2<sup>2n</sup>)</em>.
          </p>
          <p>
            The internal function <code>DFT_j</code> computes a discrete Fourier component of index <code>j</code>,
            while the higher-level <code>DFT</code> method orchestrates these components over the relevant qubits:
          </p>
          <pre>{`def DFT_j(type, N, j):
    A_k = np.zeros(N, dtype=np.complex128)
    for k in range(N):
        A_k[k] = np.exp(type * 2 * np.pi * 1j * j * k / N)
    return A_k / np.sqrt(N)

def DFT(n_qbits, qbit_i, qbit_f, type, A):
    B = np.zeros(2**n_qbits, dtype=np.complex128)
    N2 = 2**(qbit_f - qbit_i + 1)
    # Additional logic maps sub-blocks of the state vector 
    # through the discrete Fourier transform in an efficient manner.
    ...
    return B
`}
          </pre>
          <p>
            By applying such specialized subroutines to blocks of the state vector, the simulator can capture
            high-level transformations like QFT and IQFT without explicitly constructing large-scale unitary
            matrices. This design is critical for showcasing sophisticated quantum protocols and algorithms
            (e.g., phase estimation) within a compact codebase.
          </p>
        </section>

        <section>
          <h2>Enhanced Output, Plotting, and Measurement</h2>
          <p>
            The simulator delivers extensive diagnostics and visuals to help users gain deeper insight into
            quantum phenomena. Key features include:
          </p>
          <ul>
            <li>
              <strong>Custom Printouts:</strong> Users can toggle <code>verbose</code> and <code>printout</code>
              modes to either print the entire state vector or selectively display states that exceed a certain
              probability threshold (<code>Inverse_P_threshold</code>).
            </li>
            <li>
              <strong>Probabilistic Measurement:</strong> The <code>measure q[i]</code> command simulates
              projective measurement on specified qubits, collapsing the wavefunction and producing outcome
              probabilities. The simulator also supports measuring multiple qubits simultaneously:
              <pre>{`def RES(n_qbits, C, M):
    # M is a mask array indicating which qubits are measured.
    # The function computes the probability distribution over the measured subset.
    ...
`}
              </pre>
            </li>
            <li>
              <strong>Plotting Capabilities:</strong> By setting <code>plot=1</code>, the simulator leverages
              Matplotlib to visualize the probability distribution of all basis states. This is particularly
              illustrative for smaller qubit counts, where a bar chart of the final amplitude magnitudes
              highlights the quantum interference effects.
            </li>
          </ul>
          <p>
            Collectively, these features transform the simulator into a comprehensive teaching and research
            tool, empowering users to rapidly prototype and analyze quantum circuits.
          </p>
        </section>

        <section>
          <h2>Looking Ahead: Future Enhancements</h2>
          <p>
            While the simulator currently supports a rich set of quantum gates—ranging from Pauli, Hadamard,
            and phase gates to controlled operations and QFT—there are several avenues for further refinement:
          </p>
          <ul>
            <li>
              <strong>Numba and GPU Acceleration:</strong> Earlier versions included partial <code>numba</code>
              acceleration. Reinstating optimized JIT compilation or migrating critical loops to a GPU (e.g.,
              via <code>CuPy</code>) could dramatically improve speed for multi-qubit circuits.
            </li>
            <li>
              <strong>Error and Noise Modeling:</strong> Real quantum computers are susceptible to gate
              errors, decoherence, and crosstalk. Incorporating these noise channels (e.g., amplitude damping
              or depolarizing noise) would make the simulator more reflective of physical hardware constraints.
            </li>
            <li>
              <strong>Parametric Circuits and Variational Algorithms:</strong> Extending the command interface
              to handle parameterized gates (like <code>RX(&theta;)</code>, <code>RZ(&phi;)</code>) lays the
              groundwork for simulating variational quantum algorithms (VQAs), crucial in near-term quantum devices.
            </li>
            <li>
              <strong>Integration with External Toolkits:</strong> Providing a bridge to existing quantum
              frameworks (like Qiskit or Cirq) would facilitate cross-validation of results and let users
              run the same circuit on both this simulator and actual quantum hardware.
            </li>
          </ul>
        </section>


      </article>
    </div>
  );
};

export default CaseStudy2;
