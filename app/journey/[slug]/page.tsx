import { notFound } from "next/navigation";
import JourneyDetail from "@/components/JourneyDetail";
import { JOURNEYS, getJourney } from "@/lib/journeys";

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = getJourney(slug);
  if (!j) return { title: "找不到行程 — FLÂNEUR : ROYO" };
  return { title: `${j.name} — FLÂNEUR : ROYO`, description: j.excerpt };
}

export default async function JourneyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  return <JourneyDetail journey={journey} />;
}
