import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Import your AuthContext hook
import Cookies from 'js-cookie'; // Import js-cookie

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
    const { setAuthUser } = useAuthContext(); // Get the setAuthUser function from AuthContext

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
                const { data } = await response.json();
                toast.success(isSignUp ? 'User created successfully' : 'Welcome back!');

                if (!isSignUp) {
                    localStorage.setItem('token', data.token);

                    const authUser = {
                        userId: data.userId,
                        userType: data.userType,
                        name: data.name,
                        email: data.email,
                    };

                    localStorage.setItem('medmate-user', JSON.stringify(authUser));
                    setAuthUser(authUser); // Update the AuthContext

                    Cookies.set('userId', data.userId, { expires: 7 }); // Expires in 7 days
                    Cookies.set('userType', data.userType, { expires: 7 }); // Expires in 7 days
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

                navigate(`/${userType.toLowerCase()}/dashboard`);
            } else {
                const { message } = await response.json();
                toast.error(message || 'Error during authentication');
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
