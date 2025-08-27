"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Faryal Awais",
    year: "2018",
    content:
      "You'll come back home knowing not just a lot more people, a lot more things but a whole lot more about yourself too. It's a journey of self reflection, potential realization, discovery and bond formation. It's the point in your life where you'll put yourself to ultimate tests, redefine your limits and imbue yourself with resilience, bravery, empathy and belief.",
    avatar: "/images/testimonial-Faryal-Awais.png",
  },
  {
    id: 2,
    name: "Talha Niazi",
    year: "2018",
    content:
      "I can go on for hours and hours, describing the sublime experience at camp but I would never be able to comprehend its reality myself. Every instant spent at Buraq was a billion times better than regular routine. Buraq is the epitome of brilliance.",
    avatar: "/images/testimonial-Talha.png",
  },
  {
    id: 3,
    name: "Adeela Muhammad",
    year: "2015",
    content:
      "Hailing from Hyderabad, my story was not much of a read before i was selected for Buraq. Buraq was about our shared fascination when we discussed black holes. It was the strange yet intelligent conversations we had at dining tables surrounded by the chilling winds of Islamabad.",
    avatar: "/images/testimonial-Adeela-Muhammad.png",
  },
  {
    id: 4,
    name: "Moiz Amer",
    year: "2015",
    content:
      "Getting to spend ten days and meeting not only people who share the same passion as me but professionals who have etched their name in their respective fields has inspired me to live a life of learning constantly, not only alchemising myself but working towards the world I believe in.",
    avatar: "/images/testimonial-Moiz-Amir.png",
  },
  {
    id: 5,
    name: "Zuhayr Jabbar",
    year: "2018",
    content:
      "I didn't make friends at camp, I made a family. In those 11 days you realize what humans are capable of when they stand together. I learnt values of life, not defined by success or money, but by memories; by the journey; and by one's contribution to society.",
    avatar: "/images/testimonial-Zuhayr-Jabbar.png",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Create an array that shows 3 testimonials starting from currentIndex
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Alumni Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Hear from our graduates who experienced the transformative journey
              at Buraq Space Camp
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
  variant="outline"
  size="icon"
  onClick={prevSlide}
  disabled={isAnimating}
  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border-2 border-[#304b78] hover:bg-[#304b78] hover:text-white shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 rounded-full w-10 h-10"
>
  <ChevronLeft className="h-5 w-5" />
</Button>


            <Button
  variant="outline"
  size="icon"
  onClick={nextSlide}
  disabled={isAnimating}
  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border-2 border-[#304b78] hover:bg-[#304b78] hover:text-white shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 rounded-full w-10 h-10"
>
  <ChevronRight className="h-5 w-5" />
</Button>


            {/* Testimonials Container */}
            <div className="overflow-hidden mx-12">
              <div
                className={`flex space-x-6 justify-center transition-all duration-300 ease-out ${
                  isAnimating ? "opacity-90" : "opacity-100"
                }`}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${currentIndex}-${index}`}
                    className="w-full lg:w-[30%] flex-shrink-0"
                  >
                    <Card className="bg-white border border-gray-200 hover:border-[#304b78] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full relative group">
                      {/* Quote Icon in Corner */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-[#304b78] rounded-full flex items-center justify-center z-10 shadow-md group-hover:bg-[#dbb13b] transition-colors duration-300">
                        <Quote className="h-5 w-5 text-white" />
                      </div>

                      <CardContent className="p-3 h-full flex flex-col">
                        {/* Profile Image */}
                        <div className="text-center mb-6">
                          <div className="relative w-20 h-20 mx-auto mb-4">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover object-top border-4 border-gray-100 shadow-md"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {testimonial.name}
                          </h3>
                          <div className="inline-block px-3 py-1 bg-[#304b78] text-white rounded-full text-sm font-semibold">
                            Batch of {testimonial.year}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex-grow flex flex-col justify-center">
                          <p className="text-gray-700 text-sm leading-relaxed text-center italic mb-4">
                            &quot;{testimonial.content}&quot;
                          </p>
                        </div>

                     
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  index === currentIndex
                    ? "bg-[#304b78] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}