import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const validateForm = () => {
        const validationErrors = {};

        // Removed username validation
        // if (!formData.username.trim()) {
        //     validationErrors.username = 'Username is required';
        // }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        return validationErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post("http://localhost/portfolio_react/backend/database.php", formData);
            if (response.status === 200) {
                setSubmissionStatus('Form submitted successfully!');
                setFormData({
                    username: '',
                    email: '',
                    message: ''
                });
                setErrors({});
            } else {
                setSubmissionStatus('Form submission failed!');
            }
        } catch (error) {
            setSubmissionStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className='bg-black animate-zoomIn'>
            <div className="bg-black text-black p-5 md:max-w-md md:mx-auto">
                <form onSubmit={handleSubmit} className="border border-gray-400 p-4 rounded-xl">
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-1 font-bold text-white">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-bold text-white">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 font-bold text-white">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            rows="4"
                        />
                        {errors.message && <span className="text-red-500">{errors.message}</span>}
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </div>
                    {submissionStatus && <p className="mt-4 text-white">{submissionStatus}</p>}
                </form>
            </div>
            <hr />
        </div>
    );
};

export default Form;
