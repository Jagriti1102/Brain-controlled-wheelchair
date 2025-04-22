# Brain Controlled Wheelchair

![Brain Controlled Wheelchair](logo.png)

## 📖 Project Description

The Brain Controlled Wheelchair project demonstrates a system where electroencephalogram (EEG) signals are processed and interpreted in real time to steer a simulated wheelchair. This solution integrates signal processing, machine learning, and web technologies to provide a proof-of-concept for assistive mobility devices controlled directly by brain activity.

Key objectives:
- Capture and preprocess EEG signals from an open-source dataset.
- Extract meaningful features (FFT components, kurtosis, skewness) for classification.
- Train and compare multiple machine learning models (ANN, Random Forest, SVM).
- Deploy a RESTful API to serve predictions.
- Build a frontend simulation for user interaction with the wheelchair.

## 📂 Project Structure

```
BRAINCONTROLLEDWHEELCHAIR/
├── backend/
│   ├── build/                # Build artifacts for packaging
│   ├── dist/                 # Distributable packages
│   ├── myenv/                # Python virtual environment
│   ├── out/                  # Output files (logs, reports)
│   ├── .gitignore
│   ├── app.py                # Flask API entrypoint
│   ├── logo.png              # Project logo
│   ├── path_to_trained_model.h5  # Trained model weights
│   ├── playground.jpeg       # Demo image
│   ├── requirements.txt      # Python dependencies
│   ├── wheelchair_simulation.py    # Simulation logic
│   └── wheelchair_simulation.spec  # PyInstaller spec file
│
└── frontend/
    ├── .next/               # Next.js build output
    ├── app/                 # Next.js pages (React components)
    ├── Components/          # Reusable UI components
    ├── node_modules/        # JavaScript dependencies
    ├── out/                 # Exported frontend build
    ├── public/              # Static assets
    ├── .gitignore
    ├── jsconfig.json        # JS configuration for imports
    ├── next.config.js       # Next.js configuration
    ├── package-lock.json    # Lockfile for npm
    └── package.json         # npm scripts & dependencies

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Simulation:** Canvas-based wheelchair animation
- **State management:** React Context API / Hooks

### Backend
- **Web API:** Python Flask
- **Data processing & visualization:** Matplotlib, Seaborn
- **Signal analysis:** SciPy (FFT, kurtosis, skewness)
- **Deep learning & ML:** TensorFlow, Keras, scikit-learn

## 🤖 Machine Learning Models

We explored and fine‑tuned the following classifiers:
- **Artificial Neural Network (ANN):** Multi-layer perceptron with dropout layers and batch normalization for regularization and stable training.
- **Random Forest:** Ensemble of decision trees for robust, non-linear classification.
- **Support Vector Machine (SVM):** Kernel-based classifier for high-dimensional feature separation.

Model features:
- Dropout layers to prevent overfitting.
- Batch normalization for faster convergence.
- Comparison of accuracy and inference speed to select the best model for real‑time control.

## 📊 Dataset

We used EEG recordings from the [Wheel Chair EEG Signals dataset on Kaggle](https://www.kaggle.com/datasets/mneebahmd/wheel-chair-eeg-signals).

## ✨ Project Features

- **Real-time EEG preprocessing:** Bandpass filtering and artifact removal.
- **Feature extraction:** FFT coefficients, kurtosis, skewness.
- **Model training & evaluation:** Automated pipeline for cross-validation and hyperparameter search.
- **Flask REST API:** `/predict` endpoint to serve live classification results.
- **Interactive frontend:** Users can visualize wheelchair movements driven by EEG predictions.
- **Simulation export:** Package simulation into a standalone executable via PyInstaller.

## 🎯 Learning & Goals

- Understand EEG signal characteristics and preprocessing techniques.
- Compare classical ML models with deep learning approaches for biosignal classification.
- Build end-to-end applications combining Python backends with modern JavaScript frontends.
- Implement real-time data pipelines and low-latency inference.
- Gain experience packaging Python apps into distributable binaries.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/BRAINCONTROLLEDWHEELCHAIR.git
   cd BRAINCONTROLLEDWHEELCHAIR
   ```

2. **Backend setup**
   ```bash
   cd backend
   python3 -m venv myenv
   source myenv/bin/activate
   pip install -r requirements.txt
   python app.py
   ```

3. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the simulation**
   Open `http://localhost:3000` in your browser.


---

*Happy coding and exploring brain‑computer interfaces!*

