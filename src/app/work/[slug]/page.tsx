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

        <Link
          href="/#work"
          className="mt-16 inline-block font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink hover:text-accent-strong"
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
