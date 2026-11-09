/**
 * The registry: every section the site's pages are built from, with example content
 * and where it came from. /design-system/sections shows each one; a page imports the
 * component and passes its own content.
 *
 * To add one: create `src/sections/<Name>.astro` with typed props, then register it
 * below. `section()` checks the example against the component's props, so a wrong or
 * missing prop fails `npm run build`, and so does a name without a component. A section
 * that can be placed more than one way (centred, on a dark band) lists those as `variants`.
 *
 *   import Hero from "./Hero.astro";
 *   …
 *     hero: section({
 *       component: Hero,
 *       example: { heading: "Time is money.", muted: "Save both." },
 *       source: "https://example.com/ (the first band)",
 *     }),
 */
import type { ComponentProps } from "astro/types";
import { ChartLine, CreditCard, Receipt, ShieldCheck, Sparkles, Zap } from "@lucide/astro";
import SpendLimits from "./SpendLimits.astro";
import TwoPanels from "./TwoPanels.astro";
import visibilityApprovals from "../assets/sections/two-panels/approval-workflow.webp";
import visibilityPhone from "../assets/sections/two-panels/receipt-reminders-phone.webp";
import Hero from "./Hero.astro";
import ClosingBand from "./ClosingBand.astro";
import Faq from "./Faq.astro";
import PlatformBento from "./PlatformBento.astro";
import platformCardsMobile from "../assets/sections/platform-bento/cards-mobile.png";
import platformProcurementMobile from "../assets/sections/platform-bento/procurement-mobile.png";
import platformCards from "../assets/sections/platform-bento/cards.png";
import platformProcurement from "../assets/sections/platform-bento/procurement.png";
import platformAccounting from "../assets/sections/platform-bento/accounting.png";
import platformBanking from "../assets/sections/platform-bento/banking.webp";
import platformIntegrations from "../assets/sections/platform-bento/integrations.png";
import HeroEmail from "./HeroEmail.astro";
import heroEmailMobileOverview from "../assets/sections/hero-email/ramp-product-overview-mobile.png";
import heroEmailOverview from "../assets/sections/hero-email/ramp-product-overview.png";
import AnnouncementBar from "./AnnouncementBar.astro";
import Features from "./Features.astro";
import CtaBand from "./CtaBand.astro";
import LogoWall from "./LogoWall.astro";
import logoWallAsset0 from "../assets/sections/logo-wall/Visa.355_9vam15bk7.svg";
import logoWallAsset1 from "../assets/sections/logo-wall/EightSleep.2pblpp6_cv4-8.svg";
import logoWallAsset2 from "../assets/sections/logo-wall/Stripe.2xnggcmadh_n5.svg";
import logoWallAsset3 from "../assets/sections/logo-wall/PerplexityPrimary.3e7062xmgdw6l.svg";
import logoWallAsset4 from "../assets/sections/logo-wall/Anduril.2-flvpfl-622h.svg";
import logoWallAsset5 from "../assets/sections/logo-wall/Cbre.1zbs85mk61ef0.svg";
import logoWallAsset6 from "../assets/sections/logo-wall/Discord.40hgyznlk8qge.svg";
import logoWallAsset7 from "../assets/sections/logo-wall/Twilio.27iupw98m9h_e.svg";
import logoWallAsset8 from "../assets/sections/logo-wall/Webflow.3ehn2evy9xrsb.svg";
import logoWallAsset9 from "../assets/sections/logo-wall/Glossier.1vc5u4-rfrj4q.svg";
import logoWallAsset10 from "../assets/sections/logo-wall/VirginVoyages.3xldwp7uyqec2.svg";
import logoWallAsset11 from "../assets/sections/logo-wall/ShopifyPrimary.3u-nbzp8uekkc.svg";
import logoWallAsset12 from "../assets/sections/logo-wall/Poshmark.0rjravrf-15fc.svg";
import logoWallAsset13 from "../assets/sections/logo-wall/customer-poshmark.184wck4g_zu0o.webp";


