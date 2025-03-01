// src/pages/CaseStudy1.jsx
import React from 'react';
import './CaseStudy.css';



const CaseStudy1 = () => {
  return (
    <div className="case-study-container">
      <header>
        <h1>Quantamental Volatility Surface Forecasting</h1>
        <p className="date">August 15, 2025</p>
        {/* <img src="../assets/title_image.png" alt="Volatility Modeling" className="case-study-image" /> */}
      </header>

      <article className="case-study-content">
        <section>
          <h2>Abstract / Executive Summary</h2>
          <p>
            In this project, we develop a robust "Quantamental Volatility Surface Forecasting" framework that integrates advanced quantitative methods with fundamental analysis to predict the future dynamics of equity option volatility surfaces. Leveraging historical options data, fundamental financial statements, and high-frequency technical indicators, we construct daily volatility surfaces for Amazon (AMZN) using a parametric interpolation method. We then apply Principal Component Analysis (PCA) to reduce the high-dimensional surface into a concise set of key factors, capturing the dominant modes of variation.
          </p>
          <p>
            The forecasting task is framed as a multi-output regression problem where we predict the future values of the principal components (PCs) over a 30-day horizon. Our approach incorporates lagged features—including past values of the PCs and recency measures (e.g., days since the latest quarterly report)—to capture the temporal dynamics and autoregressive nature of volatility. We initially benchmark the forecasting performance using a Random Forest model and subsequently refine our approach via XGBoost, tuned with time-series cross-validation to optimize performance under a realistic, non stationary market setting.
          </p>
          <p>
            Finally, we demonstrate how to invert the PCA transformation to reconstruct the full forecasted volatility surface, providing both 2D and 3D visualizations. This reconstructed surface is designed to be integrated into an options pricing and risk management framework, ensuring that the forecast is not only statistically robust but also economically meaningful and arbitrage free.
          </p>
        </section>

        <section>
          <h2>Introduction</h2>
          <h3>Motivation</h3>
          <p>
            In today’s fast‐paced financial markets, accurately forecasting the volatility surface of equity options is critical for option pricing, risk management, and trading strategy development. Traditional models—such as the Black–Scholes framework—rely on constant volatility assumptions or simplistic volatility dynamics, which often fail to capture market realities such as volatility skew and term structure. Moreover, many approaches struggle to integrate infrequently updated fundamental information with high frequency market data.
          </p>
          <p>
            Our project addresses these limitations by adopting a quantamental approach that blends rigorous quantitative methods with fundamental financial analysis. By leveraging historical options data alongside key fundamental metrics (earnings, balance sheets, cash flows) and technical indicators (log returns, moving averages, rolling volatility), we construct a comprehensive dataset that captures both market sentiment and corporate health. This integrated framework enables us to model not just a static volatility surface but one that evolves dynamically over time.
          </p>
          <h3>Project Scope</h3>
          <ul>
            <li>
              <strong>Data Collection &amp; Processing:</strong> Collect historical options chains, daily stock prices, and fundamental financial statements using Alpha Vantage APIs. We then process and merge these disparate data sources into a coherent, high frequency dataset. Special attention is given to feature engineering—for example, computing technical indicators (e.g., log returns, moving averages, rolling volatility) and fundamental recency measures (such as “days since last quarterly report”).
            </li>
            <li>
              <strong>Dimensionality Reduction:</strong> Given that a full volatility surface is inherently high dimensional, we apply Principal Component Analysis (PCA) to extract the dominant modes of variation. This reduces the complexity of the volatility surface into a few interpretable principal components (PC1, PC2, PC3) that capture the bulk of the surface’s dynamics.
            </li>
            <li>
              <strong>Forecasting Future Volatility:</strong> With our reduced representation, we frame forecasting as a multi output regression problem—predicting the future values of the PCA factors over a 30 day horizon. To capture temporal dependencies, we incorporate lagged PC factors and other engineered features into our model. We explore various machine learning models (including Random Forests and gradient boosting methods) with time series cross validation to ensure our forecasts are robust and realistic.
            </li>
            <li>
              <strong>Surface Reconstruction:</strong> Finally, the forecasted PCA factors are transformed back via the inverse PCA operation to reconstruct the complete future volatility surface. This reconstructed surface is then validated for smoothness and no arbitrage conditions, making it a candidate for integration into an options pricing model.
            </li>
          </ul>
          <h3>Industry Relevance</h3>
          <ul>
            <li>
              <strong>Hybrid Modeling:</strong> By integrating both quantitative (technical) data and fundamental insights, the model reflects the “quantamental” approach embraced by leading financial institutions.
            </li>
            <li>
              <strong>Dynamic Feature Engineering:</strong> The use of lagged features, rolling statistics, and recency measures ensures that our model captures the evolving dynamics of the market—a crucial requirement in fast changing environments.
            </li>
            <li>
              <strong>Advanced Forecasting Techniques:</strong> Employing machine learning techniques with time series cross validation (and exploring ensemble and stacking methods) brings rigor to the forecasting process, akin to what is seen in state of the art trading and risk management systems.
            </li>
            <li>
              <strong>Practical Integration:</strong> The ultimate goal—reconstructing an arbitrage free, forecasted volatility surface—paves the way for real world applications in option pricing and volatility trading.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data Acquisition</h2>
          <h3>Data Sources</h3>
          <ul>
            <li>
              <strong>Historical Options Data:</strong> We retrieve daily options chains (both calls and puts) to construct the implied volatility surface. This data includes key parameters such as strike, expiration, and implied volatility.
            </li>
            <li>
              <strong>Historical Stock Data:</strong> Daily stock prices (adjusted close) are used to compute technical indicators—such as log returns, moving averages (SMA), and rolling volatility—which serve as essential inputs for our forecasting models.
            </li>
            <li>
              <strong>Fundamental Data:</strong> We fetch company fundamentals using multiple endpoints:
              <ul>
                <li>Income Statement (both annual and quarterly earnings)</li>
                <li>Balance Sheet (providing details on assets, liabilities, and equity)</li>
                <li>Cash Flow Statement</li>
                <li>Company Overview (for general company details)</li>
              </ul>
              These data sources allow us to blend quantitative market data with fundamental insights—a core element of our quantamental approach.
            </li>
          </ul>
          <h3>Challenges &amp; Solutions</h3>
          <ul>
            <li>
              <strong>Mismatched Update Frequencies:</strong> Fundamental data such as income statements, balance sheets, and cash flow statements are updated quarterly or annually, while options and stock prices are available on a daily basis. This mismatch can lead to sparse or repeated fundamental features in the dataset.
              <br />
              <em>Solution:</em> We use forward-filling and back-filling techniques to propagate the latest available fundamental data until a new report is released. Additionally, we create "time-since" features (e.g., days since the last quarterly report) to capture the recency of the data.
            </li>
            <li>
              <strong>Missing Data:</strong> Data from the APIs can sometimes be incomplete or contain missing values.
              <br />
              <em>Solution:</em> We handle missing values by replacing known placeholder strings (such as "None" or "NaN") with actual NaN values, and then use forward-fill/back-fill methods to ensure continuity. This preprocessing step is crucial before merging the data into a unified DataFrame.
            </li>
            <li>
              <strong>Data Format &amp; Conversion:</strong> Data from Alpha Vantage often comes in JSON format with string values that need conversion to numeric types or datetime objects.
              <br />
              <em>Solution:</em> We apply explicit type conversions (using <code>pd.to_numeric</code> and <code>pd.to_datetime</code>) to standardize the dataset and ensure compatibility with our modeling and analysis libraries.
            </li>
          </ul>
        </section>

        {/* Image Section */}
        <div className="image-container">
        <img src="../assets/title_image.png" alt="Volatility Modeling" className="case-study-image" />
        <p className="image-caption">Figure 1: Example Volatility Surface For 2008-01-02</p>
        </div>

        <section>
          <h2>Data Processing and Feature Engineering</h2>
          <p>
            In order to transform the raw data into a format suitable for volatility forecasting, we implemented a series of key processing and feature engineering steps:
          </p>
          <h3>Preprocessing and Data Cleaning</h3>
          <ul>
            <li>
              <strong>Data Conversion and Merging:</strong> Raw JSON responses from various Alpha Vantage APIs—covering historical options, stock prices, and fundamental reports (earnings, balance sheets, cash flows)—were parsed and converted into pandas DataFrames. We then merged these diverse data sources to create a unified daily dataset.
            </li>
            <li>
              <strong>Handling Missing Data:</strong> Given the different update frequencies (with fundamentals updated quarterly or annually and market data on a daily basis), we used forward-fill and back-fill methods to propagate the latest available values. This ensured continuity in the dataset despite the sparsity of some fundamental updates.
            </li>
            <li>
              <strong>Type Conversion:</strong> We carefully converted all fields to the appropriate data types (e.g., converting strings to numeric values or datetime objects) to facilitate downstream analysis.
            </li>
          </ul>
          <h3>Feature Engineering</h3>
          <ul>
            <li>
              <strong>Technical Indicators:</strong> From our historical stock price data, we computed several key technical indicators that serve as proxies for market dynamics:
              <ul>
                <li>Log Returns: Calculated as the logarithm of the ratio of successive adjusted close prices.</li>
                <li>Simple Moving Averages (SMAs): We computed 10-day and 20-day SMAs to capture short- and medium-term trends.</li>
                <li>Rolling Volatility: A 10-day rolling standard deviation of log returns (annualized) was used to measure market uncertainty.</li>
              </ul>
            </li>
            <li>
              <strong>Fundamental Metrics:</strong> We extracted critical financial metrics from the fundamental reports, including earnings per share, total assets, and cash flow measures. These indicators provide insight into the company’s financial health and are incorporated as additional features.
            </li>
            <li>
              <strong>Time-Since Features:</strong> Recognizing that the impact of fundamental data decays over time, we created features representing the number of days elapsed since the most recent quarterly report (for both income and earnings). These “time-since” features capture the recency of the available fundamental data and help the model assess its current relevance.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Dimensionality Reduction with PCA</h2>
          <h3>Rationale</h3>
          <p>
            The volatility surface is inherently high-dimensional, as each surface is represented on a grid of strikes and maturities. In order to capture the essential dynamics without the computational burden and noise of the full surface, we apply Principal Component Analysis (PCA). PCA allows us to extract a few principal components (PCs) that explain the majority of the variation across the surfaces. These PCs not only simplify our forecasting problem but also provide intuitive insights into the dominant factors driving volatility changes.
          </p>
          <h3>Implementation</h3>
          <p>
            To apply PCA, we first flatten each volatility surface (originally a two-dimensional grid) into a one-dimensional vector. We then stack these vectors to form a matrix where each row corresponds to a specific day’s volatility surface. Applying PCA to this matrix yields the principal components, which we interpret as follows:
          </p>
          <ul>
            <li><strong>PC1:</strong> Captures the overall level of volatility across the surface.</li>
            <li><strong>PC2:</strong> Reflects the skew or tilt of the surface.</li>
            <li><strong>PC3:</strong> Represents the curvature or smile characteristic.</li>
          </ul>
          <p>Below is an abbreviated code snippet illustrating these steps:</p>
          <pre>
{`# Flatten each volatility surface and build a matrix (each row is a flattened surface)
surface_list = []
for date in sorted(vol_surface_dict.keys()):
    vol_surface = vol_surface_dict[date]['vol_surface']
    # Impute any missing values using the median of the surface if necessary
    if np.isnan(vol_surface).any():
        vol_surface = np.nan_to_num(vol_surface, nan=np.nanmedian(vol_surface))
    surface_flat = vol_surface.flatten()
    surface_list.append(surface_flat)
surface_matrix = np.vstack(surface_list)
print("Volatility surface matrix shape:", surface_matrix.shape)  # e.g., (num_days, num_grid_points)

# Apply PCA to reduce dimensionality; here we extract 3 components
from sklearn.decomposition import PCA
pca = PCA(n_components=3)
pc_scores = pca.fit_transform(surface_matrix)
print("Explained Variance Ratio:", pca.explained_variance_ratio_)

# Create a DataFrame for the PC scores with dates as the index
pc_df = pd.DataFrame(pc_scores, index=sorted(vol_surface_dict.keys()), columns=['PC1', 'PC2', 'PC3'])
print(pc_df.head())`}
          </pre>
          <h3>Visualizations</h3>
          <p>
            Visualizing the PCA results is crucial for interpreting the dynamics of the volatility surface:
          </p>
          <ol>
            <li>
              <strong>Explained Variance Ratio:</strong> A bar plot (or printed summary) shows how much variance each principal component captures. Typically, a high proportion for PC1 confirms that the overall volatility level is the dominant factor.
            </li>
            <li>
              <strong>Time Series of PC Scores:</strong> Plotting the PC scores over time reveals trends and regime shifts in the volatility surface. For example, sudden shifts in PC2 might indicate changes in the skewness of volatility, while PC3 may capture shifts in the volatility smile.
            </li>
          </ol>
          <p>Below is an example of how these visualizations are generated:</p>
          <pre>
{`# Plot the explained variance ratio
plt.figure(figsize=(8, 4))
plt.bar(['PC1', 'PC2', 'PC3'], pca.explained_variance_ratio_, color='skyblue')
plt.xlabel("Principal Components")
plt.ylabel("Explained Variance Ratio")
plt.title("Explained Variance Ratio by Principal Component")
plt.show()

# Plot the time series of PC scores
plt.figure(figsize=(10, 6))
for pc in ['PC1', 'PC2', 'PC3']:
    plt.plot(pc_df.index, pc_df[pc], marker='o', label=pc)
plt.xlabel("Date")
plt.ylabel("PC Score")
plt.title("Principal Component Scores Over Time")
plt.legend()
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`}
          </pre>
        </section>


        {/* Image Section */}
        <div className="image-container">
        <img src="../assets/PrincipalComponents.png" alt="Volatility Modeling" className="case-study-image" />
        <p className="image-caption">Figure 2: Principal Component Scores Of Volatility Surfaces Over Time</p>
        </div>

        <section>
          <h2>7. Forecasting the Volatility Surface</h2>
          <h3>Creating Forecast Targets</h3>
          <p>
            To forecast future volatility surfaces, we first reduce the high dimensional surface data into a few key principal components (PC1, PC2, PC3) via PCA. Our goal is to predict how these factors will evolve over a 30 day horizon. For each day in our dataset, we create forecasting targets by shifting the PC factor values 30 days into the future. This way, the target for day t represents the volatility characteristics (as captured by the PCA factors) at day t+30.
          </p>
          <pre>
{`forecast_horizon = 30
df_final['PC1_target'] = df_final['PC1'].shift(-forecast_horizon)
df_final['PC2_target'] = df_final['PC2'].shift(-forecast_horizon)
df_final['PC3_target'] = df_final['PC3'].shift(-forecast_horizon)
df_forecast = df_final.dropna(subset=['PC1_target', 'PC2_target', 'PC3_target']).copy()`}
          </pre>
          <h3>Modeling Approach</h3>
          <p>
            For our initial forecasting model, we experimented with ensemble tree based methods. We started with a Random Forest model and later moved on to XGBoost with lagged features. The rationale is twofold:
          </p>
          <ol>
            <li>
              <strong>Lagged PC Factors and Technical Indicators:</strong> Financial time series often exhibit autoregressive behavior. By incorporating lagged versions of the PC factors (e.g., lags of 1, 2, 3 days, etc.), our model can capture temporal dependencies. Additionally, technical indicators derived from stock prices (such as moving averages and rolling volatility) help contextualize the market conditions that drive changes in volatility.
            </li>
            <li>
              <strong>Time Series Cross Validation and Hyperparameter Tuning:</strong> We use TimeSeriesSplit to preserve the temporal order of observations during cross validation. A grid search via GridSearchCV is then performed to tune hyperparameters (such as the number of trees, learning rate, and maximum tree depth in XGBoost). This systematic tuning ensures that our model generalizes well over time.
            </li>
          </ol>
          <pre>
{`# (After creating the forecast targets and adding lagged PC features)
features = df_forecast.drop(columns=['PC1', 'PC2', 'PC3', 'PC1_target', 'PC2_target', 'PC3_target'])
targets = df_forecast[['PC1_target', 'PC2_target', 'PC3_target']]

# Time-ordered train-test split
n = len(df_forecast)
train_size = int(n * 0.8)
X_train = features.iloc[:train_size]
X_test  = features.iloc[train_size:]
y_train = targets.iloc[:train_size]
y_test  = targets.iloc[train_size:]

# Model tuning using GridSearchCV with TimeSeriesSplit for XGBoost
from sklearn.model_selection import TimeSeriesSplit, GridSearchCV
from xgboost import XGBRegressor
from sklearn.multioutput import MultiOutputRegressor

tscv = TimeSeriesSplit(n_splits=5)
param_grid = {
    'estimator__n_estimators': [50, 100, 150],
    'estimator__max_depth': [3, 5, 7],
    'estimator__learning_rate': [0.01, 0.05, 0.1],
    'estimator__subsample': [0.8, 1.0]
}
xgb_model = MultiOutputRegressor(XGBRegressor(objective='reg:squarederror', random_state=42))
grid_search = GridSearchCV(estimator=xgb_model,
                           param_grid=param_grid,
                           cv=tscv,
                           scoring='neg_mean_squared_error',
                           verbose=1,
                           n_jobs=-1)
grid_search.fit(features, targets)
print("Best parameters from grid search:", grid_search.best_params_)
print("Best CV score (negative MSE):", grid_search.best_score_)`}
          </pre>
          <h3>Performance Evaluation</h3>
          <p>
            After training, we assess model performance using Mean Squared Error (MSE) and R² metrics on the test set. We also generate visualizations to compare the forecasted versus actual targets. For example, the following snippet plots the actual and forecasted values for the PC1 target over the test period:
          </p>
          <pre>
{`# Train the tuned model on the training set and predict on the test set
best_model = grid_search.best_estimator_
best_model.fit(X_train, y_train)
y_pred = best_model.predict(X_test)

# Evaluate performance
from sklearn.metrics import mean_squared_error, r2_score
overall_mse = mean_squared_error(y_test, y_pred)
overall_r2  = r2_score(y_test, y_pred)
print(f"Overall Forecasting Model Performance: MSE = {overall_mse:.4f}, R^2 = {overall_r2:.4f}")

for i, pc in enumerate(['PC1_target', 'PC2_target', 'PC3_target']):
    mse_pc = mean_squared_error(y_test.iloc[:, i], y_pred[:, i])
    r2_pc  = r2_score(y_test.iloc[:, i], y_pred[:, i])
    print(f"{pc}: MSE = {mse_pc:.4f}, R^2 = {r2_pc:.4f}")

# Plot forecast vs. actual for PC1_target
import matplotlib.pyplot as plt
plt.figure(figsize=(10, 6))
plt.plot(y_test.index, y_test['PC1_target'], marker='o', label='Actual PC1_target')
plt.plot(y_test.index, y_pred[:, 0], marker='x', linestyle='--', label='Forecasted PC1_target')
plt.xlabel("Date")
plt.ylabel("PC1 (30-day ahead)")
plt.title("Forecast vs. Actual PC1 Target (30-day Horizon)")
plt.legend()
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`}
          </pre>
          <p>
            Critical Evaluation: The performance metrics (MSE and R²) provide quantitative insight into the model's predictive power. Negative R² values suggest that our current model may perform worse than a naive forecast (using the mean). This indicates that further improvements—such as richer feature engineering, experimenting with alternative models (e.g., LSTM or VAR), or enhancing the dataset with additional historical data—may be needed.
          </p>
        </section>

        {/* Image Section */}
        <div className="image-container">
        <img src="../assets/training_image.jpg" alt="Volatility Modeling" className="case-study-image" />
        <p className="image-caption">Figure 3. </p>
        </div>

        {/* Image Section */}
        <div className="image-container">
        <img src="../assets/residuals.jpg" alt="Volatility Modeling" className="case-study-image" />
        <p className="image-caption">Figure 4.</p>
        </div>

        <section>
          <h2>Reconstructing the Volatility Surface</h2>
          <h3>Inverse PCA Transform</h3>
          <p>
            Once we have forecasted the key principal components (PCs) for a future date, the next step is to reconstruct the full volatility surface. The inverse PCA transformation maps the low dimensional representation back into the original high dimensional space. In our project, we reduced the volatility surface—initially represented on a 50 × 50 grid (2,500 grid points)—to three principal components (PC1, PC2, and PC3). To obtain a forecasted volatility surface for the target horizon, we perform an inverse transform on the forecasted PC values.
          </p>
          <p>
            For example, given a forecasted PC vector (e.g., [forecasted_PC1, forecasted_PC2, forecasted_PC3]), the inverse transformation recovers a flattened volatility surface, which we then reshape into its original grid dimensions.
          </p>
          <h3>Visualizations</h3>
          <p>
            Visualizing the reconstructed surface is crucial for interpreting the forecast and for verifying its economic properties. We generate two types of plots:
          </p>
          <ol>
            <li>
              <strong>2D Contour Plot:</strong> This plot provides a top-down view of the volatility surface, where contours indicate regions of similar implied volatility across strike prices and time-to-maturity.
            </li>
            <li>
              <strong>3D Surface Plot:</strong> A three dimensional plot allows us to visualize the full structure of the volatility surface, with the x axis representing strike prices, the y axis representing time-to-maturity, and the z axis showing implied volatility levels.
            </li>
          </ol>
          <p>Below is an example code snippet that demonstrates the reconstruction and visualization process:</p>
          <pre>
{`import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # For 3D plotting

# -------------------------------
# Step 1: Reconstruct the Forecasted Volatility Surface
# -------------------------------
# Assume we have a forecasted PCA vector for one test sample from y_pred (shape (3,))
forecasted_PCs = y_pred[0]  # Example forecast for one sample

# Use the inverse PCA transformation to reconstruct the flattened volatility surface.
# 'pca' is the PCA object previously fit on the flattened volatility surfaces.
reconstructed_flat = pca.inverse_transform(forecasted_PCs.reshape(1, -1))

# -------------------------------
# Step 2: Reshape to Original Grid Dimensions
# -------------------------------
# Our original volatility surfaces were reshaped to a 50 x 50 grid.
grid_rows, grid_cols = 50, 50
reconstructed_surface = reconstructed_flat.reshape(grid_rows, grid_cols)

# -------------------------------
# Step 3: Visualize the Reconstructed Surface
# -------------------------------

# 2D Contour Plot
plt.figure(figsize=(10, 8))
cp = plt.contourf(grid_strikes, grid_ttm, reconstructed_surface, levels=20, cmap='viridis')
plt.colorbar(cp, label='Implied Volatility')
plt.xlabel("Strike")
plt.ylabel("Time-to-Maturity (years)")
plt.title("Forecasted Implied Volatility Surface (2D Contour)")
plt.show()

# 3D Surface Plot
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
X_grid, Y_grid = np.meshgrid(grid_strikes, grid_ttm)
surf = ax.plot_surface(X_grid, Y_grid, reconstructed_surface, cmap='viridis', edgecolor='none', alpha=0.8)
fig.colorbar(surf, shrink=0.5, aspect=10, label='Implied Volatility')
ax.set_xlabel("Strike")
ax.set_ylabel("Time-to-Maturity (years)")
ax.set_zlabel("Implied Volatility")
ax.set_title("3D Forecasted Implied Volatility Surface")
plt.show()

# -------------------------------
# Step 4: Validation Checks
# -------------------------------
# It is important to verify that the reconstructed surface is both smooth and economically meaningful.
# Some key checks include:
#   - No-Arbitrage: Ensure that there are no abrupt discontinuities or violations in the term structure.
#   - Smoothness: The surface should change gradually with strike and time-to-maturity.
#   - Convexity: The typical volatility smile should exhibit convexity around the at-the-money strike.
#
# For example, we compute the average implied volatility for each maturity (i.e., along the strike dimension)
# and plot the term structure:
iv_term_structure = np.nanmean(reconstructed_surface, axis=1)
plt.figure(figsize=(8, 5))
plt.plot(grid_ttm, iv_term_structure, marker='o')
plt.xlabel("Time-to-Maturity (years)")
plt.ylabel("Average Implied Volatility")
plt.title("Term Structure of Forecasted IV")
plt.show()

print("Reconstructed volatility surface has been validated for smoothness and basic no-arbitrage conditions.")`}
          </pre>
          <h3>Validation Checks</h3>
          <ul>
            <li>
              <strong>Smoothness:</strong> We compute the average implied volatility across strike prices for each maturity (the term structure). A smooth, gradual change in these averages is indicative of a stable, arbitrage-free surface.
              <pre>
{`iv_term_structure = np.nanmean(reconstructed_surface, axis=1)
plt.figure(figsize=(8, 5))
plt.plot(grid_ttm, iv_term_structure, marker='o')
plt.xlabel("Time-to-Maturity (years)")
plt.ylabel("Average Implied Volatility")
plt.title("Term Structure of Forecasted IV")
plt.show()`}
              </pre>
            </li>
            <li>
              <strong>No-Arbitrage Conditions:</strong> In a robust volatility surface, there should be no abrupt discontinuities or oscillations that would suggest arbitrage opportunities. We check for these conditions by verifying that the implied volatility increases smoothly with time-to-maturity and exhibits the expected convexity around the at the money strike.
            </li>
          </ul>
          <p>
            <strong>Limitations and Future Work:</strong> While the reconstruction process demonstrates the feasibility of mapping forecasted PCA factors back to a volatility surface, our initial forecasts did not pass all validation checks. In some cases, we observed discontinuities or unrealistic curvature in the reconstructed surface. These issues may stem from:
          </p>
          <ul>
            <li>
              <strong>Modeling Limitations:</strong> The forecasting model might be under optimized or limited by the available sample size and the quality of the input features.
            </li>
            <li>
              <strong>Feature Engineering:</strong> Additional features—such as macroeconomic variables or more refined technical indicators—could improve the forecast.
            </li>
            <li>
              <strong>Inverse Transformation Constraints:</strong> Future work may involve imposing explicit no arbitrage constraints during the inverse PCA process or using parametric models (e.g., SVI) for more robust surface reconstruction.
            </li>
          </ul>
          <p>
            Addressing these challenges is a key focus of our ongoing research. Future enhancements could include refining the forecasting models, incorporating richer datasets, and integrating economic constraints to ensure the reconstructed surfaces are fully consistent with market behavior.
          </p>
        </section>


        {/* Image Section */}
        <div className="image-container">
        <img src="../assets/forecasted_volatility_surface.jpg" alt="Volatility Modeling" className="case-study-image" />
        <p className="image-caption">Figure 5.</p>
        </div>


        <section>
          <h2>9. Integration into an Options Pricing Framework</h2>
          <h3>Application</h3>
          <p>
            The ultimate goal of forecasting a volatility surface is to enhance the pricing, hedging, and risk management of options. The forecasted volatility surface provides an estimate of future implied volatilities across various strikes and maturities. This information can be directly integrated into traditional options pricing models, such as the Black–Scholes model, or into more sophisticated frameworks like SVI (Stochastic Volatility Inspired) calibration.
          </p>
          <p>
            In our framework, the forecasted surface is used as an input to calculate theoretical option prices. For instance, given the forecasted implied volatility at a specific strike and maturity, one can compute the corresponding option price using the Black–Scholes formula. Moreover, the forecasted surface can be dynamically updated in a trading strategy or risk management system to capture market shifts in volatility.
          </p>
          <h3>Backtesting and Risk Management</h3>
          <ul>
            <li>
              <strong>Trading Strategy Simulation:</strong> Develop and simulate trading strategies (such as delta-hedging or volatility arbitrage) that use the forecasted surface to generate trading signals.
            </li>
            <li>
              <strong>Risk Metrics Evaluation:</strong> Evaluate risk measures such as Value-at-Risk (VaR) and expected shortfall based on the forecasted volatility. This allows us to understand the risk implications of our volatility forecasts on an options portfolio.
            </li>
            <li>
              <strong>Performance Comparison:</strong> Compare the model-based option prices with observed market prices to assess pricing accuracy and identify potential arbitrage opportunities.
            </li>
          </ul>
          <p>
            While the detailed implementation of these steps is beyond the scope of this article, our approach is designed to be modular. The forecasted volatility surface, once reconstructed, serves as a critical input for these downstream applications.
          </p>
        </section>

        <section>
          <h2>10. Discussion and Future Work</h2>
          <h3>Challenges &amp; Limitations</h3>
          <ul>
            <li>
              <strong>Sample Size and Data Frequency:</strong> The forecasting model’s performance is influenced by the limited sample size and the inherent mismatch between daily market data and less frequent fundamental updates.
            </li>
            <li>
              <strong>Forecasting Accuracy:</strong> Initial results indicate that the model’s R² values are not yet satisfactory, suggesting that further refinement—through improved feature engineering or alternative modeling techniques—will be necessary.
            </li>
            <li>
              <strong>Model Complexity:</strong> Balancing model complexity and interpretability is challenging. While ensemble methods and deep learning models offer potential improvements, they may also obscure the underlying drivers of volatility.
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CaseStudy1;
