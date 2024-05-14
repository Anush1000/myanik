import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content font-bold">We love our customers!</h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>Welcome to Anik!</strong> At Anik, we believe in more than just selling products; we believe in creating experiences that resonate with you, our valued customers. Founded with a passion for quality and a commitment to customer satisfaction, Anik is your destination for premium goods and exceptional service.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>Our Story:</strong> Anik started as a vision shared by a group of individuals who were passionate about curating a collection of products that inspire and delight. From our humble beginnings, we've grown into a thriving online marketplace, offering a diverse range of carefully selected items to suit every lifestyle.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>What Sets Us Apart:</strong> At Anik, we take pride in offering products that are not only aesthetically pleasing but also ethically sourced and environmentally friendly whenever possible. We believe in the power of conscious consumerism and strive to partner with brands that share our values of sustainability and social responsibility.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>Our Commitment to You:</strong> Your satisfaction is our top priority. Whether you're shopping for the latest trends or timeless classics, our team is dedicated to providing you with a seamless shopping experience from start to finish. From our easy-to-navigate website to our responsive customer support, we're here to make your journey with Anik enjoyable and hassle-free.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>Join the Anik Community:</strong> We invite you to join our growing community of like-minded individuals who appreciate quality, authenticity, and creativity. Follow us on social media to stay updated on the latest arrivals, exclusive offers, and behind-the-scenes glimpses into the world of Anik.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          <strong>Get in Touch:</strong> Have a question or feedback? We'd love to hear from you! Our friendly team is always here to assist you, so don't hesitate to reach out via email, phone, or live chat. Your input helps us continuously improve and tailor our services to better serve your needs.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          Thank you for choosing Anik. We're honored to be a part of your shopping journey.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content font-medium">
          Warm regards, The Anik Team
        </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