import Testimonials from "./Testimonials.astro";
import testimonialLogo0 from "../assets/sections/testimonials/01-Notion-1t2hv5eh-x9pv.svg";
import testimonialLogo1 from "../assets/sections/testimonials/02-MindbodyClasspass-40p52qi09588a.svg";
import testimonialLogo2 from "../assets/sections/testimonials/03-EightSleep-2pblpp6-cv4-8.svg";
import testimonialLogo3 from "../assets/sections/testimonials/04-Shopify-21i20b873241-.svg";
import testimonialLogo4 from "../assets/sections/testimonials/05-Kipp-0a8lahmtrqim-.svg";
import testimonialLogo5 from "../assets/sections/testimonials/06-Ketchum-2z7slxu-u75l8.svg";
import testimonialLogo6 from "../assets/sections/testimonials/07-Sierra-06xmvvynx8cjh.svg";
import testimonialLogo7 from "../assets/sections/testimonials/08-Foursquare-1kb6hn4kzte86.svg";
import testimonialLogo8 from "../assets/sections/testimonials/09-VirginVoyages-3xldwp7uyqec2.svg";
import testimonialLogo9 from "../assets/sections/testimonials/10-PairEyewear-3v8zz56ovd38y.svg";
import testimonialLogo10 from "../assets/sections/testimonials/11-Studs-3touxy0s2fmck.svg";
import testimonialLogo11 from "../assets/sections/testimonials/12-BoysAndGirlsClubOfAmerica-3sc16ija3vr65.svg";
import testimonialLogo12 from "../assets/sections/testimonials/13-Seed-2-3du82m43oze.svg";
import testimonialLogo13 from "../assets/sections/testimonials/14-Poshmark-0rjravrf-15fc.svg";

type Component = (props: any) => any;

export interface Section<C extends Component = Component> {
  component: C;
  /** How the design system names it; defaults to the name, capitalised ("cta-band" → "Cta band"). */
  title?: string;
  /** Props that render the section on its own, ideally the original content. */
  example: ComponentProps<C>;
  /** Other ways to place it, by name ("centred"): each is shown beside the example. */
  variants?: Record<string, ComponentProps<C>>;
  /** Where it came from: a URL and the block on it, or "new: <what it does>". */
  source: string;
}

/** Ties `example` to the component's own props. */
export const section = <C extends Component>(entry: Section<C>): Section<C> => entry;

/**
 * The name (kebab-case) is the address: /design-system/sections/<name>. The starter's three
 * are placeholders in the system's grey; feed it more from your site.
 */
