'use client'
// Import necessary dependencies
import type { NextPage } from 'next'
import React from 'react'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

// Define props for the SparklesCore component
type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

// SparklesCore component definition
export const SparklesCore = (props: ParticlesProps) => {
  // Destructure props
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props

  // State to track initialization of particles engine
  const [init, setInit] = useState(false)

  // Initialize particles engine on component mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  // Animation controls for fade-in effect
  const controls = useAnimation()

  // Callback function when particles are loaded
  const particlesLoaded = async (container?: Container) => {
    if (container) {
      // Start fade-in animation
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
    }
  }

  return (
    // Wrapper div with motion for fade-in effect
    <motion.div
      animate={controls}
      className={cn('opacity-0', className)}
    >
      {init && (
        // Particles component
        <Particles
          id={id || 'tsparticles'}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={{
            // Particle configuration options
            background: {
              color: {
                value: background || '#0d47a1',
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              // Detailed particle properties and animations
              bounce: {
                horizontal: { value: 1 },
                vertical: { value: 1 },
              },
              collisions: {
                absorb: { speed: 2 },
                bounce: {
                  horizontal: { value: 1 },
                  vertical: { value: 1 },
                },
                enable: false,
                maxSpeed: 50,
                mode: 'bounce',
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: particleColor || '#ffffff',
                animation: {
                  h: { count: 0, enable: false, speed: 1, decay: 0, delay: 0, sync: true, offset: 0 },
                  s: { count: 0, enable: false, speed: 1, decay: 0, delay: 0, sync: true, offset: 0 },
                  l: { count: 0, enable: false, speed: 1, decay: 0, delay: 0, sync: true, offset: 0 },
                },
              },
              // ... (other particle properties)
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  )
}