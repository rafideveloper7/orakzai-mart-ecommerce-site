// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Orakzai Mart</h1>
      
      <div className="space-y-6 text-lg text-gray-700">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p>
            At Orakzai Mart, our mission is to provide cutting-edge digital technology 
            to enthusiasts and professionals alike. We believe that everyone deserves 
            access to high-quality cameras, drones, and smart devices that can help 
            capture life's precious moments and enhance daily productivity.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
          <p>
            We envision a world where technology empowers creativity and connectivity. 
            As the leading digital shop for cameras, drones, and smart devices, we aim 
            to be the trusted partner for photographers, videographers, tech enthusiasts, 
            and everyday users seeking reliable and innovative products.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Professional and consumer-grade cameras</li>
            <li>Advanced drones for photography and videography</li>
            <li>Latest smart devices and accessories</li>
            <li>Expert advice and customer support</li>
            <li>Competitive prices and regular promotions</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p>All products are carefully selected and tested for quality and performance.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p>Our team of experts is always ready to help you make the right choice.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p>Quick and reliable delivery to get your products when you need them.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Secure Shopping</h3>
              <p>Your privacy and security are our top priorities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;