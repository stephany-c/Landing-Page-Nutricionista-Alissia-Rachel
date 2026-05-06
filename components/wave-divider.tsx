"use client"

interface WaveDividerProps {
  variant?: "wave1" | "wave2" | "wave3" | "wave4"
  flip?: boolean
  className?: string
  fillColor?: string
}

export function WaveDivider({ 
  variant = "wave1", 
  flip = false, 
  className = "",
  fillColor = "fill-background"
}: WaveDividerProps) {
  const waves = {
    wave1: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto block ${flip ? "rotate-180" : ""} ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
          className={fillColor}
        />
      </svg>
    ),
    wave2: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto block ${flip ? "rotate-180" : ""} ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 60L40 55C80 50 160 40 240 45C320 50 400 70 480 75C560 80 640 70 720 60C800 50 880 40 960 45C1040 50 1120 70 1200 75C1280 80 1360 70 1400 65L1440 60V120H1400C1360 120 1280 120 1200 120C1120 120 1040 120 960 120C880 120 800 120 720 120C640 120 560 120 480 120C400 120 320 120 240 120C160 120 80 120 40 120H0V60Z"
          className={fillColor}
        />
      </svg>
    ),
    wave3: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto block ${flip ? "rotate-180" : ""} ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L48 10C96 20 192 40 288 50C384 60 480 60 576 50C672 40 768 20 864 15C960 10 1056 20 1152 35C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
          className={fillColor}
        />
      </svg>
    ),
    wave4: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto block ${flip ? "rotate-180" : ""} ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 55C840 70 960 90 1080 90C1200 90 1320 70 1380 60L1440 50V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z"
          className={fillColor}
        />
      </svg>
    ),
  }

  return waves[variant]
}

export function WaveLayered({ 
  className = "",
  topColor = "fill-primary/5",
  bottomColor = "fill-background"
}: { 
  className?: string
  topColor?: string
  bottomColor?: string
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        {/* Back layer */}
        <path
          d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 80C672 90 768 110 864 115C960 120 1056 110 1152 95C1248 80 1344 60 1392 50L1440 40V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
          className={topColor}
        />
        {/* Front layer */}
        <path
          d="M0 140L48 135C96 130 192 120 288 115C384 110 480 110 576 120C672 130 768 150 864 155C960 160 1056 150 1152 135C1248 120 1344 100 1392 90L1440 80V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V140Z"
          className={bottomColor}
        />
      </svg>
    </div>
  )
}

export function WaveCurved({
  flip = false,
  className = "",
  fillColor = "fill-background"
}: {
  flip?: boolean
  className?: string
  fillColor?: string
}) {
  return (
    <svg
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto block ${flip ? "rotate-180" : ""} ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 100C240 100 240 20 480 20C720 20 720 100 960 100C1200 100 1200 20 1440 20V100H0Z"
        className={fillColor}
      />
    </svg>
  )
}

export function WaveAnimated({
  className = "",
  fillColor = "fill-background"
}: {
  className?: string
  fillColor?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block animate-wave"
        preserveAspectRatio="none"
        style={{ minWidth: "200%" }}
      >
        <path
          d="M0 60L60 55C120 50 240 40 360 45C480 50 600 70 720 75C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30L1500 35C1560 40 1680 50 1800 60C1920 70 2040 80 2160 75C2280 70 2400 50 2520 45C2640 40 2760 50 2820 55L2880 60V120H2820C2760 120 2640 120 2520 120C2400 120 2280 120 2160 120C2040 120 1920 120 1800 120C1680 120 1560 120 1440 120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
          className={fillColor}
        />
      </svg>
    </div>
  )
}
