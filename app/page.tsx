import {
  MotionLink,
  Parallax,
  Reveal,
  Stagger,
  StaggerItem,
  WordReveal
} from "../components/motion";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const techStack = ["React", "Node.js", "FastAPI", "MongoDB", "Go", "Python"];

const projects = [
  {
    name: "Nakshatra '26",
    metric: "150k daily requests · 782k transactions",
    description:
      "High-throughput event platform engineered for reliability at scale."
  },
  {
    name: "Eye Wave",
    metric: "Patent: IN202641026386",
    description:
      "Gaze-controlled accessibility, turning intent into an expressive interface."
  },
  {
    name: "Future Project",
    metric: "Awaiting next transmission",
    description: "A blank canvas for the next ambitious system."
  }
];

const experience = [
  {
    role: "Technical Intern @ Armada",
    description:
      "Distributed databases, polyglot microservices, and cloud networking for systems that operate at scale.",
    period: "2024 — Present"
  }
];

const achievements = [
  {
    title: "1st Prize, Code ReCET 3.0",
    subtitle: "National Hackathon",
    label: "Winner"
  }
];

/* ═════════════════════ COMMAND CARD (Win95) ═════════════════ */

function CommandCard({
  name,
  metric,
  description,
  index
}: (typeof projects)[number] & { index: number }) {
  return (
    <StaggerItem className="group">
      <article className="overflow-hidden border border-zinc-800 bg-black text-zinc-100 shadow-[12px_12px_0_#e4e4e7] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[16px_16px_0_#e4e4e7]">
        {/* ── Windows 95-style title bar ── */}
        <div className="flex items-center justify-between border-b border-zinc-700 bg-[#000080] px-3 py-2 font-mono text-[11px] text-white">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 bg-zinc-800 text-center text-[9px] font-bold leading-[14px]">
              ⌂
            </span>
            <span>
              project_{String(index + 1).padStart(2, "0")}.exe
            </span>
          </span>
          <span className="flex gap-1">
            <button
              className="flex h-[18px] w-[18px] items-center justify-center border border-zinc-600 bg-zinc-300 text-[10px] font-bold leading-none text-black"
              aria-label="Minimize"
              tabIndex={-1}
            >
              ─
            </button>
            <button
              className="flex h-[18px] w-[18px] items-center justify-center border border-zinc-600 bg-zinc-300 text-[10px] font-bold leading-none text-black"
              aria-label="Maximize"
              tabIndex={-1}
            >
              □
            </button>
            <button
              className="flex h-[18px] w-[18px] items-center justify-center border border-zinc-600 bg-zinc-300 text-[10px] font-bold leading-none text-black"
              aria-label="Close"
              tabIndex={-1}
            >
              ×
            </button>
          </span>
        </div>

        {/* ── Terminal body ── */}
        <div className="min-h-[255px] p-6 font-mono">
          <p className="mb-10 text-xs text-emerald-400">
            C:\AKSHAY\WORK&gt; ./launch{" "}
            {name.toLowerCase().replaceAll(" ", "-")}
          </p>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
            {name}
          </h3>
          <p className="mb-4 text-xs leading-6 text-amber-300">{metric}</p>
          <p className="max-w-xs text-sm leading-6 text-zinc-400">
            {description}
          </p>
          <p className="mt-8 text-xs text-zinc-600">
            status: {index === 2 ? "in-progress" : "deployed"}
          </p>
        </div>
      </article>
    </StaggerItem>
  );
}

/* ════════════════════ TIMELINE ITEM ════════════════════════ */

function TimelineItem({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="relative border-l-2 border-zinc-200 py-8 pl-8"
    >
      {/* dot */}
      <span className="absolute -left-[5px] top-10 h-2 w-2 rounded-full bg-black" />
      {children}
    </Reveal>
  );
}

