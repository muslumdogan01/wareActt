/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface SignUpForm {
  fullName: string;
  companyName: string;
  brandName: string;
  email: string;
  password: string;
  confirmPassword: string;
  addressCompanyName: string;
  country: string;
  state: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  phone: string;
  acceptTerms: boolean;
}

interface Errors {
  [key: string]: string;
}

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState<SignUpForm>({
    fullName: '',
    companyName: '',
    brandName: '',
    email: '',
    password: '',
    confirmPassword: '',
    addressCompanyName: '',
    country: '',
    state: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    phone: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = (): Errors => {
    const  newErrors: Errors = {};
    if (!form.fullName) newErrors.fullName = 'Full name required';
    if (!form.email.includes('@')) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Min 6 chars';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    if (!form.acceptTerms) newErrors.acceptTerms = 'You must accept terms';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      router.push('/sign-up/welcome');
    } catch (err) {
      console.error('Signup failed', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign up to create account</h2>
        <p className="text-sm text-gray-500 text-center">Please complete all fields accurately.</p>

        <input name="fullName" onChange={handleChange} placeholder="First & Last Name"  className="input border border-gray-300" />
        <input name="companyName" onChange={handleChange} placeholder="Company Name"  className="input border border-gray-300" />
        <input name="brandName" onChange={handleChange} placeholder="Brand Name"  className="input border border-gray-300" />
        <input name="email" onChange={handleChange} placeholder="Email"  className="input border border-gray-300" type="email" />
        <input name="password" onChange={handleChange} placeholder="Password" className="input" type="password" />
        <input name="confirmPassword" onChange={handleChange} placeholder="Password (re-enter please)"  className="input border border-gray-300" type="password" />

        <input name="addressCompanyName" onChange={handleChange} placeholder="Company Name"  className="input border border-gray-300" />
        <input name="country" onChange={handleChange} placeholder="Country"  className="input border border-gray-300" />
        <input name="state" onChange={handleChange} placeholder="State"  className="input border border-gray-300" />
        <input name="address1" onChange={handleChange} placeholder="Address Line 1"  className="input border border-gray-300" />
        <input name="address2" onChange={handleChange} placeholder="Address Line 2"  className="input border border-gray-300" />
        <input name="city" onChange={handleChange} placeholder="City"  className="input border border-gray-300" />
        <input name="zip" onChange={handleChange} placeholder="Zip Code"  className="input border border-gray-300" />
        <input name="phone" onChange={handleChange} placeholder="Phone Number"  className="input border border-gray-300" />

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="acceptTerms" onChange={handleChange} />
          <span>I accept the <a href="#" className="text-blue-500">terms and conditions</a></span>
        </label>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Sign up</button>
      </form>
    </div>
  );
}
