import { useRef } from "react";

function UploadCard({ onFileSelect }) {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        onFileSelect(file);
    };

    return (

        <div className="upload-area">

            <div className="upload-icon">📄</div>

            <h2>Drag & Drop Brochure Here</h2>

            <p>or</p>

            <button
                className="upload-btn"
                onClick={handleClick}
            >
                Upload Brochure
            </button>

            <input
                ref={inputRef}
                type="file"
                hidden
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleChange}
            />

            <span className="support">
                Supports PDF • PNG • JPG
            </span>

        </div>

    );
}

export default UploadCard;