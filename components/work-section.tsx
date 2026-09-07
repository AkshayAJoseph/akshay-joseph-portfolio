"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/theme-store";
import { Reveal, Stagger, StaggerItem } from "./motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

/* ═══════════════════════════ TYPES ══════════════════════════ */

interface ProjectExpanded {
  overview: string;
  highlights: string[];
  stack: string[];
}

interface Project {
  name: string;
  metric: string;
  description: string;
  expanded: ProjectExpanded | null;
}

/* ═══════════════════════════ DATA ═══════════════════════════ */

const projects: Project[] = [
  {
    name: "Nakshatra '26",
    metric: "150k daily requests · 782k transactions",
    description:
      "High-throughput event platform engineered for reliability at scale.",
    expanded: {
      overview:
        "A full-scale event management platform built to handle the peak traffic of a national-level tech fest. Designed for zero downtime during critical registration and transaction windows.",
      highlights: [
        "Sustained 150k+ daily API requests with sub-200ms p95 latency",
        "Processed 782k financial transactions with ACID compliance",
        "Real-time dashboards for event organizers and participants",
        "Auto-scaling infrastructure with graceful degradation"
      ],
      stack: ["Next.js", "Node.js", "Redis", "PostgreSQL", "Docker"]
    }
  },
  {
    name: "Eye Wave",
    metric: "Patent: IN202641026386",
    description:
      "Gaze-controlled accessibility, turning intent into an expressive interface.",
    expanded: {
      overview:
        "A patented accessibility system that translates eye movements into device control, enabling hands-free computing for users with motor impairments.",
      highlights: [
        "Indian Patent granted: IN202641026386",
        "Real-time gaze tracking with <50ms response latency",
        "Adaptive calibration for diverse eye conditions",
        "Supports cursor control, typing, and full app navigation"
      ],
      stack: ["Python", "OpenCV", "MediaPipe", "FastAPI", "React"]
    }
  },
  {
    name: "Future Project",
    metric: "Awaiting next transmission",
    description: "A blank canvas for the next ambitious system.",
    expanded: null
  }
];

/* ═════════════════════ WIN95 TITLE BAR ══════════════════════ */

function TitleBarButton({
  symbol,
  label,
  onClick
}: {
  symbol: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex h-[18px] w-[18px] items-center justify-center border border-zinc-600 bg-zinc-300 text-[10px] font-bold leading-none text-black"
      aria-label={label}
      tabIndex={-1}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {symbol}
    </button>
  );
}

function Win95TitleBar({
  index,
  onClose
}: {
  index: number;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-700 bg-[#000080] px-3 py-2 font-mono text-[11px] text-white">
      <span className="flex items-center gap-2">
        <span className="inline-block h-3.5 w-3.5 bg-zinc-800 text-center text-[9px] font-bold leading-[14px]">
          ⌂
        </span>
        <span>project_{String(index + 1).padStart(2, "0")}.exe</span>
      </span>
      <span className="flex gap-1">
        <TitleBarButton symbol="─" label="Minimize" />
        <TitleBarButton symbol="□" label="Maximize" />
        <TitleBarButton symbol="×" label="Close" onClick={onClose} />
      </span>
    </div>
  );
}

/* ══════════════════════ COMMAND CARD ════════════════════════ */

function CommandCard({
  project,
  index,
  onExpand
}: {
  project: Project;
  index: number;
  onExpand: () => void;
}) {
  const canExpand = project.expanded !== null;

  return (
    <StaggerItem className="group">
      <article
        className={`flex h-[380px] flex-col overflow-hidden border border-zinc-800 bg-black text-zinc-100 shadow-[12px_12px_0_#e4e4e7] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[16px_16px_0_#e4e4e7] ${canExpand ? "cursor-pointer" : ""}`}
        onClick={canExpand ? onExpand : undefined}
        onKeyDown={
          canExpand
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") onExpand();
              }
            : undefined
        }
        role={canExpand ? "button" : undefined}
        tabIndex={canExpand ? 0 : undefined}
      >
        <Win95TitleBar index={index} />

        <div className="flex flex-1 flex-col p-6 font-mono">
          <p className="mb-10 text-xs text-emerald-400">
            C:\AKSHAY\WORK&gt; ./launch{" "}
            {project.name.toLowerCase().replaceAll(" ", "-")}
          </p>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
            {project.name}
          </h3>
          <p className="mb-4 text-xs leading-6 text-amber-300">
            {project.metric}
          </p>
          <p className="max-w-xs text-sm leading-6 text-zinc-400">
            {project.description}
          </p>
          <div className="mt-auto flex items-center justify-between pt-6">
            <p className="text-xs text-zinc-600">
              status: {index === 2 ? "in-progress" : "deployed"}
            </p>
            {canExpand && (
              <p className="text-xs text-zinc-600">click to expand ↗</p>
            )}
          </div>
        </div>
      </article>
    </StaggerItem>
  );
}

