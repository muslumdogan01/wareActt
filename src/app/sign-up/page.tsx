"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface FormData {
  [key: string]: string | undefined;
}

interface Country {
  phone_code: string;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
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
  const [formData, setFormData] = useState<FormData>({ phoneCode: "+1" });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [states, setStates] = useState<{ id: number; name: string }[]>([]);
  const [accepted, setAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requiredFields = [
    "fullName",
    "companyName",
    "email",
    "password",
    "passwordConfirm",
    "country",
    "state",
    "phone",
  ];

  useEffect(() => {
    axios
      .get<Country[]>("/data/countries.json")
      .then((res) => setCountryData(res.data))
      .catch((err) => console.error("Country fetch error:", err));
  }, []);

  useEffect(() => {
    if (!formData.country || countryData.length === 0) return;

    const selectedCountryIndex = countryData.findIndex(
      (c) => c.name === formData.country
    );
    console.log("Selected Country:", formData.country);
    console.log(
      "Selected Country Index + 1 (country_id):",
      selectedCountryIndex + 1
    );
    const selectedCountry = countryData[selectedCountryIndex];

    if (selectedCountry) {
      const countryId = selectedCountryIndex + 1; 

      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/states/${countryId}?size=1000`
        )
        .then((res) => {
          if (res.data?.status && res.data.states) {
            setStates(
              res.data.states.map((s: { id: number; name: string }) => ({
                id: s.id,
                name: s.name,
              }))
            );
          } else {
            setStates([]);
          }
        })
        .catch((err) => {
          console.error("❌ State fetch error:", err);
          setStates([]);
        });

      setFormData((prevData) => ({
        ...prevData,
        phoneCode: `+${selectedCountry.phone_code}`,
      }));
    } else {
      setStates([]);
      setFormData((prevData) => ({
        ...prevData,
        phoneCode: "",
      }));
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
    if (formData.password && formData.password.length < 8) {
      newErrors["password"] = true;
    }
    return newErrors;
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newErrors = validate();
  setErrors(newErrors);
  setTermsError(!accepted);

  if (Object.keys(newErrors).length > 0 || !accepted) {
    setIsSubmitting(false);
    return;
  }

  setIsSubmitting(true);

  const selectedState = states.find((s) => s.name === formData.state);
  const countryIndex = countryData.findIndex((c) => c.name === formData.country);

  const dataToSend = {
    name: formData.fullName,
    email: formData.email,
    password: formData.password,
    password_confirmation: formData.passwordConfirm,
    phone: `${formData.phoneCode}${formData.phone}`,
    company_name: formData.companyName,
    brand_name: formData.storeName,
    country_id: countryIndex >= 0 ? countryIndex + 1 : null,
    state_id: selectedState?.id || null,
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

    if (res.data.status) {
      router.push("/sign-up/confirmation");
    } else {
      setFormError(res.data.message || "Something went wrong.");
    }
  } catch (err) {
    console.error("❌ Registration failed:", err);
    setFormError("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phoneCode") {
      let updatedValue = value.trim();
      if (updatedValue && !updatedValue.startsWith("+")) {
        updatedValue = "+" + updatedValue.replace(/\+/g, "");
      }

      setFormData({
        ...formData,
        [name]: updatedValue,
      });

      if (errors["phone"]) {
        setErrors({ ...errors, phone: false });
      }
      const fieldName = name as string;
      if (fieldName === "email" && formError) {
        setFormError(null);
      }

      return;
    }

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
      className={`w-full px-3 py-2 leading-[12px] text-gray-600 text-[12px] border rounded focus:outline-none focus:ring-0 font-semibold ${
        errors[name] ? "border-red-500" : "border-[#E1E3EA]"
      }`}
    />
  );

  const renderSelectWithIds = (
    name: string,
    options: { id: number; name: string }[]
  ) => (
    <div className="relative w-full">
      <select
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className={`appearance-none w-full text-[#7E8299] font-semibold px-3 py-2 text-[12px] leading-[12px] border rounded focus:outline-none focus:ring-0 ${
          errors[name] ? "border-red-500" : "border-[#E1E3EA]"
        }`}
      >
        <option value="">Select {name}</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
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
    <div className="py-40  h-screen w-full">
      <div className="h-auto  flex flex-col items-center  justify-center  ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[490px] bg-white p-10 rounded-xl shadow-lg space-y-4"
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
          {renderInput("storeName", "text", "Brand Name")}
          {renderInput("email", "email", "Email")}
          {formError === "Warning.Register Unique Email" && (
            <p className="text-sm text-red-600 ">
              ⚠️ This email is already registered. Please use another email.
            </p>
          )}
          {renderInput("password", "password", "Password")}
          {renderInput("passwordConfirm", "password", "Confirm Password")}

          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow border-t border-[#EFF2F5]" />
            <span className="mx-3 text-[12px] font-medium leading-[12px] text-[#A1A5B7] whitespace-nowrap">
              Company Address
            </span>
            <hr className="flex-grow border-t border-[#EFF2F5]" />
          </div>

          <div className="flex gap-4">
            {renderSelectWithIds(
              "country",
              countryData.map((c, index) => ({ id: index + 1, name: c.name }))
            )}
            {renderSelectWithIds("state", states)}
          </div>

          <div className="flex gap-4">
            {renderInput("address1", "text", "Address Line 1")}
            {renderInput("address2", "text", "Address Line 2")}
          </div>

          <div className="flex gap-4">
            {renderInput("city", "text", "City")}
            {renderInput("zip", "text", "Zipcode")}
          </div>
          <div className="flex w-full">
            <div className="w-[110px]  text-gray-600 relative">
              <select
                name="phoneCode"
                value={formData.phoneCode || ""}
                onChange={handleChange}
                className={`w-full px-3 space-x-[22px] py-2 text-sm border rounded appearance-none focus:outline-none ${
                  errors["phone"] ? "border-red-500" : "border-gray-300"
                }`}
              >
                {countryData.map((c) => (
                  <option key={c.name} value={`+${c.phone_code}`}>
                    +{c.phone_code}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="w-full">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone || ""}
                onChange={handleChange}
                className={`w-full pr-6 px-3 py-2 text-sm border rounded focus:outline-none appearance-none ${
                  errors["phone"] ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
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
            <label className="text-[13px] leading-[14px] font-semibold text-[#5E6278]">
              I accept the{" "}
              <a href="#" className="text-[#3E97FF] ">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-[151px] h-[40px] rounded-[100px] cursor-pointer font-semibold text-[14px] leading-[1.4] transition-all duration-300 ease-in-out hover:bg-[#065AF1] hover:text-white text-[#065AF1] border-[#065AF1] border-[1px] flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
              "Sign Up"
            )}
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
