import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5050",
});

export async function uploadBrochure(file) {
    const formData = new FormData();

    formData.append("brochure", file);

    const response = await API.post("/extract", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}