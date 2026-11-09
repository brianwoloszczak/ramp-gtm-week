/**
 * The site's navigation, in one place: the Navbar and the Footer read it, so every page
 * shows the same links. The labels and destinations are taken from ramp.com.
 */
import type { NavLink } from "../components/layout/Navbar.astro";
import type { FooterColumn } from "../components/layout/Footer.astro";

export const navbar: { links: NavLink[]; action: NavLink } = {
  links: [
    { label: "Pricing", href: "/pricing" },
    { label: "Sign in", href: "https://app.ramp.com/sign-in" },
  ],
  action: { label: "See a demo", href: "/see-a-demo" },
};

export const footer: { statement: string; columns: FooterColumn[] } = {
  statement: "Join the 85,000+ businesses simplifying their finances with Ramp.",
  columns: [
    {
      title: "About us",
      links: [
        { label: "Careers", href: "/careers" },
        { label: "Emerging talent", href: "/emerging-talent" },
        { label: "Customers", href: "/customers" },
        { label: "Help center", href: "https://support.ramp.com/hc/en-us" },
        { label: "Product releases", href: "/product-releases" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Corporate cards", href: "/corporate-cards" },
        { label: "Expense management", href: "/expense-management" },
        { label: "Spend management", href: "/spend-management" },
        { label: "Banking", href: "/business-banking" },
        { label: "Travel", href: "/travel" },
        { label: "Accounts payable", href: "/accounts-payable" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Platform overview", href: "/platform" },
        { label: "Accounting automation", href: "/accounting-automation-software" },
        { label: "Intelligence", href: "/intelligence" },
        { label: "Reporting", href: "/reporting" },
        { label: "Savings", href: "/savings-calculator" },
        { label: "Integrations", href: "/integrations" },
        { label: "Global", href: "/global" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Startups", href: "/startups" },
        { label: "Small business", href: "/small-business" },
        { label: "Mid market", href: "/mid-market" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "Free tools and resources", href: "/free-tools" },
        { label: "Perks and rewards", href: "/rewards" },
      ],
    },
  ],
};
