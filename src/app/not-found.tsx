"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Rocket } from "lucide-react";

/* ─── Types ─── */
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

/* ─── Star field ─── */
function StarField({ stars }: { stars: Star[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Animated astronaut (pure SVG/CSS) ─── */
function Astronaut() {
  return (
    <div
      className="relative select-none"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Floating astronaut"
      >
        {/* Jetpack */}
        <rect x="42" y="80" width="14" height="28" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <rect x="64" y="80" width="14" height="28" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        {/* Jetpack glow */}
        <ellipse cx="49" cy="109" rx="5" ry="4" fill="#6366f1" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="71" cy="109" rx="5" ry="4" fill="#ec4899" opacity="0.7">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1s" repeatCount="indefinite" />
        </ellipse>

        {/* Body */}
        <rect x="36" y="68" width="48" height="44" rx="14" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Chest panel */}
        <rect x="48" y="78" width="24" height="16" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
        <circle cx="54" cy="86" r="3" fill="#6366f1">
          <animate attributeName="fill" values="#6366f1;#818cf8;#6366f1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="66" cy="86" r="3" fill="#ec4899">
          <animate attributeName="fill" values="#ec4899;#f472b6;#ec4899" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Left arm */}
        <rect x="16" y="72" width="22" height="14" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(-15 16 72)" />
        {/* Left glove */}
        <circle cx="17" cy="90" r="8" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />

        {/* Right arm */}
        <rect x="82" y="72" width="22" height="14" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(15 82 72)" />
        {/* Right glove */}
        <circle cx="103" cy="90" r="8" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />

        {/* Legs */}
        <rect x="44" y="108" width="14" height="24" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="62" y="108" width="14" height="24" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Boots */}
        <rect x="40" y="126" width="22" height="10" rx="5" fill="#64748b" />
        <rect x="58" y="126" width="22" height="10" rx="5" fill="#64748b" />

        {/* Helmet */}
        <circle cx="60" cy="50" r="28" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
        {/* Visor */}
        <ellipse cx="60" cy="50" rx="18" ry="16" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
        {/* Visor reflection */}
        <ellipse cx="53" cy="44" rx="5" ry="4" fill="white" opacity="0.12" transform="rotate(-20 53 44)" />
        <ellipse cx="67" cy="43" rx="2.5" ry="2" fill="white" opacity="0.1" />
        {/* Stars visible through visor */}
        <circle cx="57" cy="52" r="1" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="63" cy="47" r="0.8" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="56" r="0.7" fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Helmet ring */}
        <ellipse cx="60" cy="68" rx="22" ry="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      </svg>

      {/* Tether line */}
      <svg
        className="absolute"
        style={{ top: "40px", right: "-60px" }}
        width="70"
        height="40"
        viewBox="0 0 70 40"
        fill="none"
      >
        <path
          d="M 0 20 Q 35 5 70 20"
          stroke="#475569"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

/* ─── Orbiting debris ─── */
function OrbitingDebris() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Orbiting ring around 404 */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
        }}
      >
        {/* Small planet */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "600px",
            height: "600px",
            marginTop: "-300px",
            marginLeft: "-300px",
            animation: "orbit 20s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              boxShadow: "0 0 12px rgba(99,102,241,0.7)",
            }}
          />
        </div>

        {/* Asteroid */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "420px",
            height: "420px",
            marginTop: "-210px",
            marginLeft: "-210px",
            animation: "orbit 14s linear infinite reverse",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: "8px",
              height: "8px",
              background: "#475569",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Floating particles ─── */
function FloatingParticles({ particles }: { particles: Particle[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `hsl(${p.hue}, 70%, 60%)`,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.vx * 80, p.vx * 160],
            y: [0, p.vy * 80, p.vy * 160],
            opacity: [p.opacity, p.opacity * 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main 404 page ─── */
export default function NotFound() {
  const router = useRouter();
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate stars
    const generatedStars: Star[] = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }));
    setStars(generatedStars);

    // Generate floating particles
    const generatedParticles: Particle[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 245 : 330, // indigo or pink
    }));
    setParticles(generatedParticles);
  }, []);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Ambient glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "15%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "15%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          animation: "glow-pulse 5s 1s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Stars */}
      <StarField stars={stars} />

      {/* Floating particles */}
      <FloatingParticles particles={particles} />

      {/* Orbiting debris */}
      <OrbitingDebris />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">

        {/* Astronaut */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Astronaut />
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mb-4"
        >
          <span
            className="font-mono font-black leading-none select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 11rem)",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 40%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(99,102,241,0.4))",
            }}
          >
            404
          </span>
          {/* Glitch echo */}
          <span
            className="absolute inset-0 font-mono font-black leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 11rem)",
              background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
              transform: "translate(3px, 3px)",
            }}
            aria-hidden
          >
            404
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight"
        >
          Looks like you&apos;re{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            lost in space
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-slate-400 text-lg mb-10 max-w-md"
        >
          The page you&apos;re looking for has drifted into the void.
          <br />
          Don&apos;t worry — mission control has got you covered.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Go Home */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
            }}
          >
            <Home size={18} className="group-hover:scale-110 transition-transform" />
            Go Home
          </motion.a>

          {/* Go Back */}
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-300 border border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Brand footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex items-center gap-2 text-slate-600 text-sm"
        >
          <Rocket size={13} />
          <span>
            Free template by{" "}
            <a
              href="https://getcraftly.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              Craftly
            </a>
          </span>
        </motion.div>
      </div>
    </main>
  );
}
