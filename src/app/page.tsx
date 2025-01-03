import { features } from "@/data/features";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Mohit's Next JS Playground</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of reusable components and features for your Next.js
          projects
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Available Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </main>
  );
}
