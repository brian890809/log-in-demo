'use client'

import {useState} from 'react'
import {LoginForm} from "@/components/login-form"

function Page() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({}); // <{ [key: string]: string }>

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      // Basic validation
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Valid email is required';
      if (!formData.password || formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters long';
  
      if (Object.keys(validationErrors).length === 0) {
        // Submit form data here (e.g., API call)
        console.log(formData)
        alert('Form submitted!');
      } else {
        setErrors(validationErrors);
      }
    };
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
            <LoginForm formData={formData} onInputChange={handleChange} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Page