import "./App.css";
import { useState } from "react";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";
import ProcessingStatus from "./components/ProcessingStatus";
import { uploadBrochure } from "./services/api";

import {
  FaHome,
  FaRobot
} from "react-icons/fa";

function App() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleFile(file) {

    try {

      setLoading(true);

      const data = await uploadBrochure(file);

      setResult(data);

    } catch (err) {

      console.error(err);
      alert("Upload Failed");

    } finally {

      setLoading(false);

    }

  }

  function handleNewUpload() {

    setResult(null);

  }

  return (

    <div className="app">

      <div className="hero-card">

        {/* ================= Header ================= */}

        <div className="header">

          <div className="logo-circle">
            <FaHome />
          </div>

          <h1>
            Nivasa<span>.AI</span>
          </h1>

          <p className="subtitle">
            Intelligent Real Estate Document Automation
          </p>

          <div className="status-badge">
            <FaRobot />
            <span>Prototype v1.0</span>
          </div>

        </div>

        {/* ================= Upload ================= */}

        {!loading && !result && (

          <UploadCard onFileSelect={handleFile} />

        )}

        {/* ================= Processing ================= */}

        {loading && (

          <ProcessingStatus />

        )}

        {/* ================= Result ================= */}

        {result && (

          <>

            <div
              style={{
                marginTop: 20,
                marginBottom: 20,
                padding: 15,
                background: "#10b981",
                color: "white",
                borderRadius: 12,
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center"
              }}
            >
              🏡 Document Analysis Completed Successfully
            </div>

            <ResultCard data={result.data} />

            <button
              className="upload-btn"
              style={{
                marginTop: 25,
                width: "100%"
              }}
              onClick={handleNewUpload}
            >
              📂 Analyze Another Brochure
            </button>

          </>

        )}

        {/* ================= Features ================= */}

        <div className="features">

          <div className="feature">
            🧠 OCR Engine
          </div>

          <div className="feature">
            ⚡ Smart Extraction
          </div>

          <div className="feature">
            📄 Document Intelligence
          </div>

        </div>

        {/* ================= Footer ================= */}

        <div className="footer">

          <strong>Nivasa.AI</strong>

          <br />

          Intelligent Real Estate Document Automation

          <br />

          <span>
            Prototype Version 1.0 • OCR • AI Parsing
          </span>

        </div>

      </div>

    </div>

  );

}

export default App;