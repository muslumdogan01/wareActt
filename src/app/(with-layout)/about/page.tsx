"use client";
import React from "react";

const AboutPage: React.FC = () => {
  return (
  <div className="w-full relative bg-white 4xl:h-full">
      <div className="max-w-6xl mx-auto px-6 py-40 text-black">
      {/* Hero Section */}
      <div className="text-left mb-20">
        <h1 className="text-4xl font-extrabold mb-4">About WareAct</h1>
        <p className="text-xl text-gray-800">
          Simplifying Warehouse Management — One Shipment at a Time
        </p>
      </div>

      {/* Who We Are */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            WareAct was created by a passionate team of logistics experts, software engineers, and business owners who deeply understand the everyday challenges of warehouse operations.
          </p>
          <p>
            From inventory headaches to shipping delays, we ve lived it — and built WareAct to solve it. Our platform helps you take control, eliminate bottlenecks, and deliver top-notch service to your customers.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
        <p className="text-lg mb-6 leading-relaxed">
          WareAct offers a cloud-based Warehouse Management System (WMS) tailored for today’s logistics challenges. Whether you're running a small operation or managing thousands of SKUs across multiple warehouses, we help you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg pl-4">
          <li>Automate order processing and fulfillment</li>
          <li>Integrate with marketplaces and carriers</li>
          <li>Track inventory and shipments in real-time</li>
          <li>Optimize space, staffing, and workflows</li>
          <li>Deliver faster and more reliable service</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Why Choose WareAct?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          We get it — every warehouse is different. That’s why WareAct is built to be flexible, scalable, and easy to use:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg pl-4">
          <li><strong>3PL-Ready:</strong> Handle complex third-party logistics with ease</li>
          <li><strong>Seamless Integrations:</strong> Connect marketplaces, carriers, and tools effortlessly</li>
          <li><strong>Cloud-Based:</strong> Access your warehouse anytime, anywhere</li>
          <li><strong>Secure:</strong> Your data is protected with industry-standard practices</li>
          <li><strong>Reliable Support:</strong> Our team is with you every step of the way</li>
        </ul>
      </section>

      {/* Our Commitment */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-lg leading-relaxed">
          WareAct isn’t just software — it’s a partnership. We’re here to help you grow, adapt, and thrive in a fast-moving logistics world. Whether you're just starting out or scaling rapidly, we’ve got your back.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-lg mb-6">
          Ready to simplify your warehouse operations?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  </div>
  );
};

export default AboutPage;
