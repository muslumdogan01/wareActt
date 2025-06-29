"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface FormData {
  [key: string]: string;
}

interface Country {
  name: string;
  iso3: string;
  iso2: string;
  states: {
    id: number;
    name: string;
    state_code: string;
    latitude: string;
    longitude: string;
    type: string | null;
  }[];
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [accepted, setAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const router = useRouter();

  const requiredFields = [
    "fullName",
    "companyName",
    "email",
    "password",
    "passwordConfirm",
    "country",
    "state",
  ];

  useEffect(() => {
    axios
      .get<Country[]>("/data/countries.json")
      .then((res) => setCountryData(res.data))
      .catch((err) => console.error("Country fetch error:", err));
  }, []);

  useEffect(() => {
    const selectedCountry = countryData.find(
      (c) => c.name === formData.country
    );
    if (selectedCountry) {
      setStates(selectedCountry.states.map((s) => s.name));
    } else {
      setStates([]);
    }
  }, [formData.country, countryData]);

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = true;
      }
    });
    if (formData.password !== formData.passwordConfirm) {
      newErrors["password"] = true;
      newErrors["passwordConfirm"] = true;
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTermsError(!accepted);

    if (Object.keys(newErrors).length === 0 && accepted) {
      const dataToSend = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirm,
        phone: "905555555555",
        company_name: formData.companyName,
        brand_name: formData.storeName,
        country_id: formData.country,
        state_id: formData.state,
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        zipcode: formData.zip,
        eori_number: formData.eoriNumber,
        terms: true,
      };

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/warehouse/register`,
          dataToSend
        );
        router.push("/sign-up/welcome");
        console.log(res.data);
      } catch (err) {
        console.error("❌ Registration failed:", err);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const renderInput = (name: string, type: string, placeholder: string) => (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={formData[name] || ""}
      onChange={handleChange}
      className={`w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 ${
        errors[name] ? "border-red-500" : "border-[#E1E3EA]"
      }`}
    />
  );

  const renderSelect = (name: string, options: string[]) => (
    <div className="relative w-full">
      <select
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className={`appearance-none w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 ${
          errors[name] ? "border-red-500" : "border-[#E1E3EA]"
        }`}
      >
        <option value="">Select {name}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center gap-1">
        {errors[name] && (
          <Image
            src="/icons/signup/warning.svg"
            width={17}
            height={17}
            alt="warning"
          />
        )}
        <svg
          className="w-4 h-4 text-[#7E8299]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="py-20 overflow-y-auto">
      <div className="h-auto  flex flex-col items-center  justify-center  ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-10 rounded-xl shadow-lg space-y-4"
        >
          <h2 className="text-xl font-semibold text-center text-[#181C32]">
            Sign up to create account
          </h2>
          <p className="text-sm text-center text-[#A1A5B7]">
            Please complete all fields accurately, as this information will be
            used to generate your invoices.
          </p>

          {renderInput("fullName", "text", "First & Last Name")}
          {renderInput("companyName", "text", "Company Name")}
          {renderInput("storeName", "text", "Amazon Store Name")}
          {renderInput("email", "email", "Email")}
          {renderInput("password", "password", "Password")}
          {renderInput("passwordConfirm", "password", "Confirm Password")}

          <div className="flex gap-4">
            {renderSelect(
              "country",
              countryData.map((c) => c.name)
            )}
            {renderSelect("state", states)}
          </div>

          <div className="flex gap-4">
            {renderInput("address1", "text", "Address Line 1")}
            {renderInput("address2", "text", "Address Line 2")}
          </div>

          <div className="flex gap-4">
            {renderInput("city", "text", "City")}
            {renderInput("zip", "text", "Zipcode")}
          </div>

          {formData.country &&
            renderInput("eoriNumber", "text", "EORI Number (optional)")}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => {
                setAccepted(e.target.checked);
                if (termsError) setTermsError(false);
              }}
              className={`w-[20px] h-[20px] border rounded-[4px] appearance-none flex items-center justify-center relative ${
                accepted ? "bg-white border-[#3E97FF]" : "border-[#D9D9D9]"
              } ${
                termsError ? "border-red-500" : ""
              } before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-gray-500 before:text-[14px] before:font-semibold before:opacity-0 checked:before:opacity-100 transition-all`}
            />
            <label className="text-sm text-[#5E6278]">
              I accept the{" "}
              <a href="#" className="text-[#3E97FF] underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Sign up
          </button>
        </form>
        <div className="w-full flex justify-center mt-[72px] items-center space-x-[10px] ">
          <p className="flex text-center ">
            <span className="text-[14px] text-[#181C32] italic font-normal leading-[24px] ">
              Created by&nbsp;
            </span>
            <span className="text-[14px] text-[#181C32] font-semibold leading-[24px] ">
              WAREACT
            </span>
          </p>
          <span className="w-[1px] h-[38px] bg-[#D9D9D9] "></span>
          <span>
            <Image
              src={"/icons/signup/footer.png"}
              height={24}
              width={110}
              alt={"wareact"}
              className="opacity-100"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
