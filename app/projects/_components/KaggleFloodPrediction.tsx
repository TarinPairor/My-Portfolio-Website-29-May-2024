// NUScheduly.tsx
import React from "react";
import { Project } from "@/app/_components/Project";

class KaggleFloodPrediction extends Project {
  title = "Flood Prediction Competition";
  description = "Kaggle Competition";
  content = [
    "Built a custom neural network architecture with Python TensorFlow to predict flood probability from a Kaggle dataset",
    "Leveraged machine learning techniques to achieve a high level of prediction accuracy for flood events at an R squared score of 0.861.",
  ];
  image = "/kagglefloodcover.png";
  link =
    "https://github.com/TarinPairor/kaggle-projects/blob/main/flood-prediction-competition.ipynb";
}

export default KaggleFloodPrediction;
