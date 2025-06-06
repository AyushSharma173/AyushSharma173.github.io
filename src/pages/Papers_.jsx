// src/pages/Papers_.jsx
import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import './Papers_.css'


// use the same version as the API
pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const papers = [
  {
    id: 1,
    title: "FedAdapt: Adaptive Federated Learning for Heterogeneous Data",
    description: "A novel approach to federated learning that adapts to heterogeneous data distributions across clients.",
    pdfUrl: '/papers/fedadapt_paper.pdf'
  },
  {
    id: 2,
    title: "CodeSage: Retrieval‑Augmented Code Reasoning with Graph Traversal + LLMs",
    description: "An open-source system for building and querying code graphs using Neo4j, Qdrant, and OpenAI, optimized for retrieval quality and research experimentation.",
    pdfUrl: 'http://paper.codesage.com.s3-website.us-east-2.amazonaws.com/', // external
    externalViewerUrl: 'http://paper.codesage.com.s3-website.us-east-2.amazonaws.com/',
    githubUrl: 'https://github.com/AyushSharma173/CodeSage?tab=readme-ov-file'
  }
]

const PDFViewer = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Reset states when pdfUrl changes
  useEffect(() => {
    setNumPages(null)
    setPageNumber(1)
    setError(null)
    setIsLoading(true)
  }, [pdfUrl])

  function onDocumentLoad({ numPages }) {
    console.log('PDF loaded successfully with', numPages, 'pages')
    setNumPages(numPages)
    setError(null)
    setIsLoading(false)
  }

  function onDocumentError(error) {
    console.error('PDF loading error:', error)
    setError('Failed to load PDF file. Please try downloading instead.')
    setIsLoading(false)
  }

  // Prevent modal from closing when clicking inside
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  // Safe close handler
  const handleClose = (e) => {
    e?.stopPropagation()
    try {
      onClose()
    } catch (error) {
      console.error('Error closing modal:', error)
    }
  }

  const fullPdfUrl = pdfUrl.startsWith('http') ? pdfUrl : `${window.location.origin}${pdfUrl}`
  console.log('Attempting to load PDF from:', fullPdfUrl)

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <div className="modal-header">
          <h3>Paper Viewer</h3>
          <button 
            className="modal-close" 
            onClick={handleClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="pdf-viewer">
            {isLoading && (
              <div className="loading-state">
                Loading paper...
              </div>
            )}
            {error && (
              <div className="error-state">
                {error}
                <div style={{ marginTop: '1rem' }}>
                  <a 
                    href={fullPdfUrl} 
                    download 
                    className="download-fallback"
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      background: '#1e90ff',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    Download PDF Instead
                  </a>
                </div>
              </div>
            )}
            {!error && (
              <Document
                file={{ url: fullPdfUrl }}
                onLoadSuccess={onDocumentLoad}
                onLoadError={onDocumentError}
                loading={null} // We handle loading state ourselves
                error={null}   // We handle error state ourselves
              >
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onRenderError={(error) => {
                    console.error('Error rendering page:', error)
                    setError('Error rendering PDF page. Please try downloading instead.')
                  }}
                />
              </Document>
            )}
          </div>
        </div>
        {numPages && !error && (
          <div className="pdf-controls">
            <button
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
            >
              ← Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// const PaperCard = ({ paper, onView }) => {
//   return (
//     <div className="paper-card" onClick={() => onView(paper)}>
//       <a 
//         href="https://github.com/AyushSharma173/FedAdapt" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="github-link"
//         onClick={e => e.stopPropagation()}
//       >
//         <svg viewBox="0 0 24 24" aria-hidden="true">
//           <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//         </svg>
//         <span>View on GitHub</span>
//       </a>
//       <div className="paper-info">
//         <h3 className="paper-title">{paper.title}</h3>
//         <p className="paper-description">{paper.description}</p>
//       </div>
//       <div className="paper-actions">
//         {/* <button onClick={(e) => {
//           e.stopPropagation()
//           onView(paper)
//         }}>
//           Preview Paper
//         </button> */}

//         <button onClick={(e) => {
//           e.stopPropagation()
//           window.open('http://paper.fedadapt.com.s3-website.us-east-2.amazonaws.com/', '_blank')
//         }}>
//           Preview Paper
//         </button>

//         <a 
//           href={paper.pdfUrl} 
//           download
//           onClick={e => e.stopPropagation()}
//         >
//           ⬇️ Download Full Paper
//         </a>
//       </div>
//     </div>
//   )
// }

const PaperCard = ({ paper }) => {
  const externalViewerUrl = paper.externalViewerUrl || paper.pdfUrl

  const handleCardClick = () => {
    window.open(externalViewerUrl, '_blank')
  }

  return (
    <div className="paper-card" onClick={handleCardClick}>
      {/* View on GitHub - prevent redirect */}
      <a
        href={paper.githubUrl || "https://github.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        onClick={(e) => e.stopPropagation()} // prevent redirect
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        <span>View on GitHub</span>
      </a>

      <div className="paper-info">
        <h3 className="paper-title">{paper.title}</h3>
        <p className="paper-description">{paper.description}</p>
      </div>

      <div className="paper-actions">
        {/* Preview just reuses the card click behavior */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            window.open(externalViewerUrl, '_blank')
          }}
        >
          Preview Paper
        </button>

        {/* Download also prevents redirect */}
        <a
          href={paper.pdfUrl}
          download
          onClick={(e) => e.stopPropagation()} // prevent redirect
        >
          ⬇️ Download Full Paper
        </a>
      </div>
    </div>
  )
}


export default function Papers() {
  const [selectedPaper, setSelectedPaper] = useState(null)
  const [viewError, setViewError] = useState(null)

  const handleViewPaper = (paper) => {
    try {
      console.log('Opening paper:', paper)
      setSelectedPaper(paper)
      setViewError(null)
    } catch (error) {
      console.error('Error opening paper:', error)
      setViewError('Failed to open paper viewer. Please try again.')
    }
  }

  return (
    <section className="papers-section" id="papers">
      <h2>Research Papers</h2>
      {viewError && (
        <div className="error-state" style={{ marginBottom: '1rem' }}>
          {viewError}
        </div>
      )}
      <div className="papers-grid">
        {papers.map(paper => (
          <PaperCard 
            key={paper.id} 
            paper={paper} 
            onView={handleViewPaper}
          />
        ))}
      </div>
      
      {selectedPaper && (
        <PDFViewer 
          pdfUrl={selectedPaper.pdfUrl} 
          onClose={() => {
            setSelectedPaper(null)
            setViewError(null)
          }} 
        />
      )}
    </section>
  )
}