export const sections = {
  "two-panels": section({
    component: TwoPanels,
    example: {
      heading: "More visibility, more time back.",
      panels: [
        { heading: "Simplify approvals and share accountability.", text: "Create personalized workflows that only notify the right people, based on spend amount or team role, and keep visibility high.", image: visibilityApprovals, imageAlt: "Approval workflow requiring Manager, Security, IT and Finance approval for software requests over $5,000" },
        { heading: "Focus on your work, not follow ups.", text: "Let Ramp send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.", image: visibilityPhone, imageAlt: "Ramp card on phone", action: { label: "See how it works on mobile", href: "https://ramp.com/mobile-app" } },
      ],
    },
    source: "https://ramp.com/corporate-cards (More visibility, more time back.)",
  }),
  "closing-band": section({
    component: ClosingBand,
    example: {
      heading: "Time is money. Save both.",
      emailLabel: "Email",
      emailPlaceholder: "What’s your work email?",
      buttonLabel: "Get started for free",
    },
    source: "https://ramp.com/ (second Time is money. Save both., immediately above footer)",
  }),
  "spend-limits": section({
    component: SpendLimits,
    example: {
      heading: "Build control into the card, before spend even happens.",
      controls: {
        heading: "Don't compromise on growth or control.",
        text: "Create custom virtual cards and set permissions for everything from ad marketplace spend to remote work stipends, for individual teams or your whole company.",
      },
      cards: [
        { name: "Marketing virtual card", spent: "$1120", limit: "/$10000", fraction: 0.112 },
        { name: "Travel and expenses virtual card", spent: "$123", limit: "/$500", fraction: 0.246 },
        { name: "Conference virtual card", spent: "$2500", limit: "/$3000", fraction: 0.833333 },
      ],
      restrictions: {
        heading: "Get ahead of out-of-policy spend.",
        text: "Add restrictions to automatically prevent specific categories and merchants. Not sure if it's out of policy? Questionable vendors are always automatically flagged for approval.",
      },
      restrictedCard: "Travel and expenses virtual card",
      allowed: ["Taxi", "Fuel", "Entertainment"],
      blocked: ["Alcohol", "Casinos"],
    },
    source: "https://ramp.com/corporate-cards (Build control into the card, before spend even happens.; both scroll-animation steps shown statically)",
  }),
  faq: section({
    component: Faq,
    title: "FAQ",
    example: {
      heading: "FAQ",
      items: [
        { question: "Is there a free version of Ramp?", answer: "Yes, Ramp Free is designed for smaller teams who want to get started with Ramp. If you would like to try Ramp Plus, you can sign up with a free 30-day trial, and easily switch plans anytime as your needs change." },
        { question: "Are there any limits on how many cards I can issue?", answer: "No, you can issue unlimited virtual and physical cards to your team at no extra cost." },
        { question: "Can I pay for Ramp Plus with a Ramp card?", answer: "You can pay for Ramp Plus with ACH or the rewards you earn from your Ramp card spending." },
        { question: "How can we manage our Ramp plan?", answer: "You can upgrade or downgrade anytime within your Ramp dashboard or by contacting us directly." },
      ],
    },
    source: "https://ramp.com/pricing (FAQ)",
  }),

  "platform-bento": section({
    component: PlatformBento,
    example: {
      heading: "One platform for all of finance.",
      muted: "Agents for every workflow, working 24/7.",
      actions: [
        { label: "Switch in days, not months", href: "https://ramp.com/switch" },
        { label: "View Demo", href: "https://ramp.com/see-a-demo", variant: "ghost" },
      ],
      tiles: [
        { title: "Cards & Expenses", description: "that handle themselves", href: "https://ramp.com/corporate-cards", image: platformCards, mobileImage: platformCardsMobile, imageAlt: "Ramp corporate card and an automatic receipt notification" },
        { title: "Procure to pay", description: "without chasing approvals", href: "https://ramp.com/accounts-payable", image: platformProcurement, mobileImage: platformProcurementMobile, imageAlt: "Invoice files entering Ramp's accounts payable workspace" },
        { title: "Accounting automation", description: "eliminates month-end madness", href: "https://ramp.com/accounting-automation-software", image: platformAccounting, imageAlt: "Ramp transaction table with merchant and accounting categories" },
        { title: "Banking", description: "that flows money to the highest return", href: "https://ramp.com/business-banking", image: platformBanking, imageAlt: "Cash and Treasury dashboard showing balances, earnings, and approvals" },
        { title: "200+ Integrations", description: "to the tools you already use", href: "https://ramp.com/integrations", image: platformIntegrations, imageAlt: "A grid of business applications that integrate with Ramp" },
      ],
    },
    source: "https://ramp.com/ (One platform for all of finance.)",
  }),
  "logo-wall": section({
    component: LogoWall,
    example: {
      heading: "Join 85,000 of the world’s most ambitious companies",
      muted: "growing 3.2x faster than the average American business.",
      reportLabel: "Read the report",
      reportHref: "https://ramp.com/blog/ramp-customers-grow-revenue-3x-faster",
      logos: [
        { name: "Visa", logo: logoWallAsset0 },
        { name: "Eight Sleep", logo: logoWallAsset1, href: "https://ramp.com/customers/eight-sleep" },
        { name: "Stripe", logo: logoWallAsset2 },
        { name: "Perplexity", logo: logoWallAsset3, href: "https://ramp.com/customers/perplexity" },
        { name: "Anduril", logo: logoWallAsset4 },
        { name: "CBRE", logo: logoWallAsset5 },
        { name: "Discord", logo: logoWallAsset6 },
        { name: "Twilio", logo: logoWallAsset7 },
        { name: "Webflow", logo: logoWallAsset8, href: "https://ramp.com/customers/webflow" },
        { name: "Glossier", logo: logoWallAsset9, href: "https://ramp.com/customers/glossier" },
        { name: "Virgin Voyages", logo: logoWallAsset10 },
        { name: "Shopify", logo: logoWallAsset11 },
      ],
      storyPhoto: logoWallAsset13,
      storyPhotoAlt: "Pink “Stay Posh” neon sign on a leafy wall",
      storyLogo: logoWallAsset12,
      storyName: "Poshmark",
      storyValue: "7 mo",
      storyLabel: "To exceed free cash flow goals",
      storyHref: "https://ramp.com/customers/poshmark",
    },
    source: "https://ramp.com/ (Join 85,000 of the world’s most ambitious companies; static first logos with the requested Poshmark featured tile)",
  }),

  testimonials: section({
    component: Testimonials,
    example: {
      heading: "We've got the receipts.",
      lead: "85,000 teams and counting",
      action: { label: "View Demo", href: "https://ramp.com/see-a-demo" },
      rows: [
        [
          { name: "Shannon McCormick", role: "International Workplace Experience Lead, Notion", quote: "As soon as I texted my first Ramp receipt, I realized Ramp is a game-changer. It’s incredibly intuitive.", logo: testimonialLogo0 },
          { name: "Heather Bruzus", role: "Principal Accountant, Mindbody & ClassPass", quote: "We got positive feedback, which just doesn't happen very often. That proved this was the right decision.", logo: testimonialLogo1 },
          { name: "Tzu-San Hung", role: "Head of Strategic Finance, Notion", quote: "Beautiful tools use beautiful tools.", logo: testimonialLogo0 },
          { name: "Matteo Franceschetti", role: "CEO, Eight Sleep", quote: "Ramp was a complete game changer. It's a single platform that can handle every aspect of our spending.", logo: testimonialLogo2 },
          { name: "Christine Mimnagh-Fleming", role: "Sr. Manager, Finance Transformation, Shopify", quote: "Ramp is so intuitive, people get it right away.", logo: testimonialLogo3 },
          { name: "Carey Peek", role: "CFO, KIPP Nashville Public Schools", quote: "Implementing Ramp has been my biggest win as CFO. Employees love it and often go out of their way to tell me so.", logo: testimonialLogo4 },
        ],
        [
          { name: "Mayor Neil Bradshaw", role: "Mayor, City of Ketchum, ID", quote: "Ramp gives us the ability to make more informed financial policy decisions. It was one of the best decisions we've ever made.", logo: testimonialLogo5 },
          { name: "Bret Taylor", role: "CEO, Sierra", quote: "It's almost like we're a more self-actualized company because everyone is just working on what we do differently.", logo: testimonialLogo6 },
          { name: "Michael Bohn", role: "Head of Business Operations, Foursquare", quote: "The average person can figure Ramp out without training. That’s what drives 100% adoption.", logo: testimonialLogo7 },
          { name: "Ben Whipple", role: "Director of Public Works, City of Ketchum, ID", quote: "I snap a picture of the receipt, Ramp handles the rest like magic, and I move on.", logo: testimonialLogo5 },
          { name: "Michael Litwin", role: "VP Controller, Virgin Voyages", quote: "Before Ramp it was a process from the dark ages. We had people just doing expenses full-time. It was miserable.", logo: testimonialLogo8 },
          { name: "Staci Robinson", role: "AP Manager, Pair Eyewear", quote: "Ramp's AI has given me a better work-life balance. I have more time for my family now that the AI handles much of the work I used to do manually.", logo: testimonialLogo9 },
        ],
        [
          { name: "Irish Rose", role: "Controller, Eight Sleep", quote: "Closing the books with Ramp is effortless.", logo: testimonialLogo2 },
          { name: "Andrew Clarke", role: "SVP Finance, Studs", quote: "We've consolidated four platforms into one with Ramp.", logo: testimonialLogo10 },
          { name: "Jason Penegar", role: "VP Controller, Boys & Girls Clubs of America", quote: "The Ramp journey has been incredible. A flawless implementation…", logo: testimonialLogo11 },
          { name: "Sarah Bird", role: "Controller, Seed Health", quote: "It's rare to feel like a company and a team is a partner, and that they really want to understand what you need. That's what we've experienced with Ramp.", logo: testimonialLogo12 },
          { name: "Carolynn Yipp", role: "Assistant Controller, Poshmark", quote: "It's very easy to use, very intuitive, and requires almost zero training.", logo: testimonialLogo13 },
        ],
      ],
    },
    source: "https://ramp.com/ (We've got the receipts.)",
  }),

  "hero-email": section({
    component: HeroEmail,
    title: "Hero with email",
    example: {
      counterLabel: "US corporate payments processed by Ramp:",
      counterValue: "0.9768189%",
      heading: "Time is money. Save both.",
      lead: "Cards, expenses, bill payments, and banking* – in the blink of AI.",
      emailLabel: "Email",
      emailPlaceholder: "What’s your work email?",
      buttonLabel: "Get started for free",
      image: heroEmailOverview,
      mobileImage: heroEmailMobileOverview,
      imageAlt: "Ramp dashboard with transaction details, a corporate card, and mobile bill approvals",
    },
    source: "https://ramp.com/ (first Time is money. Save both. hero)",
  }),
  "announcement-bar": section({
    component: AnnouncementBar,
    example: {
      message: "Ramp raises $1.85B to get you more from every dollar, hour, and token.",
      linkLabel: "Learn more",
      href: "https://ramp.com/blog/ramp-at-60-billion",
      dismissLabel: "Dismiss announcement",
    },
    source: "https://ramp.com/ (header > div.fixed > div:first-of-type)",
  }),
  hero: section({
    component: Hero,
    example: {
      tagline: "Tagline",
      heading: "A headline that says what you do.",
      muted: "And what it changes for your customer.",
      lead: "One or two sentences that make the headline concrete: who it is for and why now.",
      actions: [
        { label: "Primary action", href: "#" },
        { label: "Second action", href: "#" },
      ],
    },
    variants: {
      centred: {
        tagline: "Tagline",
        heading: "A headline that says what you do.",
        muted: "And what it changes for your customer.",
        lead: "One or two sentences that make the headline concrete: who it is for and why now.",
        actions: [
          { label: "Primary action", href: "#" },
          { label: "Second action", href: "#" },
        ],
        align: "center",
      },
    },
    source: "starter: a placeholder hero",
  }),
  features: section({
    component: Features,
    example: {
      tagline: "Tagline",
      heading: "What you get.",
      muted: "Three to six things, one sentence each.",
      features: [
        { icon: CreditCard, title: "A first feature", text: "One sentence on what it does and why it matters.", href: "#" },
        { icon: Receipt, title: "A second feature", text: "One sentence on what it does and why it matters.", href: "#" },
        { icon: ChartLine, title: "A third feature", text: "One sentence on what it does and why it matters.", href: "#" },
        { icon: ShieldCheck, title: "A fourth feature", text: "One sentence on what it does and why it matters." },
        { icon: Zap, title: "A fifth feature", text: "One sentence on what it does and why it matters." },
        { icon: Sparkles, title: "A sixth feature", text: "One sentence on what it does and why it matters." },
      ],
    },
    source: "starter: a placeholder features grid",
  }),
  "cta-band": section({
    component: CtaBand,
    title: "CTA band",
    example: {
      heading: "A closing line that asks for the action.",
      lead: "One sentence on what happens next.",
      actions: [{ label: "Primary action", href: "#" }],
    },
    variants: {
      light: {
        heading: "A closing line that asks for the action.",
        lead: "One sentence on what happens next.",
        actions: [{ label: "Primary action", href: "#" }],
        tone: "muted",
      },
    },
    source: "starter: a placeholder closing band",
  }),
} satisfies Record<string, Section>;

const titleOf = (name: string) => name.charAt(0).toUpperCase() + name.slice(1).replaceAll("-", " ");

export const sectionList = Object.entries(sections as Record<string, Section>).map(
  ([name, entry]) => ({ name, ...entry, title: entry.title ?? titleOf(name) }),
);
