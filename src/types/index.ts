export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  description: string;
  targetAudience: string;
  keyOutputs: string[];
  metrics: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  pricingTag: string;
  badge: string;
  image: string;
}

export interface PartnerItem {
  name: string;
  category: string;
  role: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  metricHighlight: string;
  avatarText: string;
  rating: number;
}

export interface AchievementItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  tag: string;
}
