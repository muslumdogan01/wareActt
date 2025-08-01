"use client";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div
    style={{backgroundColor: "#111827"}}
    >
            <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-400">Effective Date: 05/01/2025</p>
      <p className="mb-6">
        At WareAct, your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when interacting with our website, platform, and services.
        By using WareAct, you agree to the practices described in this policy.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing info, etc.</li>
          <li><strong>Business Information:</strong> Warehouse addresses, customer names, shipping data, etc.</li>
          <li><strong>Usage Information:</strong> IP address, browser types, pages visited, etc.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> To personalize your experience and improve services.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide, maintain, and improve the WareAct platform.</li>
          <li>Process transactions and manage accounts.</li>
          <li>Communicate updates and support info.</li>
          <li>Analyze usage to enhance performance.</li>
          <li>Ensure data security and prevent fraud.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">3. How We Share Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>With service providers (cloud, payments, etc.).</li>
          <li>With authorized carriers and marketplaces.</li>
          <li>When legally required.</li>
          <li>During a merger, acquisition, or sale.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">4. Data Security</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>SSL encryption.</li>
          <li>Secure cloud infrastructure.</li>
          <li>Role-based access control.</li>
          <li>Regular audits and data backups.</li>
        </ul>
        <p className="mt-4">You are responsible for keeping your login credentials safe.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">5. Data Retention</h2>
        <p>
          We retain your information as long as your account is active or as necessary. You can request deletion anytime, unless restricted legally.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">6. Your Rights</h2>
        <p className="mb-4">
          You may have rights such as:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access, correct, or delete your data.</li>
          <li>Object to certain uses.</li>
          <li>Withdraw consent anytime.</li>
        </ul>
        <p className="mt-4">To exercise these rights, contact us at <a href="mailto:support@wareact.com" className="underline text-blue-400">support@wareact.com</a>.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">7. Third-Party Links</h2>
        <p>
          We may link to third-party sites. We’re not responsible for their privacy practices or content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. We’ll post changes here and notify you if they’re significant.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-300">9. Contact Us</h2>
        <p>
          If you have any questions, contact:
        </p>
        <p className="mt-2">
          <strong>WareAct Support Team</strong><br />
          Email: <a href="mailto:support@wareact.com" className="underline text-blue-400">support@wareact.com</a>
        </p>
      </section>
    </div>
    </div>

  );
};

export default PrivacyPolicy;
