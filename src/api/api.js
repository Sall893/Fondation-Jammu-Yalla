const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchProjects = async () => {
    const response = await fetch(`${API_BASE_URL}/projects`);
    return response.json();
};

export const fetchProjectById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    return response.json();
};

export const submitContactForm = async (formData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
};
