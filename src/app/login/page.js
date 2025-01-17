'use client'

import {useState} from 'react'
import { useRouter } from 'next/navigation';
import {LoginForm} from "@/components/login-form"

function Page() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({}); // <{ [key: string]: string }>
    const router = useRouter();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      // Basic validation
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Valid email is required';
      if (!formData.password || formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters long';

      if (Object.keys(validationErrors).length === 0) {
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok) {
            const data = await response.json();
            setErrors(data.errors);
          } else {
            router.push('/home');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        } 
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