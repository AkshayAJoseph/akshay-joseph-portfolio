"use client";

import {
  motion,
  type MotionProps,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { useThemeStore } from "../store/theme-store";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

/* ─────────────────────────── Reveal ─────────────────────────── */

export function Reveal({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...spring, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────── Word Reveal ────────────────────────── */

export function WordReveal({
  text,
  className = "",
  wordClassName = ""
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);
  const words = text.split(" ");

  if (isRetroMode) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } }
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClassName}`}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
          }}
          transition={spring}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─────────────────────────── Stagger ────────────────────────── */

export function Stagger({
  children,
  className = "",
  ...props
}: MotionProps & { children: React.ReactNode; className?: string }) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────── Stagger Item ───────────────────────── */

export function StaggerItem({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────── Motion Link ───────────────────────── */

export function MotionLink({
  href,
  children,
  className = "",
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/* ──────────────────────── Parallax ──────────────────────────── */

export function Parallax({
  children,
  className = "",
  distance = 36
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────── Floating Orb ───────────────────────── */

export function FloatingOrb() {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  if (isRetroMode) return null;

  return (
    <motion.div
      className="absolute -top-32 right-10 -z-10 h-96 w-96 rounded-full bg-zinc-200/50 blur-[100px]"
      animate={{
        y: [0, 40, 0],
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
