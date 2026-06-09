import {
  BarChart3,
  Beef,
  ChefHat,
  CookingPot,
  Fish,
  QrCode,
  Soup,
  Truck,
  UsersRound,
  Zap,
} from "../components/icons";

export const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#analytics", label: "Analytics" },
  { href: "#pricing", label: "Pricing" },
];

export const heroStats = [
  { value: "94.2%", label: "QR-to-Order Rate" },
  { value: "3 Steps", label: "To Go Live" },
  { value: "₱1.5K", label: "Starting / Month" },
];

export const steps = [
  {
    number: "01",
    title: "Register & Get Your QR",
    description:
      "Enter your restaurant name, language, and country. Instantly access your personalized dashboard and a unique QR code ready to print and place on every table.",
    tags: ["Dashboard Access", "Analytics", "User Setup"],
    imageSrc:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-1-dashboard.png",
    imageAlt:
      "SnapServe analytics dashboard showing sales, orders, and restaurant performance metrics",
  },
  {
    number: "02",
    title: "Build Your Digital Menu",
    description:
      "Choose a predesigned template or build from scratch. Add categories, items, descriptions, prices, and photos. Our design team can handle it for you, too.",
    tags: ["Easy Editor", "Templates", "Bulk Import"],
    imageSrc:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-2-menu-builder.png",
    imageAlt:
      "SnapServe menu builder showing categories, products, and item management tools",
  },
  {
    number: "03",
    title: "Start Receiving Orders",
    description:
      "Go live and accept unlimited dine-in, delivery, and takeaway orders. Manage everything from your dedicated Kitchen and Waiter Views in real time.",
    tags: ["Kitchen View", "Waiter View", "Real-Time Orders"],
    imageSrc:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-3-orders-1.png",
    imageAlt:
      "SnapServe waiter station showing pending customer orders and order confirmation actions",
    imageSrc2:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-3-orders-2.png",
    imageAlt2: "SnapServe kitchen view showing live order updates",
  },
];

export const features = [
  {
    icon: QrCode,
    title: "QR Code Menu",
    description:
      "Guests scan and browse a beautiful, image-rich digital menu on their own device. No app download, no friction — just tap and order.",
  },
  {
    icon: Zap,
    title: "Instant Ordering",
    description:
      "Customers place dine-in, delivery, or takeaway orders directly from their phone. Orders reach the kitchen in seconds, eliminating verbal relay errors.",
  },
  {
    icon: CookingPot,
    title: "Kitchen View",
    description:
      "A live display built for the heat of service. Staff see all incoming orders, mark items as preparing, ready, or complete — organized by table and priority.",
  },
  {
    icon: UsersRound,
    title: "Waiter View",
    description:
      "Give your floor team full situational awareness. Manage tables, confirm orders, and track every item from kitchen to customer with a single screen.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Track revenue, popular items, peak hours, and QR scan conversion rates from a real-time analytics dashboard built for data-driven decisions.",
  },
  {
    icon: Truck,
    title: "Multi-Order Types",
    description:
      "Handle dine-in, delivery, and takeaway under a single subscription — with unlimited order volume and no hidden per-transaction fees.",
  },
];

export const analyticsCards = [
  {
    value: "₱127K",
    label:
      "Total sales tracked in one week — with trend graphs and period comparisons.",
  },
  {
    value: "94.2%",
    label:
      "QR scan-to-order conversion rate, measured per table and per session.",
  },
  {
    value: "Top 3",
    label:
      "Best-performing menu categories ranked by revenue and order frequency.",
  },
  {
    value: "Daily",
    label:
      "Order pattern reports to identify peak hours and optimize staffing.",
  },
];

export const operationalViews = [
  {
    icon: ChefHat,
    className: "vi-kitchen",
    title: "Kitchen View",
    description:
      "A focused, no-distraction display built for the speed of a live kitchen. Every incoming order appears the moment it's placed, with a clear status flow from new to complete.",
    features: [
      "Real-time order queue sorted by table and urgency",
      "Mark items as Preparing, Ready, or Completed",
      "Color-coded priority and status indicators",
      "Eliminates verbal communication errors between floor and kitchen",
    ],
    imageSrc:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-3-orders-1.png",
    imageAlt:
      "SnapServe kitchen display showing order preparation and task management",
  },
  {
    icon: UsersRound,
    className: "vi-waiter",
    title: "Waiter View",
    description:
      "Give your floor team complete situational awareness. Manage multiple tables simultaneously, confirm orders, and track every item from kitchen to table — all in one screen.",
    features: [
      "Full table map with live order status at a glance",
      "Confirm and dispatch orders to the kitchen instantly",
      "Track item delivery from kitchen to table",
      "Handle dine-in, delivery, and takeaway from one view",
    ],
    imageSrc:
      "https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-3-orders-2.png",
    imageAlt: "SnapServe waiter station showing pending customer orders",
  },
];

export const pricingPlans = [
  {
    plan: "Basic",
    description: "Perfect for small restaurants just starting out.",
    price: "1.5K",
    features: [
      "QR Code Menu",
      "Ordering System",
      "Kitchen View",
      "Waiter View",
      "Menu Management",
    ],
    buttonClass: "btn-plan-outline",
    buttonLabel: "Get Started →",
  },
  {
    plan: "Premium",
    description: "Ideal for medium-sized venues with growing teams.",
    price: "5K",
    features: [
      "QR Code Menu",
      "Ordering System",
      "Kitchen View",
      "Waiter View",
      "Menu Management",
      "Order List",
      "User Management",
    ],
    buttonClass: "btn-plan-outline",
    buttonLabel: "Get Started →",
  },
  {
    plan: "Pro",
    description: "Full suite for restaurants serious about growth.",
    price: "20K",
    features: [
      "QR Code Menu",
      "Ordering System",
      "Kitchen & Waiter View",
      "Menu Management",
      "Order List & Tracking",
      "User Management",
      "Dashboard Sales Report",
      "Export & Filter Functions",
      "24/7 Tech Support",
    ],
    buttonClass: "btn-plan-amber",
    buttonLabel: "Try Pro Now →",
    highlighted: true,
  },
];

export const footerSections = [
  {
    title: "Product",
    links: ["How It Works", "Features", "Analytics", "Pricing"],
    hrefs: ["#how-it-works", "#features", "#analytics", "#pricing"],
  },
  {
    title: "Company",
    links: ["About CubeTech", "Blog", "Contact"],
    hrefs: [
      "https://dev.cubetech.cloud/#about-heading",
      "https://dev.cubetech.cloud/blog/",
      "https://dev.cubetech.cloud/#contact",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions"],
    hrefs: [
      "https://dev.cubetech.cloud/privacy-policy/",
      "https://dev.cubetech.cloud/terms-and-conditions/",
    ],
  },
];
