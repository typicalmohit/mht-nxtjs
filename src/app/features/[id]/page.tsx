import { features } from "@/data/features";
import { GreetingButton } from "@/components/greeting-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

interface FeaturePageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

const featureComponents = {
  greeting: GreetingButton,
  // Add more feature components here as they're created
};

export default async function FeaturePage({
  params,
  searchParams,
}: FeaturePageProps) {
  const { id } = await params;
  const feature = features.find((f) => f.id === id);

  if (!feature) notFound();

  const FeatureComponent =
    featureComponents[id as keyof typeof featureComponents];

  if (!FeatureComponent) notFound();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{feature.title}</h1>
          <p className="text-lg text-muted-foreground">{feature.description}</p>
        </div>

        <div className="p-8 border rounded-lg bg-card">
          <FeatureComponent />
        </div>
      </div>
    </main>
  );
}
