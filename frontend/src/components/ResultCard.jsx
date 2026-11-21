function ResultCard({ data }) {
    if (!data) return null;

    return (
        <div className="result-card">

            <h2>🏡 Property Analysis Report</h2>

            <div className="info-card">
                <span className="title">🏢 Project Name</span>
                <p>{data.projectName || "Not Found"}</p>
            </div>

            <div className="info-card">
                <span className="title">👨‍💼 Developer</span>
                <p>{data.developer || "Not Found"}</p>
            </div>

            <div className="info-card">
                <span className="title">📍 Location</span>
                <p>{data.location || "Not Found"}</p>
            </div>

            <div className="info-card">
                <span className="title">📋 RERA Number</span>
                <p>{data.reraNumber || "Not Available"}</p>
            </div>

            <div className="info-card">
                <span className="title">🏠 Property Types</span>

                <div className="chips">
                    {data.propertyTypes?.map((item, index) => (
                        <span className="chip" key={index}>
                            {item.type}
                        </span>
                    ))}
                </div>
            </div>

            <div className="info-card">
                <span className="title">📐 Unit Sizes</span>

                <div className="chips">
                    {data.unitSizes?.map((size, index) => (
                        <span className="chip green" key={index}>
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            <div className="info-card">
                <span className="title">🎯 Amenities</span>

                <div className="chips">
                    {data.amenities?.map((item, index) => (
                        <span className="chip orange" key={index}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <button className="save-btn">
                💾 Save Property
            </button>

        </div>
    );
}

export default ResultCard;