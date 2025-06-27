'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface FormData {
  [key: string]: string;
}

const SignUpForm: React.FC = () => {
  const [accountType, setAccountType] = useState<"business" | "personal">("business");
  const [formData, setFormData] = useState<{ business: FormData; personal: FormData }>({
    business: {},
    personal: {},
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [accepted, setAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [states, setStates] = useState<string[]>([]);
const [countryData, setCountryData] = useState<Country[]>([]);

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


  const businessFields = [
    "fullName",
    "companyName",
    "email",
    "password",
    "passwordConfirm",
    "country",
    "state",
    "address1",
    "city"
  ];

  const personalFields = ["fullName", "email", "password", "passwordConfirm"];

useEffect(() => {
  axios
    .get<Country[]>("/data/countries.json")
    .then((res) => setCountryData(res.data))
    .catch((err) => console.error("Country fetch error:", err));
}, []);

useEffect(() => {
  const selectedCountry: Country | undefined = countryData.find(
    (c) => c.name === formData[accountType].country
  );

  if (selectedCountry) {
    setStates(selectedCountry.states.map((s) => s.name));
  } else {
    setStates([]);
  }
}, [formData[accountType].country, countryData]);


  const validate = (fields: string[], type: "business" | "personal") => {
    const newErrors: { [key: string]: boolean } = {};
    fields.forEach((field) => {
      if (!formData[type][field]?.trim()) {
        newErrors[field] = true;
      }
    });
    if (
      formData[type].password &&
      formData[type].passwordConfirm &&
      formData[type].password !== formData[type].passwordConfirm
    ) {
      newErrors["password"] = true;
      newErrors["passwordConfirm"] = true;
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields = accountType === "business" ? businessFields : personalFields;
    const newErrors = validate(requiredFields, accountType);
    const isTermsAccepted = accepted;
    setErrors(newErrors);
    setTermsError(!isTermsAccepted);

    if (Object.keys(newErrors).length === 0 && isTermsAccepted) {
      const dataToSend = {
        name: formData.business.fullName,
        email: formData.business.email,
        password: formData.business.password,
        password_confirmation: formData.business.passwordConfirm,
        phone: "905555555555",
        company_name: formData.business.companyName,
        brand_name: formData.business.storeName,
        country_id: formData.business.country,
        state_id: formData.business.state,
        address1: formData.business.address1,
        address2: formData.business.address2,
        city: formData.business.city,
        zipcode: formData.business.zip,
        eori_number: formData.business.eoriNumber,
        terms: true,
      };

      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/warehouse/register`, dataToSend);
        alert("✅ Success! User registered.");
        console.log(res.data);
      } catch (err) {
        console.error("❌ Registration failed:", err);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [accountType]: {
        ...formData[accountType],
        [name]: value,
      },
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const renderInput = (name: string, type: string = "text", placeholder?: string) => (
    <input
      name={name}
      type={type}
      placeholder={placeholder || name}
      value={formData[accountType][name] || ""}
      onChange={handleChange}
      className={`input border rounded px-3 py-2 w-full ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    />
  );

  const renderSelect = (name: string, options: string[]) => (
    <select
      name={name}
      value={formData[accountType][name] || ""}
      onChange={handleChange}
      className={`input border rounded px-3 py-2 w-full bg-white ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select {name}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-[#181C32] text-center font-inter text-[24px] font-semibold leading-[24px] tracking-[-0.24px]">Sign up to create account</h2>
        <p className="text-[#A1A5B7] text-center font-inter text-[14px] font-medium leading-[14px]">
          Please complete all fields accurately, as this information will be used to generate your invoices.
        </p>
<div className="flex gap-4 justify-center">
  <button
    type="button"
    onClick={() => setAccountType("business")}
    className={`w-36 py-4 rounded-[12px] flex flex-col items-center justify-center transition-all duration-300
      ${
        accountType === "business"
          ? "border border-[#E1E3EA] border-b-[3px] border-b-[#3E97FF] bg-white"
          : "border border-dashed border-[#E1E3EA] hover:border-[#3E97FF] bg-white"
      }`}
  >
    <Image
      src={`/icons/signup/${accountType === "business" ? "bus2.svg" : "bus.svg"}`}
      alt="business"
      width={30}
      height={30}
      className="mb-1"
    />
    <span
      className={`text-sm font-semibold transition-colors duration-300 ${
        accountType === "business" ? "text-[#3E97FF]" : "text-gray-600"
      }`}
    >
      Business
    </span>
  </button>

  <button
    type="button"
    onClick={() => setAccountType("personal")}
    className={`w-36 py-4 rounded-[12px] flex flex-col items-center justify-center transition-all duration-300
      ${
        accountType === "personal"
          ? "border border-[#E1E3EA] border-b-[3px] border-b-[#3E97FF] bg-white"
          : "border border-dashed border-[#E1E3EA] hover:border-[#3E97FF] bg-white"
      }`}
  >
    <Image
      src={`/icons/signup/${accountType === "personal" ? "pers2.svg" : "pers.svg"}`}
      alt="personal"
      width={30}
      height={30}
      className="mb-1"
    />
    <span
      className={`text-sm font-semibold transition-colors duration-300 ${
        accountType === "personal" ? "text-[#3E97FF]" : "text-gray-600"
      }`}
    >
      Personal
    </span>
  </button>
</div>

        {accountType === "business" && (
          <>
            {renderInput("fullName", "text", "First & Last Name")}
            {renderInput("companyName")}
            {renderInput("storeName", "text", "Amazon Store Name")}
            {renderInput("email", "email")}
            {renderInput("password", "password")}
            {renderInput("passwordConfirm", "password", "Password (re-enter please)")}
            <div className="grid grid-cols-2 gap-4">
              {renderSelect("country", countryData.map((c) => c.name))}
              {renderSelect("state", states)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {renderInput("address1", "text", "Address Line 1")}
              {renderInput("address2", "text", "Address Line 2")}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {renderInput("city")}
              {renderInput("zip")}
            </div>
            {formData[accountType].country && renderInput("eoriNumber", "text", "EORI Number (optional)")}
          </>
        )}

        {accountType === "personal" && (
          <>
            {renderInput("fullName", "text", "First & Last Name")}
            {renderInput("email", "email")}
            {renderInput("password", "password")}
            {renderInput("passwordConfirm", "password", "Password (re-enter please)")}
          </>
        )}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              if (termsError) setTermsError(false);
            }}
            className={`h-4 w-4 appearance-none border rounded-sm checked:bg-blue-500 checked:border-transparent ${
              termsError ? "border-red-500 border-2" : "border-gray-300 border"
            }`}
          />
          <span>
            I accept the <a href="#" className="text-blue-500">Terms and Conditions</a>
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
        >
          Sign up
        </button>

        <p className="text-center text-sm">
          Already have an Account? <a href="#" className="text-blue-500">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