/* ═════════════════ EXPANDED WINDOW (MODAL) ══════════════════ */

function ExpandedWindow({
  project,
  index,
  onClose
}: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);
  const stableClose = useCallback(() => onClose(), [onClose]);

  /* Escape to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") stableClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [stableClose]);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const expanded = project.expanded;
  if (!expanded) return null;

  const windowContent = (
    <>
      <Win95TitleBar index={index} onClose={stableClose} />
      <div className="max-h-[70vh] overflow-y-auto p-8 font-mono">
        <p className="mb-6 text-xs text-emerald-400">
          C:\AKSHAY\WORK&gt; ./info{" "}
          {project.name.toLowerCase().replaceAll(" ", "-")}
        </p>

        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
          {project.name}
        </h3>
        <div className="mb-4 h-px bg-zinc-700" />
        <p className="mb-6 text-xs leading-6 text-amber-300">
          {project.metric}
        </p>

        <p className="mb-8 text-sm leading-7 text-zinc-300">
          {expanded.overview}
        </p>

        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
          &gt; Highlights
        </p>
        <ul className="mb-8 space-y-2">
          {expanded.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2 text-sm leading-6 text-zinc-400"
            >
              <span className="shrink-0 text-zinc-600">•</span>
              {h}
            </li>
          ))}
        </ul>

        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
          &gt; Tech Stack
        </p>
        <p className="text-sm text-zinc-400">
          {expanded.stack.join(" · ")}
        </p>

        <p className="mt-8 text-xs text-zinc-600">
          status: {index === 2 ? "in-progress" : "deployed"} · press Esc or
          click × to close
        </p>
      </div>
    </>
  );

  /* ── Retro mode: no animation ── */
  if (isRetroMode) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <div
          className="absolute inset-0 bg-black/70"
          onClick={stableClose}
        />
        <div className="relative z-10 w-full max-w-2xl overflow-hidden border border-zinc-700 bg-black text-zinc-100">
          {windowContent}
        </div>
      </div>
    );
  }

  /* ── Normal mode: animated ── */
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={stableClose}
      />
      <motion.div
        className="relative z-10 w-full max-w-2xl overflow-hidden border border-zinc-700 bg-black text-zinc-100 shadow-[16px_16px_0_rgba(255,255,255,0.08)]"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={spring}
      >
        {windowContent}
      </motion.div>
    </div>
  );
}

/* ════════════════════ EXPORTED SECTION ══════════════════════ */

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  return (
    <section
      id="work"
      className="bg-zinc-950 px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              02 / Selected work
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Built for impact.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">
            Systems that stay calm under pressure, with interfaces that invite
            people in.
          </p>
        </div>
      </Reveal>

      <Stagger className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <CommandCard
            key={project.name}
            project={project}
            index={index}
            onExpand={() => setActiveIndex(index)}
          />
        ))}
      </Stagger>

      {/* ── Expanded window modal ── */}
      {isRetroMode ? (
        activeIndex !== null &&
        projects[activeIndex].expanded && (
          <ExpandedWindow
            project={projects[activeIndex]}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
          />
        )
      ) : (
        <AnimatePresence>
          {activeIndex !== null && projects[activeIndex].expanded && (
            <ExpandedWindow
              key={activeIndex}
              project={projects[activeIndex]}
              index={activeIndex}
              onClose={() => setActiveIndex(null)}
            />
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
