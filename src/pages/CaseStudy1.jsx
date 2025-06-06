// // src/pages/CaseStudy1.jsx
import React from 'react'
import './CaseStudy.css'

const CaseStudy1 = () => {
  return (
    <article className="case-study-container">
      <header className="case-study-header">
        <h1>Quantamental Volatility Surface Forecasting</h1>
        <p className="date">August 15, 2024</p>
      </header>

      <div className="case-study-content">
        <section>
          <h2>Abstract / Executive Summary</h2>
          <p>
            In this project, we develop a robust “Quantamental Volatility Surface
            Forecasting” framework that integrates advanced quantitative methods
            with fundamental analysis to predict the future dynamics of equity
            option volatility surfaces. Leveraging historical options data,
            fundamental financial statements, and high-frequency technical
            indicators, we construct daily volatility surfaces for Amazon (AMZN)
            using a parametric interpolation method. We then apply Principal
            Component Analysis (PCA) to reduce the high-dimensional surface into
            a concise set of key factors, capturing the dominant modes of variation.
          </p>
          <p>
            The forecasting task is framed as a multi-output regression problem
            where we predict the future values of the principal components (PCs)
            over a 30-day horizon. Our approach incorporates lagged features—
            including past values of the PCs and recency measures (e.g., days
            since the latest quarterly report)—to capture the temporal dynamics
            and autoregressive nature of volatility. We initially benchmark the
            forecasting performance using a Random Forest model and subsequently
            refine our approach via XGBoost, tuned with time-series
            cross-validation to optimize performance under a realistic,
            non-stationary market setting.
          </p>
          <p>
            Finally, we demonstrate how to invert the PCA transformation to
            reconstruct the full forecasted volatility surface, providing both 2D
            and 3D visualizations. This reconstructed surface is designed to be
            integrated into an options pricing and risk management framework,
            ensuring that the forecast is not only statistically robust but also
            economically meaningful and arbitrage-free.
          </p>
        </section>

        <section>
          <h2>1. Introduction</h2>
          <h3>Motivation</h3>
          <p>
            In today’s fast-paced financial markets, accurately forecasting the
            volatility surface of equity options is critical for option pricing,
            risk management, and trading strategy development. Traditional models—
            such as the Black–Scholes framework—rely on constant volatility
            assumptions or simplistic volatility dynamics, which often fail to
            capture market realities such as volatility skew and term structure.
            Moreover, many approaches struggle to integrate infrequently updated
            fundamental information with high frequency market data.
          </p>
          <p>
            Our project addresses these limitations by adopting a quantamental
            approach that blends rigorous quantitative methods with fundamental
            financial analysis. By leveraging historical options data alongside
            key fundamental metrics (earnings, balance sheets, cash flows) and
            technical indicators (log returns, moving averages, rolling
            volatility), we construct a comprehensive dataset that captures both
            market sentiment and corporate health. This integrated framework
            enables us to model not just a static volatility surface but one
            that evolves dynamically over time.
          </p>
          <h3>Project Scope</h3>
          <ul>
            <li>
              <strong>Data Collection &amp; Processing:</strong> Collect historical
              options chains, daily stock prices, and fundamental financial
              statements using Alpha Vantage APIs. We then process and merge these
              disparate data sources into a coherent, high frequency dataset.
              Special attention is given to feature engineering—for example,
              computing technical indicators (e.g., log returns, moving averages,
              rolling volatility) and fundamental recency measures (such as “days
              since last quarterly report”).
            </li>
            <li>
              <strong>Dimensionality Reduction:</strong> Given that a full volatility
              surface is inherently high dimensional, we apply Principal Component
              Analysis (PCA) to extract the dominant modes of variation. This
              reduces the complexity of the volatility surface into a few
              interpretable principal components (PC1, PC2, PC3) that capture the
              bulk of the surface’s dynamics.
            </li>
            <li>
              <strong>Forecasting Future Volatility:</strong> With our reduced
              representation, we frame forecasting as a multi-output regression
              problem—predicting the future values of the PCA factors over a 30-
              day horizon. To capture temporal dependencies, we incorporate lagged
              PC factors and other engineered features into our model. We explore
              various machine learning models (including Random Forests and
              gradient boosting methods) with time series cross validation to
              ensure our forecasts are robust and realistic.
            </li>
            <li>
              <strong>Surface Reconstruction:</strong> Finally, the forecasted PCA
              factors are transformed back via the inverse PCA operation to
              reconstruct the complete future volatility surface. This
              reconstructed surface is then validated for smoothness and no
              arbitrage conditions, making it a candidate for integration into an
              options pricing model.
            </li>
          </ul>
          <h3>Industry Relevance</h3>
          <ul>
            <li>
              <strong>Hybrid Modeling:</strong> By integrating both quantitative
              (technical) data and fundamental insights, the model reflects the
              “quantamental” approach embraced by leading financial institutions.
            </li>
            <li>
              <strong>Dynamic Feature Engineering:</strong> The use of lagged
              features, rolling statistics, and recency measures ensures that our
              model captures the evolving dynamics of the market—a crucial
              requirement in fast changing environments.
            </li>
            <li>
              <strong>Advanced Forecasting Techniques:</strong> Employing machine
              learning techniques with time series cross validation (and exploring
              ensemble and stacking methods) brings rigor to the forecasting
              process, akin to what is seen in state-of-the-art trading and risk
              management systems.
            </li>
            <li>
              <strong>Practical Integration:</strong> The ultimate goal—
              reconstructing an arbitrage-free, forecasted volatility surface—
              paves the way for real world applications in option pricing and
              volatility trading.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Data Acquisition</h2>
          <h3>Data Sources</h3>
          <ul>
            <li>
              <strong>Historical Options Data:</strong> We retrieve daily options
              chains (both calls and puts) to construct the implied volatility
              surface. This data includes key parameters such as strike,
              expiration, and implied volatility.
            </li>
            <li>
              <strong>Historical Stock Data:</strong> Daily stock prices (adjusted
              close) are used to compute technical indicators—such as log returns,
              moving averages (SMA), and rolling volatility—which serve as
              essential inputs for our forecasting models.
            </li>
            <li>
              <strong>Fundamental Data:</strong> We fetch company fundamentals using
              multiple endpoints:
              <ul>
                <li>Income Statement (both annual and quarterly earnings)</li>
                <li>Balance Sheet (providing details on assets, liabilities, and equity)</li>
                <li>Cash Flow Statement</li>
                <li>Company Overview (for general company details)</li>
              </ul>
              These data sources allow us to blend quantitative market data with
              fundamental insights—a core element of our quantamental approach.
            </li>
          </ul>
          <h3>Challenges &amp; Solutions</h3>
          <ul>
            <li>
              <strong>Mismatched Update Frequencies:</strong> Fundamental data such
              as income statements, balance sheets, and cash flow statements are
              updated quarterly or annually, while options and stock prices are
              available on a daily basis. This mismatch can lead to sparse or
              repeated fundamental features in the dataset.
              <br />
              <em>Solution:</em> We use forward-filling and back-filling techniques
              to propagate the latest available fundamental data until a new report
              is released. Additionally, we create “time-since” features (e.g.,
              days since the last quarterly report) to capture the recency of the
              data.
            </li>
            <li>
              <strong>Missing Data:</strong> Data from the APIs can sometimes be
              incomplete or contain missing values.
              <br />
              <em>Solution:</em> We handle missing values by replacing known
              placeholder strings (such as “None” or “NaN”) with actual NaN
              values, and then use forward-fill/back-fill methods to ensure
              continuity. This preprocessing step is crucial before merging the
              data into a unified DataFrame.
            </li>
            <li>
              <strong>Data Format &amp; Conversion:</strong> Data from Alpha Vantage
              often comes in JSON format with string values that need conversion to
              numeric types or datetime objects.
              <br />
              <em>Solution:</em> We apply explicit type conversions (using{' '}
              <code>pd.to_numeric</code> and <code>pd.to_datetime</code>) to
              standardize the dataset and ensure compatibility with our modeling
              and analysis libraries.
            </li>
          </ul>
        </section>

        <div className="image-container">
          <img
            src="../assets/title_image.png"
            alt="Example Volatility Surface"
          />
          <p className="image-caption">
            Figure 1: Example Volatility Surface for 2008-01-02
          </p>
        </div>

        <section>
          <h2>3. Data Processing & Feature Engineering</h2>
          <p>
            In order to transform the raw data into a format suitable for
            volatility forecasting, we implemented a series of key processing and
            feature engineering steps:
          </p>
          <h3>Preprocessing and Data Cleaning</h3>
          <ul>
            <li>
              <strong>Data Conversion and Merging:</strong> Raw JSON responses from
              various Alpha Vantage APIs—covering historical options, stock
              prices, and fundamental reports—were parsed and converted into pandas
              DataFrames. We then merged these diverse data sources to create a
              unified daily dataset.
            </li>
            <li>
              <strong>Handling Missing Data:</strong> Given the different update
              frequencies (with fundamentals updated quarterly or annually and
              market data on a daily basis), we used forward-fill and back-fill
              methods to propagate the latest available values. This ensured
              continuity in the dataset despite the sparsity of some fundamental
              updates.
            </li>
            <li>
              <strong>Type Conversion:</strong> We carefully converted all fields to
              the appropriate data types (e.g., converting strings to numeric
              values or datetime objects) to facilitate downstream analysis.
            </li>
          </ul>
          <h3>Feature Engineering</h3>
          <ul>
            <li>
              <strong>Technical Indicators:</strong> From our historical stock
              price data, we computed several key technical indicators that serve
              as proxies for market dynamics:
              <ul>
                <li>Log Returns: Calculated as the logarithm of the ratio of successive adjusted close prices.</li>
                <li>Simple Moving Averages (SMAs): We computed 10-day and 20-day SMAs to capture short- and medium-term trends.</li>
                <li>Rolling Volatility: A 10-day rolling standard deviation of log returns (annualized) was used to measure market uncertainty.</li>
              </ul>
            </li>
            <li>
              <strong>Fundamental Metrics:</strong> We extracted critical financial metrics from the fundamental reports, including earnings per share, total assets, and cash flow measures.
            </li>
            <li>
              <strong>Time-Since Features:</strong> Recognizing that the impact of fundamental data decays over time, we created features representing the number of days elapsed since the most recent quarterly report.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Dimensionality Reduction with PCA</h2>
          <h3>Rationale</h3>
          <p>
            The volatility surface is inherently high-dimensional. To capture the essential dynamics without the computational burden of the full surface, we apply Principal Component Analysis (PCA), extracting PCs that explain the majority of variation.
          </p>
          <h3>Implementation</h3>
          <div className="code-block">
            <pre>
{`# Flatten each volatility surface and build a matrix
surface_list = []
for date in sorted(vol_surface_dict.keys()):
    vol_surface = vol_surface_dict[date]['vol_surface']
    if np.isnan(vol_surface).any():
        vol_surface = np.nan_to_num(vol_surface, nan=np.nanmedian(vol_surface))
    surface_list.append(vol_surface.flatten())
surface_matrix = np.vstack(surface_list)

from sklearn.decomposition import PCA
pca = PCA(n_components=3)
pc_scores = pca.fit_transform(surface_matrix)
print("Explained Variance Ratio:", pca.explained_variance_ratio_)`}
            </pre>
          </div>
        </section>

        <div className="image-container">
          <img
            src="../assets/PrincipalComponents.png"
            alt="PCA Scores Over Time"
          />
          <p className="image-caption">
            Figure 2: Principal Component Scores of Volatility Surfaces Over Time
          </p>
        </div>

        <section>
          <h2>5. Forecasting the Volatility Surface</h2>
          <h3>Creating Forecast Targets</h3>
          <p>
            To forecast future volatility surfaces, we shift each PC factor by 30 days to form regression targets.
          </p>
          <div className="code-block">
            <pre>
{`forecast_horizon = 30
df_final['PC1_target'] = df_final['PC1'].shift(-forecast_horizon)
df_final['PC2_target'] = df_final['PC2'].shift(-forecast_horizon)
df_final['PC3_target'] = df_final['PC3'].shift(-forecast_horizon)
df_forecast = df_final.dropna(subset=['PC1_target','PC2_target','PC3_target'])`}
            </pre>
          </div>
          <h3>Modeling Approach</h3>
          <p>
            We experimented with Random Forests and XGBoost, using lagged PCs and technical indicators, tuned via TimeSeriesSplit & GridSearchCV.
          </p>
          <div className="code-block">
            <pre>
{`from sklearn.model_selection import TimeSeriesSplit, GridSearchCV
from xgboost import XGBRegressor
from sklearn.multioutput import MultiOutputRegressor

tscv = TimeSeriesSplit(n_splits=5)
param_grid = { … }
xgb_model = MultiOutputRegressor(XGBRegressor(objective='reg:squarederror'))
grid_search = GridSearchCV(xgb_model, param_grid, cv=tscv, scoring='neg_mean_squared_error')
grid_search.fit(features, targets)`}
            </pre>
          </div>
        </section>

        <div className="image-container">
          <img src="../assets/training_image.jpg" alt="Model Training" />
          <p className="image-caption">Figure 3: Training &amp; Validation Performance</p>
        </div>

        <div className="image-container">
          <img src="../assets/residuals.jpg" alt="Residuals Plot" />
          <p className="image-caption">Figure 4: Residual Analysis</p>
        </div>

        <section>
          <h2>6. Reconstructing the Volatility Surface</h2>
          <h3>Inverse PCA Transform</h3>
          <p>
            We map forecasted PCs back to the high-dimensional grid via the inverse PCA operation, then reshape into a 50×50 surface.
          </p>
          <h3>Visualizations</h3>
          <p>We produce both 2D contour and 3D surface plots to inspect smoothness and convexity.</p>
          <div className="code-block">
            <pre>
{`# 2D Contour Plot
plt.contourf(grid_strikes, grid_ttm, reconstructed_surface, levels=20)

# 3D Surface Plot
ax.plot_surface(X_grid, Y_grid, reconstructed_surface)`}
            </pre>
          </div>
        </section>

        <div className="image-container">
          <img
            src="../assets/forecasted_volatility_surface.jpg"
            alt="Forecasted Surface"
          />
          <p className="image-caption">Figure 5: Forecasted Implied Volatility Surface</p>
        </div>

        <section>
          <h2>7. Integration &amp; Future Work</h2>
          <h3>Options Pricing Framework</h3>
          <p>
            The forecasted surface feeds directly into Black–Scholes or SVI
            frameworks for pricing, hedging, and risk management.
          </p>
          <h3>Discussion</h3>
          <ul>
            <li>
              <strong>Sample Size &amp; Frequency:</strong> Future work may handle
              mismatched update rates more elegantly.
            </li>
            <li>
              <strong>Forecast Accuracy:</strong> Initial R² values suggest room
              for improved feature engineering or alternate models.
            </li>
            <li>
              <strong>No-Arbitrage Constraints:</strong> Exploring parametric
              surfaces (e.g. SVI) could enforce arbitrage-free shapes.
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}

export default CaseStudy1
