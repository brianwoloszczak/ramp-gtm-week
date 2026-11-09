/**
 * The site's navigation, in one place: the Navbar and the Footer read it, so every page
 * shows the same links. The labels and destinations are taken from ramp.com.
 */
import type { NavLink } from "../components/layout/Navbar.astro";

export const navbar: { links: NavLink[]; action: NavLink; signup: NavLink; signIn: NavLink } = {
  "links": [
    {
      "label": "Products",
      "href": "#",
      "children": [
        {
          "label": "Corporate Cards",
          "href": "/corporate-cards",
          "description": "Easy issuing, built-in controls"
        },
        {
          "label": "Expense Management",
          "href": "/expense-management",
          "description": "Eliminate expense reports"
        },
        {
          "label": "Travel",
          "href": "/travel",
          "description": "Book travel, always in policy"
        },
        {
          "label": "Accounts Payable",
          "href": "/accounts-payable",
          "description": "A month of AP done in minutes"
        },
        {
          "label": "Procurement",
          "href": "/procurement",
          "description": "Automate sourcing & approvals"
        },
        {
          "label": "Vendor Management",
          "href": "/vendor-management",
          "description": "Track contracts and renewals"
        },
        {
          "label": "Business Banking",
          "href": "/business-banking",
          "description": "Earn yield on operating cash"
        },
        {
          "label": "Investment Account",
          "href": "/business-investment-account",
          "description": "High yield on cash reserves"
        },
        {
          "label": "Accounts Receivable",
          "href": "/accounts-receivable",
          "description": "Invoice and collect with AI"
        },
        {
          "label": "Budgets & Reporting",
          "href": "/reporting",
          "description": "Budgets vs. actuals, live"
        },
        {
          "label": "Global Ready",
          "href": "/global",
          "description": "Spend across borders"
        },
        {
          "label": "Developer Tools",
          "href": "https://docs.ramp.com",
          "description": "Build custom workflows"
        },
        {
          "label": "Integrations",
          "href": "/integrations",
          "description": "Connect your finance stack"
        },
        {
          "label": "AI Spend Management",
          "href": "/ai-cost-monitoring",
          "description": "See and control AI costs"
        },
        {
          "label": "Router by Ramp",
          "href": "https://router.com",
          "description": "Right model for every request"
        },
        {
          "label": "Inspect",
          "href": "https://inspect.com",
          "description": "Collaborative cloud coding agent"
        },
        {
          "label": "Glass",
          "href": "/glass",
          "description": "Put company knowledge to work"
        },
        {
          "label": "Applied AI Solutions",
          "href": "/applied-ai-solutions",
          "description": "Bespoke AI for your company"
        },
        {
          "label": "Stack",
          "href": "/stack",
          "description": "Accounting AI operating system"
        },
        {
          "label": "Accounting Automation",
          "href": "/accounting-automation-software",
          "description": "Close your books 3x faster"
        },
        {
          "label": "Introducing Glass by Ramp",
          "href": "/glass",
          "description": "The AI workspace where knowledge compounds."
        }
      ]
    },
    {
      "label": "Solutions",
      "href": "#",
      "children": [
        {
          "label": "ElevenLabs goes global on one system",
          "href": "/customers/elevenlabs",
          "description": "New countries plug in, not start over."
        },
        {
          "label": "The Broncos tackle the back office",
          "href": "/customers/broncos",
          "description": "80+ hours of AP and coding now run themselves."
        },
        {
          "label": "IHS keeps 27 brands under one roof",
          "href": "/customers/infinity",
          "description": "How automation saved over $2.1M USD."
        },
        {
          "label": "All customer stories",
          "href": "/customers"
        },
        {
          "label": "Startups",
          "href": "/startups"
        },
        {
          "label": "Small Business",
          "href": "/small-business"
        },
        {
          "label": "Mid-market",
          "href": "/mid-market"
        },
        {
          "label": "Enterprise",
          "href": "/enterprise"
        },
        {
          "label": "Architecture & Engineering",
          "href": "/industry/architecture-engineering"
        },
        {
          "label": "Construction",
          "href": "/construction"
        },
        {
          "label": "Consulting",
          "href": "/industry/consulting"
        },
        {
          "label": "Education",
          "href": "/industry/education"
        },
        {
          "label": "Healthcare",
          "href": "/industry/healthcare"
        },
        {
          "label": "Legal",
          "href": "/industry/legal"
        },
        {
          "label": "Life Sciences",
          "href": "/industry/life-sciences"
        },
        {
          "label": "Nonprofits",
          "href": "/industry/nonprofits"
        },
        {
          "label": "Public Sector",
          "href": "/public-sector"
        },
        {
          "label": "Retail",
          "href": "/industry/retail"
        },
        {
          "label": "Sports",
          "href": "/industry/sports"
        },
        {
          "label": "Technology",
          "href": "/industry/tech"
        }
      ]
    },
    {
      "label": "Partners",
      "href": "#",
      "children": [
        {
          "label": "Accounting Partner Program",
          "href": "/accounting-partnerships",
          "description": "Join 5,000+ firms growing their practice with Ramp"
        },
        {
          "label": "Stack by Ramp",
          "href": "/stack",
          "description": "The AI operating system for accounting firms"
        },
        {
          "label": "Explore all partner programs",
          "href": "/partnerships"
        },
        {
          "label": "Private equity",
          "href": "/pe-partnerships"
        },
        {
          "label": "Venture capital",
          "href": "/vc-partnerships"
        },
        {
          "label": "Advisory partnerships",
          "href": "/services-partnerships"
        },
        {
          "label": "Banking partnerships",
          "href": "/banking-partnerships"
        },
        {
          "label": "Spend and payroll partners",
          "href": "/hris-tech-partners"
        },
        {
          "label": "Technology partners",
          "href": "/technology-partnerships"
        },
        {
          "label": "Data partnerships",
          "href": "/data-partnerships"
        },
        {
          "label": "Reseller partners",
          "href": "/reseller-partnerships"
        },
        {
          "label": "System integrators",
          "href": "/services-partnerships"
        },
        {
          "label": "Franchise partners",
          "href": "/franchise-partners"
        },
        {
          "label": "Introducing Glass by Ramp",
          "href": "/glass",
          "description": "The AI workspace where knowledge compounds."
        }
      ]
    },
    {
      "label": "Resources",
      "href": "#",
      "children": [
        {
          "label": "Events & Webinars",
          "href": "/events",
          "description": "Live and on-demand"
        },
        {
          "label": "Product Updates",
          "href": "/product-releases",
          "description": "What's new on Ramp"
        },
        {
          "label": "Blog",
          "href": "/blog",
          "description": "What we're building"
        },
        {
          "label": "Leading Indicators",
          "href": "/leading-indicators",
          "description": "Stories shaping tomorrow"
        },
        {
          "label": "Economics Lab",
          "href": "/data",
          "description": "Insights from Ramp data"
        },
        {
          "label": "Ramp Rate",
          "href": "/vendors",
          "description": "Free vendor directory based on real Ramp spend"
        },
        {
          "label": "Reports",
          "href": "/reports",
          "description": "In-depth research"
        },
        {
          "label": "Newsroom",
          "href": "/press"
        },
        {
          "label": "Community",
          "href": "https://community.ramp.com"
        },
        {
          "label": "Careers",
          "href": "/careers"
        },
        {
          "label": "Builders @ Ramp",
          "href": "/builders"
        },
        {
          "label": "Switch to Ramp",
          "href": "/switch"
        },
        {
          "label": "Help Center",
          "href": "https://support.ramp.com"
        },
        {
          "label": "Onboarding & Training",
          "href": "/training"
        },
        {
          "label": "Growth Tools",
          "href": "/free-tools"
        },
        {
          "label": "Introducing Glass by Ramp",
          "href": "/glass",
          "description": "The AI workspace where knowledge compounds."
        }
      ]
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "action": {
    "label": "See a demo",
    "href": "/see-a-demo"
  },
  "signup": {
    "label": "Get started",
    "href": "/signup"
  },
  "signIn": {
    "label": "Sign in",
    "href": "https://app.ramp.com/sign-in"
  }
};

export const footer = {
  "statement": "Join the 85,000+ businesses simplifying their finances with Ramp.",
  "columns": [
    {
      "title": "About us",
      "href": "/about-us",
      "links": [
        {
          "label": "Careers",
          "href": "/careers"
        },
        {
          "label": "Emerging talent",
          "href": "/emerging-talent"
        },
        {
          "label": "Customers",
          "href": "/customers"
        },
        {
          "label": "Help center",
          "href": "https://support.ramp.com/hc/en-us"
        },
        {
          "label": "Product releases",
          "href": "/product-releases"
        },
        {
          "label": "Ramp for Agents",
          "href": "https://agents.ramp.com"
        },
        {
          "label": "Ramp Labs",
          "href": "https://labs.ramp.com"
        },
        {
          "label": "API documentation",
          "href": "https://docs.ramp.com"
        },
        {
          "label": "Versus",
          "href": "/versus"
        }
      ]
    },
    {
      "title": "Products",
      "href": "/products",
      "links": [
        {
          "label": "Corporate cards",
          "href": "/corporate-cards"
        },
        {
          "label": "Expense management",
          "href": "/expense-management"
        },
        {
          "label": "Spend management",
          "href": "/spend-management"
        },
        {
          "label": "Budgets",
          "href": "/budgets"
        },
        {
          "label": "Banking",
          "href": "/business-banking"
        },
        {
          "label": "Travel",
          "href": "/travel"
        },
        {
          "label": "Reimbursements",
          "href": "/reimbursements"
        },
        {
          "label": "Procurement",
          "href": "/procurement"
        },
        {
          "label": "Accounts payable",
          "href": "/accounts-payable"
        },
        {
          "label": "Vendor management",
          "href": "/vendor-management"
        },
        {
          "label": "Approvals",
          "href": "/streamlined-approvals"
        },
        {
          "label": "Security",
          "href": "/security"
        },
        {
          "label": "Trust",
          "href": "https://trust.ramp.com/"
        },
        {
          "label": "Mobile app",
          "href": "/mobile-app"
        },
        {
          "label": "Ramp Sheets",
          "href": "https://ramp.com/sheets"
        }
      ]
    },
    {
      "title": "Platform",
      "href": null,
      "links": [
        {
          "label": "Platform overview",
          "href": "/platform"
        },
        {
          "label": "Accounting automation",
          "href": "/accounting-automation-software"
        },
        {
          "label": "Intelligence",
          "href": "/intelligence"
        },
        {
          "label": "Reporting",
          "href": "/reporting"
        },
        {
          "label": "Savings",
          "href": "/savings-calculator"
        },
        {
          "label": "Integrations",
          "href": "/integrations"
        },
        {
          "label": "Multi-entity",
          "href": "/multi-entity"
        },
        {
          "label": "Global",
          "href": "/global"
        },
        {
          "label": "AI Spend Management",
          "href": "/ai-cost-monitoring?utm_source=web&utm_campaign=ai-token-spend-usage&utm_medium=footer"
        },
        {
          "label": "Router",
          "href": "https://router.com"
        }
      ]
    },
    {
      "title": "Partners",
      "href": "/partnerships",
      "links": [
        {
          "label": "Accounting firms",
          "href": "/accounting-partnerships"
        },
        {
          "label": "Private equity",
          "href": "/pe-partnerships"
        },
        {
          "label": "Venture capital",
          "href": "/vc-partnerships"
        },
        {
          "label": "System integrators",
          "href": "/services-partnerships"
        },
        {
          "label": "Technology partners",
          "href": "/technology-partnerships"
        },
        {
          "label": "Spend and payroll partners",
          "href": "/hris-tech-partners"
        },
        {
          "label": "Reseller partners",
          "href": "/reseller-partnerships"
        },
        {
          "label": "Franchise partners",
          "href": "/franchise-partners"
        }
      ]
    },
    {
      "title": "Solutions",
      "href": null,
      "links": [
        {
          "label": "Startups",
          "href": "/startups"
        },
        {
          "label": "Small business",
          "href": "/small-business"
        },
        {
          "label": "Mid market",
          "href": "/mid-market"
        },
        {
          "label": "Enterprise",
          "href": "/enterprise"
        }
      ]
    },
    {
      "title": "Free tools and resources",
      "href": "/free-tools",
      "links": [
        {
          "label": "Perks and rewards",
          "href": "/rewards"
        },
        {
          "label": "Find an accountant",
          "href": "https://accountants.ramp.com/"
        },
        {
          "label": "Find a services partner",
          "href": "/services-partners"
        },
        {
          "label": "Savings calculator",
          "href": "/savings-calculator"
        },
        {
          "label": "Mission statement generator",
          "href": "/mission-statement-generator"
        },
        {
          "label": "Charge finder",
          "href": "/charge-finder"
        },
        {
          "label": "Per diem calculator",
          "href": "/per-diem-calculator"
        },
        {
          "label": "Mileage reimbursement calculator",
          "href": "/mileage-reimbursement-calculator"
        },
        {
          "label": "Card comparison tool",
          "href": "/business-credit-cards"
        },
        {
          "label": "Investor database",
          "href": "/vc-database"
        },
        {
          "label": "Expense categorization",
          "href": "/expense-category"
        },
        {
          "label": "Expense policy builder",
          "href": "/expense-policy-builder"
        },
        {
          "label": "Vendor directory",
          "href": "/vendors"
        },
        {
          "label": "Virtual cards",
          "href": "/virtual-cards"
        },
        {
          "label": "Answers Hub",
          "href": "/answers"
        }
      ]
    }
  ],
  "legal": [
    "The Ramp Visa Corporate Card is issued in the U.S. by Celtic Bank, and to U.S. corporations operating globally by Column N.A., Member FDIC, and is subject to credit approval. The Ramp Visa Commercial Card is issued by Sutton Bank, Member FDIC. The Ramp Visa Business Card is issued by Lead Bank, Member FDIC. Each card is issued pursuant to a license from Visa USA Inc.",
    "Ramp Visa Business Cards are issued in Canada by Peoples Trust Company, pursuant to license by Visa* International. Visa Int./Peoples Trust Company, Licensed User. Card Balance not insured by the Canada Deposit Insurance Corporation. Ramp Business Corporation is registered as a Payment Service Provider with the Bank of Canada.",
    "Ramp cards are issued in the UK by Stripe Payments UK Limited, an electronic money institution authorized by the Financial Conduct Authority (firm reference number: 900461). Ramp cards are issued in the EEA by Stripe Technology Europe Limited, an electronic money institution authorized by the Central Bank of Ireland (firm reference number: C187865). Cards are issued under the Visa card scheme pursuant to a license from Visa Europe Limited.",
    "Visa is a registered trademark of Visa International Service Association. All other trademarks and service marks belong to their respective owners.",
    "*Ramp Business Corporation is a financial technology company and is not a bank. Bank deposit services provided by First Internet Bank of Indiana, Member FDIC.",
    "\u2020Investment account with portfolios managed by Moment Advisors, LLC. Investing involves risk, including possible loss of principal. Asset allocation does not guarantee profit or protect against loss. Past performance does not guarantee future results. Additional information can be found here. Securities products offered by Apex Clearing Corporation, member FINRA, SIPC. The Investment Account is not insured by the FDIC, not a deposit product, and may lose value.",
    "Ramp Payments Corporation - NMLS 2371465 , Ramp Financing Corporation - NMLS 2431387"
  ],
  "legalLinks": [
    {
      "label": "Terms of Service",
      "href": "/legal/platform-agreement"
    },
    {
      "label": "Editorial Guidelines",
      "href": "/editorial-guidelines"
    },
    {
      "label": "Privacy Policy",
      "href": "/legal/privacy-policy"
    },
    {
      "label": "Your Privacy Choices",
      "href": "/data-privacy-opt-out"
    }
  ],
  "socialLinks": [
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/company/ramp"
    },
    {
      "label": "X",
      "href": "https://x.com/tryramp"
    },
    {
      "label": "Facebook",
      "href": "https://www.facebook.com/rampcard"
    }
  ],
  "address": [
    "Ramp Business Corporation",
    "28 West 23rd Street, Floor 2",
    "New York, NY 10010"
  ],
  "support": "Ramp Support: +1-855-206-7283",
  "emailLabel": "Email",
  "emailPlaceholder": "What\u2019s your work email?",
  "buttonLabel": "Get started for free"
};
