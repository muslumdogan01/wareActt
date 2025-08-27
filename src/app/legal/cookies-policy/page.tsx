
import React from "react";

export const metadata = {
  title: "Cookies Policy | WareAct",
  description: "Understand how WareAct uses cookies and tracking technologies.",
};

const CookiesPolicy: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-700">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">Cookie Policy</h1>
        <p className="mb-6 text-sm text-gray-500">Effective Date: 05/01/2025</p>
        <p className="mb-6">
          At WareAct, we are committed to protecting your privacy and providing transparency about how we use cookies and similar technologies.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help remember your preferences and improve user experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">2. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Essential Cookies:</strong> Enable core functions like logins and session handling.</li>
            <li><strong>Performance & Analytics Cookies:</strong> Help us improve the site by collecting usage data.</li>
            <li><strong>Functionality Cookies:</strong> Remember your settings like language or login info.</li>
            <li><strong>Targeting & Advertising Cookies:</strong> Show relevant ads based on your activity.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">3. How We Use Cookies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Authenticate users and keep sessions secure.</li>
            <li>Save preferences and boost usability.</li>
            <li>Analyze performance and optimize our platform.</li>
            <li>Support marketing and show personalized content.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">4. Third-Party Cookies</h2>
          <p>
            We may use third-party services like Google Analytics or chat support tools. These cookies are governed by their own privacy policies.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Track site performance and analytics.</li>
            <li>Measure ad campaigns’ effectiveness.</li>
            <li>Provide features like embedded videos or support chat.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">5. Managing Cookies</h2>
          <p className="mb-2">
            You can manage or delete cookies through your browser settings. Most browsers let you:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>View stored cookies</li>
            <li>Delete all or selected cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies (but this may affect functionality)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy occasionally. Updates will be posted here, and you’ll be notified if major changes occur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-500">7. Contact Us</h2>
          <p>
            For any cookie-related questions, contact:
            <br />
            <strong>WareAct Support Team</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:support@wareact.com"
              className="underline text-blue-600"
            >
              support@wareact.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;
