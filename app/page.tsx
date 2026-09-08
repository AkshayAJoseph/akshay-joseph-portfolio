import {
  MotionLink,
  Parallax,
  Reveal,
  WordReveal,
  FloatingOrb
} from "../components/motion";
import { WorkSection } from "../components/work-section";
import { RetroToggleButton } from "../components/theme-provider";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const techStack = ["React", "Node.js", "FastAPI", "MongoDB", "Go", "Python"];


const experience = [
  {
    role: "Technical Intern - Armada India",
    description:
      "Distributed databases, polyglot microservices, and cloud networking for systems that operate at scale.",
    period: "Jun 26' — Aug 26'"
  },
  {
    role: "President - Open Source Club, Saintgits",
    description:
      "",
    period: "Apr 2026 - 27'"
  },
  {
    role: "Vice-President - CODE @ Saintgits",
    description: "",
    period: "Apr 2026 - 27'"
  },
  {
    role: "Secretary - Open Source Club, Saintgits",
    description:
      "Organized 5+ activities engaging 50+ students in open-source contributions.",
    period: "Apr 2025 - 26'"
  },
  {
    role: "Learning Coordinator - TinkerHub Saintgits",
    description:
      "Led hands-on workshops, and 10+ Learning activities and hackathons to upskill students in emerging technologies.",
    period: "Apr 2025 - 26'"
  },
  {
    role: "Technical Head - ACM Saintgits",
    description:
      "Managed technical initiatives and conducted Ascend 26', a National-level Hackathon, boosting student participation.",
    period: "Apr 2025 - 26'"
  }
  
];

const achievements = [
  {
    title: "1st Prize, Code ReCET 3.0",
    subtitle: "National Hackathon, CET. Selected as Winning team from 800+ applicants and 80+ competing teams",
    label: "March 2026"
  },
  {
    title: "1st Place – Spin-Hack Hackathon", 
    subtitle: "Conducted by IEEE Student Branch, Saintgits",
    label: "August 2025"
  },
  {
    title: "3rd Place – CTF Online Competition",
    subtitle: "By Traboda at CareerLink, SCMS College of Engineering",
    label: "January 2025"
  },
  {
    title: "1st Prize – SUITS “The Third Act” HR Game",
    subtitle: "By Saintgits College of Applied Sciences",
    label: "October 2024"
  }
];



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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              Resume
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
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pb-16 pt-32 sm:min-h-screen sm:items-center sm:pb-20 lg:px-10 lg:pt-32">
        <div className="retro-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <FloatingOrb />
        <div className="mx-auto w-full max-w-7xl relative z-10">
          <Parallax className="max-w-5xl">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 sm:mb-8">
                Akshay Joseph
              </p>
            </Reveal>

            <h1 className="max-w-5xl text-[clamp(2.75rem,10vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] sm:text-[clamp(3.5rem,8vw,8.5rem)]">
              <span className="block text-zinc-300">
                <WordReveal text="Engineering" />
              </span>
              <span className="block">
                <WordReveal text="Scalable Systems." />
              </span>
            </h1>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                <p className="text-[15px] uppercase tracking-[0.2em] text-zinc-400">
                  B.Tech CSE @ Saintgits College of Engineering
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <MotionLink
                    href="#work"
                    className="w-full whitespace-nowrap rounded-full bg-black px-5 py-3.5 text-center text-sm font-medium text-white sm:w-auto sm:py-3"
                  >
                    View my work ↘
                  </MotionLink>
                  <MotionLink
                    href="#about"
                    className="w-full whitespace-nowrap rounded-full border border-zinc-300 px-5 py-3.5 text-center text-sm font-medium sm:w-auto sm:py-3"
                  >
                    More about me
                  </MotionLink>
                  <MotionLink
                    href="/resume.pdf"
                    className="w-full whitespace-nowrap rounded-full border border-zinc-300 px-5 py-3.5 text-center text-sm font-medium sm:w-auto sm:py-3"
                  >
                    Resume ↓
                  </MotionLink>
                </div>
              </div>
            </Reveal>
          </Parallax>

          <p className="mt-16 text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:absolute sm:bottom-8 sm:left-6 sm:mt-0 lg:left-10">
            Scroll to explore ↓
          </p>
        </div>
      </section>

      {/* ─────────────────────── ABOUT ───────────────────── */}
      <section
        id="about"
        className="border-t border-zinc-200 px-6 py-16 sm:py-24 lg:px-10 lg:py-40"
      >
        <Reveal className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col gap-12 lg:pr-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              01 / About
            </p>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-100">
              <img
                src="/profile.jpg"
                alt="Akshay Joseph"
                className="retro-photo h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              From rapid hackathon builds to{" "}
              <span className="text-zinc-400">
                enterprise-grade architecture.
              </span>
            </h2>
            <div className="mt-8 flex max-w-2xl flex-col gap-6 text-lg leading-8 text-zinc-500 lg:text-xl lg:leading-9">
              <p>
                I am an AI and Full-Stack Developer who loves the rush of bringing ideas to life. While hackathons taught me how to move fast and prototype, my industrial experience taught me how to build for the long term.
              </p>
              <p>
                Today, my focus lies at the intersection of a clean technical architecture and minimalist design. Whether I'm building distributed microservices or interactive interfaces, I believe in building systems that stay calm under pressure and invite people in.
              </p>
            </div>
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
                <span className="ml-8 text-zinc-200">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FEATURED WORK ──────────────── */}
      <WorkSection />

      {/* ──────────────────── EXPERIENCE ─────────────────── */}
      <section
        id="experience"
        className="px-6 py-16 sm:py-24 lg:px-10 lg:py-40"
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
        className="border-t border-zinc-200 bg-zinc-100 px-6 py-16 sm:py-24 lg:px-10 lg:py-40"
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
            <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
              <MotionLink
                href="mailto:akshayjoseph003@gmail.com"
                className="inline-block border-b border-white pb-2 text-lg"
              >
                akshayjoseph003@gmail.com ↗
              </MotionLink>
              <div className="flex items-center gap-6 text-sm text-zinc-400">
                <MotionLink
                  href="https://github.com/AkshayAJoseph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub ↗
                </MotionLink>
                <MotionLink
                  href="https://linkedin.com/in/akshayjoseph003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn ↗
                </MotionLink>
              </div>
            </div>
          </Reveal>
          <div className="mt-28 flex justify-between border-t border-zinc-800 pt-6 text-xs text-zinc-600">
            <span>© 2026 Akshay Joseph</span>
            <RetroToggleButton />
          </div>
        </div>
      </footer>
    </main>
  );
}