/* ══════════════════════════ PAGE ═══════════════════════════ */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ─────────────────────── NAV ─────────────────────── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-sm font-semibold tracking-tight">
            AJ<span className="text-zinc-400">.</span>
          </a>
          <div className="hidden gap-8 text-xs font-medium text-zinc-500 sm:flex">
            <a href="#about" className="transition-colors hover:text-black">
              About
            </a>
            <a href="#work" className="transition-colors hover:text-black">
              Work
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-black"
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="transition-colors hover:text-black"
            >
              Achievements
            </a>
          </div>
          <MotionLink
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
          >
            Let&apos;s talk ↗
          </MotionLink>
        </div>
      </nav>

      {/* ─────────────────────── HERO ────────────────────── */}
      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-10">
        <div className="retro-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="mx-auto w-full max-w-7xl">
          <Parallax className="max-w-5xl">
            <Reveal>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                Hello, I&apos;m Akshay Joseph
              </p>
            </Reveal>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:text-[clamp(4rem,8vw,8.5rem)]">
              <WordReveal text="AI & Full-Stack Developer" />
              <span className="text-zinc-300"> | </span>
              <WordReveal text="Architecting Scalable Web Solutions" />
            </h1>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <p className="text-lg text-zinc-500">B.Tech CSE @ Saintgits</p>
                <div className="flex gap-3">
                  <MotionLink
                    href="#work"
                    className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
                  >
                    View my work ↘
                  </MotionLink>
                  <MotionLink
                    href="#about"
                    className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium"
                  >
                    More about me
                  </MotionLink>
                </div>
              </div>
            </Reveal>
          </Parallax>

          <p className="absolute bottom-8 left-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400 lg:left-10">
            Scroll to explore ↓
          </p>
        </div>
      </section>

      {/* ─────────────────────── ABOUT ───────────────────── */}
      <section
        id="about"
        className="border-t border-zinc-200 px-6 py-28 lg:px-10 lg:py-40"
      >
        <Reveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            01 / About
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              From rapid hackathon builds to{" "}
              <span className="text-zinc-400">
                enterprise-grade architecture.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
              I enjoy the rush of making an idea real, but my work at Armada
              taught me to make it last. There, I moved from shipping fast
              prototypes to designing distributed databases, polyglot
              microservices, and cloud networks built for the long run.
            </p>
          </div>
        </Reveal>

        {/* Tech marquee */}
        <div className="mt-28 overflow-hidden border-y border-zinc-200 py-5">
          <div className="marquee-track flex w-max">
            {[...techStack, ...techStack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-8 text-2xl font-medium tracking-tight text-zinc-300 sm:text-4xl"
              >
                {item}{" "}
                <span className="ml-8 text-zinc-200">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FEATURED WORK ──────────────── */}
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
            <CommandCard key={project.name} {...project} index={index} />
          ))}
        </Stagger>
      </section>

      {/* ──────────────────── EXPERIENCE ─────────────────── */}
      <section
        id="experience"
        className="px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              03 / Experience
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="mb-16 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
                Deep work,{" "}
                <span className="text-zinc-300">real systems.</span>
              </h2>
            </Reveal>

            {experience.map((exp, i) => (
              <TimelineItem key={exp.role} delay={i * 0.1}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-xl font-medium">{exp.role}</p>
                    <p className="mt-3 max-w-lg leading-7 text-zinc-500">
                      {exp.description}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-400">{exp.period}</p>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── ACHIEVEMENTS ────────────────── */}
      <section
        id="achievements"
        className="border-t border-zinc-200 bg-zinc-100 px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              04 / Recognition
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="mb-16 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
                Curiosity is a{" "}
                <span className="text-zinc-400">competitive edge.</span>
              </h2>
            </Reveal>

            {achievements.map((ach, i) => (
              <TimelineItem key={ach.title} delay={i * 0.1}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-xl font-medium">{ach.title}</p>
                    <p className="mt-3 text-zinc-500">{ach.subtitle}</p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-400">{ach.label}</p>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FOOTER / CTA ───────────────── */}
      <footer
        id="contact"
        className="bg-black px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-600">
              Have a problem worth solving?
            </p>
            <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
              Let&apos;s build what&apos;s next.
            </h2>
            <MotionLink
              href="mailto:hello@akshayjoseph.dev"
              className="mt-12 inline-block border-b border-white pb-2 text-lg"
            >
              hello@akshayjoseph.dev ↗
            </MotionLink>
          </Reveal>
          <div className="mt-28 flex justify-between border-t border-zinc-800 pt-6 text-xs text-zinc-600">
            <span>© 2026 Akshay Joseph</span>
            <span>Press ~ for a surprise</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
