export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll use emoji as placeholder icons
}

export const features: Feature[] = [
  {
    id: "greeting",
    title: "Greeting Button",
    description: "A smart button that greets you based on the time of day",
    icon: "👋",
  },
  // More features can be added here later
];
