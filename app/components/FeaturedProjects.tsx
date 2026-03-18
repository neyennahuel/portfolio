"use client";

import { useEffect, useState } from "react";

export type FeaturedProject = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  badges: string[];
  actions: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
  note?: string;
  featureTitle: string;
  featureItems: {
    title: string;
    description: string;
  }[];
  detailTitle: string;
  detailItems: {
    title: string;
    description: string;
  }[];
  tags: string[];
  galleryTitle: string;
  screenshots: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

type FeaturedProjectsProps = {
  projects: FeaturedProject[];
  basePath: string;
};

function imageSrc(basePath: string, src: string) {
  return `${basePath}${src}`;
}

function actionClasses(variant: "primary" | "secondary" = "secondary") {
  if (variant === "primary") {
    return "rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5";
  }

  return "rounded-full border border-border/70 bg-surface px-6 py-3 font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-md";
}

export default function FeaturedProjects({
  projects,
  basePath,
}: FeaturedProjectsProps) {
  const [selectedImage, setSelectedImage] = useState<{
    projectIndex: number;
    screenshotIndex: number;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const activeScreenshot = selectedImage
    ? projects[selectedImage.projectIndex].screenshots[selectedImage.screenshotIndex]
    : null;

  return (
    <>
      {projects.map((project, projectIndex) => (
        <div
          key={project.id}
          className="mb-14 rounded-[2rem] border border-border/60 bg-surface px-8 py-8 text-left shadow-[var(--shadow)]"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted">
            {project.eyebrow}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/60 bg-surface-muted px-3 py-1 text-sm text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="grid gap-8 xl:grid-cols-[1fr_1.05fr] xl:items-start">
            <div>
              <h3 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">
                {project.name}
              </h3>

              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={actionClasses(action.variant)}
                  >
                    {action.label}
                  </a>
                ))}

                {project.note && (
                  <span className="rounded-full border border-border/60 bg-surface-muted px-6 py-3 text-sm font-medium text-muted">
                    {project.note}
                  </span>
                )}
              </div>

              <div className="mt-8 grid gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  {project.featureTitle}
                </p>

                {project.featureItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-surface-muted/70 p-5"
                  >
                    <h4 className="mb-2 text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-surface px-3 py-1 text-sm text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 xl:grid-rows-[auto_1fr]">
              <div className="rounded-3xl border border-border/60 bg-surface-muted/70 p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  {project.detailTitle}
                </p>

                <div className="grid gap-4">
                  {project.detailItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border/60 bg-surface p-4"
                    >
                      <h4 className="mb-2 text-base font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  {project.galleryTitle}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((screenshot, screenshotIndex) => (
                    <button
                      key={screenshot.src}
                      type="button"
                      onClick={() =>
                        setSelectedImage({
                          projectIndex,
                          screenshotIndex,
                        })
                      }
                      className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-surface text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] ${
                        project.screenshots.length % 2 !== 0 &&
                        screenshotIndex === project.screenshots.length - 1
                          ? "sm:col-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={imageSrc(basePath, screenshot.src)}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        loading="lazy"
                        className="h-auto w-full"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                      <span className="pointer-events-none absolute right-4 bottom-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white opacity-0 transition group-hover:opacity-100">
                        Ampliar
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeScreenshot && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center">
            <div
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>

              <img
                src={imageSrc(basePath, activeScreenshot.src)}
                alt={activeScreenshot.alt}
                width={activeScreenshot.width}
                height={activeScreenshot.height}
                className="max-h-[78vh] w-full rounded-[1.4rem] bg-slate-950 object-contain"
              />

              <p className="px-2 pt-3 text-sm text-slate-300">
                {activeScreenshot.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
