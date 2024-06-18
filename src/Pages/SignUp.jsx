import  { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        require: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, 'form data');

        fetch(('http://localhost:3000/signUp'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        }).then((res) => {
            console.log('success',res)
            window.location = '/home'
        })
        .catch((err) => {
            console.log(err.message);
        })
        // Here you can handle the form data, e.g., send it to the backend
    };

    return (
        <div className="flex justify-center items-center h-screen w-auto">
            <div className="bg-white dark:bg-green-500 shadow-lg px-10 py-5 rounded-lg border-black text-center">
                <p>Sign Up Page</p>
                <h1 className="text-3xl">Ospro Management</h1>

                <form onSubmit={handleSubmit} className="m-5 flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Email"
                        className="border px-6 py-2 my-1 rounded"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="User Name"
                        className="border px-6 py-2 my-1 rounded"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border px-6 py-2 rounded"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border px-6 py-2 rounded"
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <div className="flex justify-between gap-2 mt-3">
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                name="require"
                                id="require"
                                checked={formData.require}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="require" >Required</label>
                        </div>
                        <div>
                            <Link to='/' className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">Already have an Account</Link>
                        </div>
                    </div>

                    <button type="submit" className="bg-green-100 dark:bg-white p-2 rounded-lg hover:bg-green-500">
                        SIGN UP
                    </button>
                    <Link className="bg-green-100 p-2 rounded-lg gap-2 hover:bg-green-500 flex justify-center">
                        <FcGoogle className="text-2xl" />
                        Login With Google
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
