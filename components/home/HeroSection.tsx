"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    image: "/images/background-1.jpg",
    title: 'Buraq Space Camp',
    subtitle: 'Empowering Tomorrow\'s Innovators and Problem Solvers',
    description: 'Join Pakistan\'s most innovative space education program. A week-long transformative journey in Islamabad, where future leaders are forged through innovation, collaboration and transformative learning.'
  },
  {
    id: 2,
    image: "/images/background-2.jpg",
    title: 'Innovation & Discovery',
    subtitle: 'Where Future Leaders Meet Innovation and Expertise',
    description: 'Engage in hands-on learning guided by leading academics and industry professionals. Build practical skills and leadership qualities that prepare you for success in STEM, business and beyond.'
  },
  {
    id: 3,
    image: "/images/background-3.jpg",
    title: 'Future Leaders',
    subtitle: 'Empowering the Next Generation of Thinkers and Doers',
    description: 'Join a community of ambitious young minds committed to driving change through science, technology, and innovation. Network, learn, and grow alongside peers who share your passion for making a real-world impact.'
  },
  {
    id: 4,
    image: "/images/background-5.jpg",
    title: 'Global Network',
    subtitle: 'Connect with a Community of Leaders and Innovators',
    description: 'Become part of a prestigious alumni network that includes top executives, leading scientists, and industry pioneers. Build meaningful connections with professionals and organizations across sectors — opening doors to academic, research, and career opportunities worldwide.'
  }
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    // Auto-slide timer - increased from 5000ms to 7000ms for better readability
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 7000)

    return () => clearInterval(timer)
  }, [api])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="relative h-screen">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
                        {slide.title}
                      </h1>
                      
                      <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-[#91b1ff] px-4">
                        {slide.subtitle}
                      </h2>
                      
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto opacity-90 px-4">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <Button 
                          size="lg"
                          className="bg-white hover:bg-gray-100 text-[#304b78] hover:text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 group w-full sm:w-auto"
                          onClick={() => scrollToSection('contact')}
                        >
                          Apply Now
                          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                        <Button 
                          variant="outline"
                          size="lg"
                          className="border-2 border-white hover:bg-white hover:border-white text-white hover:text-[#304b78] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                          onClick={() => scrollToSection('experience')}
                        >
                          Watch Our Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2 sm:left-4 bg-white/20 border-white/20 hover:bg-white/30 text-white" />
        <CarouselNext className="right-2 sm:right-4 bg-white/20 border-white/20 hover:bg-white/30 text-white" />
      </Carousel>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === current - 1 ? 'bg-[#dbb13b] shadow-lg' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}