import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://media.istockphoto.com/id/543352412/photo/embracing-diversity-for-a-healthier-you.jpg?s=612x612&w=0&k=20&c=4Q-99Lv2OlFmG88KjBcutKjo6AJ5vn2pMJrQNYZAeNM="
              className="absolute inset-0 h-full w-full object-cover rounded-3xl "
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl tracking-wide">
              Effortlessly <span className="text-primary">Schedule</span> Your
              Next <span className="text-primary">Doctor</span> Visit
            </h2>

            <p className="mt-4 text-gray-600">
              Discover a simpler, more efficient way to manage your healthcare
              with our doctor appointment booking platform. Here, we connect you
              with a wide network of healthcare professionals across various
              specialties, enabling you to find the right doctor for your needs
              at the click of a button. Our platform is designed with your
              convenience and peace of mind at its core, offering user-friendly
              scheduling, timely reminders, and all the information you need to
              make informed health decisions. Whether you're seeking a general
              practitioner, a specialist for a specific condition, or a
              consultation for wellness and prevention, our goal is to make
              accessing top-tier medical care as easy and seamless as possible.
              Take the first step towards better health and well-being by
              exploring our services today.
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
