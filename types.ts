import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string; // Monthly price
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: LucideIcon;
}
