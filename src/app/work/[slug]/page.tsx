import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { getCaseSections } from "@/lib/caseSections";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  const sections = getCaseSections(slug);

  return (
    <main className="min-h-screen bg-canvas">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-hairline bg-canvas/90 px-5 py-4 backdrop-blur-sm sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-base text-ink"
        >
          S. Sharma
        </Link>
        <Link
          href="/#work"
          className="flex h-11 items-center gap-2 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-2 transition-colors duration-[var(--duration-micro)] hover:text-accent-ink"
        >
          ← Back to work
        </Link>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-sunken sm:aspect-[21/9]">
        {study.cover ? (
          <img src={study.cover} alt={`${study.title} cover`} className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-ink-3">
            {study.title} cover
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-(--container-content) px-5 py-10 sm:px-6 lg:py-14">
        <div className="grid grid-cols-2 gap-6 border-b border-border-hairline pb-10 sm:grid-cols-4">
          {[
            { label: "Role", value: study.role },
            { label: "Timeline", value: study.timeline },
            { label: "Constraints", value: study.constraints ?? "" },
            { label: "Outcome", value: study.outcome },
          ].map((f) => (
            <div key={f.label}>
              <p className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-3">
                {f.label}
              </p>
              <p className="mt-2 text-base text-ink">{f.value}</p>
            </div>
          ))}
        </div>

        <h1 className="mt-12 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
          {study.title}
        </h1>
        <p className="mt-3 max-w-(--container-reading) text-lg text-ink-2">
          {study.outcome}
        </p>

        <div className="mt-14 flex flex-col gap-14">
          {sections.map((s) => (
            <div key={s.heading}>
              <div className="max-w-(--container-reading)">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                  {s.heading}
                </h2>
                {typeof s.body === "string"
                  ? s.body.split("\n\n").map((para, pi) => (
                      <p key={pi} className="mt-4 text-lg leading-relaxed text-ink-2">{para}</p>
                    ))
                  : <div>{s.body}</div>
                }
              </div>
              {s.imageGroups?.map((group, gi) => (
                <div
                  key={gi}
                  className={`mt-8 grid gap-4 ${
                    group.columns === 1
                      ? "grid-cols-1"
                      : group.columns === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : group.columns === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-2"
                  } ${group.className ?? ""}`}
                >
                  {Array.from({ length: group.count }).map((_, ii) => {
                    const src = group.images?.[ii];
                    return src ? (
                      <img key={ii} src={src} alt="" className="w-full rounded-xl" />
                    ) : (
                      <div key={ii} className="aspect-[16/10] rounded-xl bg-surface-sunken" />
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {study.figmaLink && (
          <a
            href={study.figmaLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 flex items-center gap-4 rounded-xl border border-border-hairline bg-surface-raised px-6 py-5 transition-colors hover:border-accent-ink/40 hover:bg-surface-raised"
          >
            <svg width="24" height="36" viewBox="0 0 38 57" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
              <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
            </svg>
            <div className="flex-1 min-w-0">
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-ink">View Design Files</p>
              <p className="mt-0.5 text-sm text-ink-2">{study.figmaLink.description}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-ink-3">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}

        <Link
          href="/#work"
          className="mt-10 inline-block font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink hover:text-accent-strong"
        >
          ← Back to work
        </Link>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} · Shivam Sharma`,
    description: study.outcome,
  };
}
