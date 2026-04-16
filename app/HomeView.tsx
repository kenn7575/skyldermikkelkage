"use client"
import GradientBlinds from "../lib/GradientBlinds"

interface HomeViewProps {
  showBanner: boolean
}

export default function HomeView({ showBanner }: HomeViewProps) {
  return (
    <div style={{ width: "100%", height: "100dvh", position: "relative" }}>
      <GradientBlinds
        gradientColors={["#FF9FFC", "#5227FF"]}
        angle={0}
        noise={0.3}
        blindCount={12}
        blindMinWidth={50}
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.15}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          className="font-extrabold"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "6rem",
            margin: 0,
          }}
        >
          {showBanner ? "Ja" : "Nej"}
        </h1>
      </div>
    </div>
  )
}
