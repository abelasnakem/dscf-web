import type { LandingPageContent } from './types';

export const landingPageContent: LandingPageContent = {
  hero: {
    headline: "Discover Your Next Great Find",
    subheadline: "Connect with sellers and buyers in your community",
    description: "Join thousands of users buying and selling everything from vintage furniture to handmade crafts. Your marketplace for unique treasures.",
    cta: [
      {
        text: "Start Selling",
        href: "/sell",
        variant: "primary"
      },
      {
        text: "Browse Listings",
        href: "/browse",
        variant: "outline"
      }
    ],
    media: {
      type: "video",
      src: "/videos/hero-showcase.mp4",
      thumbnail: "/images/hero/thumbnail.jpg"
    },
    backgroundImage: "/images/hero/background.jpg"
  },
  
  featured: {
    title: "Popular Categories",
    subtitle: "Explore our most active marketplaces",
    categories: [
      {
        id: "cat-1",
        title: "Furniture & Decor",
        description: "Vintage and modern pieces for every room",
        image: "/images/categories/furniture.jpg",
        itemCount: 1247,
        href: "/category/furniture"
      },
      {
        id: "cat-2",
        title: "Electronics",
        description: "Gadgets, computers, and accessories",
        image: "/images/categories/electronics.jpg",
        itemCount: 892,
        href: "/category/electronics"
      },
      {
        id: "cat-3",
        title: "Fashion & Accessories",
        description: "Clothing, shoes, and jewelry",
        image: "/images/categories/fashion.jpg",
        itemCount: 2103,
        href: "/category/fashion"
      }
    ]
  },
  
  howItWorks: {
    title: "How It Works",
    subtitle: "Start buying and selling in three simple steps",
    steps: [
      {
        step: 1,
        title: "Create Your Account",
        description: "Sign up in seconds and set up your seller profile",
        icon: "user-plus"
      },
      {
        step: 2,
        title: "List Your Items",
        description: "Upload photos, set prices, and describe your items",
        icon: "camera"
      },
      {
        step: 3,
        title: "Connect & Transact",
        description: "Chat with buyers, arrange meetups, and complete sales",
        icon: "handshake"
      }
    ]
  },
  
  trust: {
    title: "Trusted by Thousands",
    stats: [
      { value: "50K+", label: "Active Users", icon: "users" },
      { value: "200K+", label: "Items Sold", icon: "shopping-bag" },
      { value: "4.8/5", label: "Average Rating", icon: "star" },
      { value: "98%", label: "Satisfaction Rate", icon: "thumbs-up" }
    ],
    testimonials: [
      {
        id: "test-1",
        name: "Sarah Johnson",
        role: "Vintage Seller",
        company: "RetroFinds",
        avatar: "/images/testimonials/sarah.jpg",
        rating: 5,
        text: "I've sold over 100 items in the past year. The platform is intuitive and the community is amazing!"
      },
      {
        id: "test-2",
        name: "Michael Chen",
        role: "Electronics Buyer",
        company: "",
        avatar: "/images/testimonials/michael.jpg",
        rating: 5,
        text: "Found incredible deals on tech gear. The seller verification system gives me confidence in every purchase."
      }
    ]
  },
  
  benefits: {
    title: "Why Choose Our Marketplace",
    subtitle: "Everything you need to buy and sell with confidence",
    items: [
      {
        id: "ben-1",
        title: "Secure Transactions",
        description: "Built-in payment protection and verified seller badges",
        icon: "shield-check"
      },
      {
        id: "ben-2",
        title: "Local & Nationwide",
        description: "Connect with sellers in your area or ship nationwide",
        icon: "map-pin"
      },
      {
        id: "ben-3",
        title: "No Listing Fees",
        description: "List unlimited items for free, only pay when you sell",
        icon: "tag"
      },
      {
        id: "ben-4",
        title: "24/7 Support",
        description: "Our team is always here to help with any questions",
        icon: "headphones"
      }
    ]
  },
  
  cta: {
    headline: "Ready to Start Your Marketplace Journey?",
    description: "Join our community today and discover the easiest way to buy and sell locally.",
    cta: {
      text: "Get Started Free",
      href: "/signup",
      variant: "primary"
    },
    backgroundImage: "/images/cta/background.jpg"
  },
  
  footer: {
    logo: "/images/logo.svg",
    tagline: "Your trusted local marketplace",
    sections: [
      {
        title: "Marketplace",
        links: [
          { text: "Browse Listings", href: "/browse" },
          { text: "Categories", href: "/categories" },
          { text: "Sell an Item", href: "/sell" },
          { text: "How It Works", href: "/how-it-works" }
        ]
      },
      {
        title: "Company",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Careers", href: "/careers" },
          { text: "Press", href: "/press" },
          { text: "Blog", href: "/blog" }
        ]
      },
      {
        title: "Support",
        links: [
          { text: "Help Center", href: "/help" },
          { text: "Safety Tips", href: "/safety" },
          { text: "Contact Us", href: "/contact" },
          { text: "Report Issue", href: "/report" }
        ]
      },
      {
        title: "Legal",
        links: [
          { text: "Terms of Service", href: "/terms" },
          { text: "Privacy Policy", href: "/privacy" },
          { text: "Cookie Policy", href: "/cookies" }
        ]
      }
    ],
    social: [
      { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { platform: "Twitter", href: "https://twitter.com", icon: "twitter" },
      { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" }
    ],
    copyright: "© 2024 Marketplace. All rights reserved."
  }
};
