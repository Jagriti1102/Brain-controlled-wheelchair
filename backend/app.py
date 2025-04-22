from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
import numpy as np
import os

# ─── App Setup ────────────────────────────────────────────────────────────────
app = Flask(
    __name__,
    static_folder='out',      # serve everything in out/ as static assets
    static_url_path=''        # at the root
)
CORS(app)                    # allow frontend → backend fetches

# ─── Load Your Model ──────────────────────────────────────────────────────────
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'path_to_trained_model.h5')
model = load_model(MODEL_PATH)
label_map = ['Backward', 'Left', 'Right', 'Forward']  # must match your training
print("🔍 Model input shape:", model.input_shape)

# ─── Routes ───────────────────────────────────────────────────────────────────

# 1) Serve registration page at root
@app.route('/', methods=['GET'])
def serve_register():
    return app.send_static_file('Register.html')

# 2) Serve simulation page when nav’ing to /simulation
@app.route('/simulation', methods=['GET'])
def serve_simulation():
    return app.send_static_file('Simulation.html')

# 3) Prediction API
@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    if not data or 'features' not in data:
        return jsonify({ 'error': "Missing 'features' key" }), 400

    try:
        feats = np.array(data['features'], dtype=float)
        if feats.ndim == 1:
            feats = feats.reshape(1, -1)
        elif feats.ndim == 2 and feats.shape[0] != 1:
            return jsonify({ 'error': "Only single-sample inputs are supported" }), 400

        # DEBUG: print what you got
        app.logger.debug(f"Received array of shape {feats.shape}")
        preds = model.predict(feats)
        idx = int(np.argmax(preds, axis=1)[0])
        conf = float(np.max(preds, axis=1)[0])
        return jsonify({ 'prediction': label_map[idx], 'confidence': conf })

    except Exception as e:
        app.logger.error(f"Prediction error: {e}")
        return jsonify({ 'error': str(e) }), 400


# 4) Fallback: serve any other static file (images, CSS, JS…)
@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return app.send_static_file(path)

# ─── Entrypoint ───────────────────────────────────────────────────────────────
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
