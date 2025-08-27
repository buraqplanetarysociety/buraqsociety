import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import VideoSection from '@/components/home/VideoSection'
import AboutSection from '@/components/home/AboutSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  ) 
}