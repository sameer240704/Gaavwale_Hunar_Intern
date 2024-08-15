import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [userType, setUserType] = useState("PATIENT");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        contactNo: '',
        medicalRegistrationNumber: '',
        adminValidationNumber: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignUp ? 'http://localhost:3000/user/signup' : 'http://localhost:3000/user/signin';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    userType
                })
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(isSignUp ? 'User created successfully' : 'Welcome back!');
                if (!isSignUp) {
                    localStorage.setItem('token', data.token);
                }
                if (isSignUp) {
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        dateOfBirth: '',
                        contactNo: '',
                        medicalRegistrationNumber: '',
                        adminValidationNumber: '',
                    });
                }
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Error during authentication');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error during authentication');
        }
    };

    return {
        isSignUp,
        userType,
        formData,
        setIsSignUp,
        setUserType,
        handleChange,
        handleSubmit,
    };
};

export default useAuth;
