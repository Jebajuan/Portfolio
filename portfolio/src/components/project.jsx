import React from 'react';
import './CSS/project.css';

const project = () => {
  return (
    <section className="project section" id="project">
      <div className="project__container">
        <h2 className="project__title">MY PROJECTS</h2>
        <div className="project__grid">
          <div className="project__card">
            <h3>House-price-prediction</h3>
            <p>House Price Prediction 🏠💰 Description: A machine learning project aimed at predicting house prices based on various features such as location, size, number of rooms,
               and more. By leveraging regression algorithms, this project provides a practical solution for estimating real estate prices.

Features:
Data Preprocessing: Cleaning and transforming raw data into a usable format.Exploratory Data Analysis (EDA): Insights and visualizations to understand trends and correlations. Modeling: Implementation of machine learning algorithms (e.g., Linear Regression, Decision Trees, Random Forests). Evaluation: Assessing model performance using metrics like RMSE, MAE, and R². Prediction: Predicting house prices for new or unseen data. Technologies Used:
Python: Core programming language for the project. Libraries: Pandas and NumPy: Data manipulation and analysis. Matplotlib and Seaborn: Visualization. Scikit-learn: Machine learning algorithms and model evaluation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;