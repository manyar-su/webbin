import {
  Coffee, Store, Droplets, Scissors, Shirt, Home, Plane, Building2, Car, Sprout,
  ShoppingCart, FileCode, Search, Smartphone, LayoutDashboard, Cpu, Zap, Wrench,
  Server, MessageCircle, CreditCard, BarChart3, MessageSquare, Users, Palette,
  Code2, RefreshCw, Rocket, LifeBuoy, Globe, Star, Check, ArrowRight, ArrowUp,
  ExternalLink, Github, Menu, X, Moon, Sun, ChevronDown, Sparkles, Globe2,
  GraduationCap,
} from 'lucide-react';

const iconMap = {
  Coffee, Store, Droplets, Scissors, Shirt, Home, Plane, Building2, Car, Sprout,
  ShoppingCart, FileCode, Search, Smartphone, LayoutDashboard, Cpu, Zap, Wrench,
  Server, MessageCircle, CreditCard, BarChart3, MessageSquare, Users, Palette,
  Code2, RefreshCw, Rocket, LifeBuoy, Globe, Star, Check, ArrowRight, ArrowUp,
  ExternalLink, Github, Menu, X, Moon, Sun, ChevronDown, Sparkles, Globe2,
  GraduationCap,
};

export default function Icon({ name, className = '' }) {
  const LucideIcon = iconMap[name] || Globe;
  return <LucideIcon className={className} />;
}