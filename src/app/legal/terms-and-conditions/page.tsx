"use client";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div
    style={{backgroundColor: "#111827"}}>
          <div className="max-w-4xl mx-auto px-6 py-12 text-white"
 
    >
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Terms & Conditions</h1>
      <p className="mb-6 text-sm text-gray-400">Effective Date: 05/01/2025</p>
      <p className="mb-6">
        Welcome to WareAct! These Terms & Conditions ('Terms') govern your access to and use of the WareAct platform, services, and website. By accessing or using WareAct, you agree to be bound by these Terms.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">1. Use of Our Services</h2>
        <p>You must be at least 18 years old. You agree to use WareAct lawfully and in line with these Terms.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">2. Account Registration</h2>
        <p>
          You must create an account and provide accurate information. You're responsible for your login and account activities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">3. Subscription and Payment</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>WareAct is subscription-based; fees depend on your chosen plan.</li>
          <li>Payment terms are outlined in your agreement.</li>
          <li>Failure to pay may result in suspension or termination.</li>
          <li>All fees are non-refundable unless stated otherwise.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">4. Intellectual Property</h2>
        <p>
          All materials, including software and branding, belong to WareAct or its licensors. You get a limited license to use it for internal business purposes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">5. User Data</h2>
        <p>
          You own your data. We process it to provide services. Check our <a href="/legal/privacy-policy" className="underline text-blue-400">Privacy Policy</a> for more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">6. Service Availability</h2>
        <p>
          We aim for full uptime but can't guarantee it. Maintenance or updates may occur without notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">7. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No liability for indirect or consequential damages.</li>
          <li>Max total liability limited to fees paid in the past 12 months.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">8. Termination</h2>
        <p>
          You may cancel anytime. We may suspend or terminate your account for violating terms or misuse.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">9. Changes to These Terms</h2>
        <p>
          We may update Terms and revise the effective date. Continued use means you accept the changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your State / Country]. Disputes go to the courts of [Your Jurisdiction].
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-300">11. Contact Us</h2>
        <p>
          For any questions, contact:<br />
          <strong>WareAct Support Team</strong><br />
          Email: <a href="mailto:support@wareact.com" className="underline text-blue-400">support@wareact.com</a>
        </p>
      </section>
    </div>
    </div>

  );
};

export default TermsAndConditions;
