import { useEffect, useState } from "react";

const messages = [
    "📄 Reading PDF...",
    "🖼 Converting PDF Pages...",
    "🔍 Running OCR...",
    "🧠 Extracting Property Details...",
    "🏢 Finding Developer...",
    "📍 Identifying Location...",
    "🏠 Detecting Property Types...",
    "✨ Preparing AI Dashboard..."
];

function ProcessingStatus() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % messages.length);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="processing-card">
            <div className="spinner"></div>

            <h2>🤖 Nivasa.AI is Analyzing Your Brochure</h2>

            <p className="processing-text">
                {messages[step]}
            </p>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>

            <small>Extracting intelligent property insights...</small>
        </div>
    );
}

export default ProcessingStatus;