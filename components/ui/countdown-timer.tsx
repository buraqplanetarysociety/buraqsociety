"use client"

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string // ISO date string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`backdrop-blur-lg bg-white/10 rounded-xl p-4 sm:p-6 ${className}`}>
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDE047]">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white uppercase tracking-wider">
            Days
          </div>
        </div>
        
        <div className="text-white text-xl sm:text-2xl font-bold">|</div>
        
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDE047]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white uppercase tracking-wider">
            Hours
          </div>
        </div>
        
        <div className="text-white text-xl sm:text-2xl font-bold">|</div>
        
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDE047]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white uppercase tracking-wider">
            Minutes
          </div>
        </div>
        
        <div className="text-white text-xl sm:text-2xl font-bold">|</div>
        
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDE047]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}