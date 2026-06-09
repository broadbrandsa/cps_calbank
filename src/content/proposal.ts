/**
 * CalBank — Academy of Trusted Advisors proposal content.
 * Source decks (CPS, 2026):
 *   - Relationship Management for SME Bankers (Express)
 *   - Relationship Management for Business, Commercial and Corporate (BCC)
 *   - Client Value Impact, Front Line (structural reference)
 * Copy is written in the CPS voice: second person, sentence case,
 * South African spelling, specific and credentialed, no em dashes.
 */

export const academy = {
  name: "Academy of Trusted Advisors",
  client: "CalBank",
  strapline: "Activating relationship managers as trusted advisors.",
  promise:
    "A leader-led relationship management programme that moves your bankers from transactional engagement to strategic, solution-led advice that grows client value and portfolio contribution.",
  kicker: "#ShapeYourFuture // Relationship management",
};

export const contact = {
  name: "Dr Indira Bhagaloo",
  role: "Chief Executive Officer, CPS",
  phone: "+27 11 789 1957",
  website: "www.cps.co.za",
  email: "succeed@cps.co.za",
  address: "39 Grove Street, Randburg, Johannesburg, Gauteng, South Africa",
  quote:
    "Skills development is the cornerstone of economic empowerment and societal progress, paving the way for a more prosperous and inclusive South Africa.",
};

/**
 * Top navigation. Two menus, each a dropdown of section links.
 * Hrefs are page-qualified so they work from either page.
 */
export const navMenus = [
  {
    label: "The proposal",
    href: "/",
    items: [
      { label: "The challenge", href: "/#challenge" },
      { label: "The opportunity", href: "/#solution" },
      { label: "Four transitions", href: "/#transitions" },
      { label: "The two programmes", href: "/#tracks" },
      { label: "Learning journey", href: "/#journey" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    label: "Why CPS",
    href: "/why-cps",
    items: [
      { label: "The 5 cornerstones of BIL", href: "/why-cps#methodology" },
      { label: "The learning platform", href: "/why-cps#platform" },
      { label: "Why CPS is trusted", href: "/why-cps#proof" },
      { label: "Assurance and accreditation", href: "/why-cps#assurance" },
    ],
  },
] as const;

/* ============================================================
   THE CHALLENGE
   ============================================================ */

/** The current state and the desired state. */
export const challengeStates = {
  current:
    "The challenge facing CalBank is to strengthen its position within a rapidly evolving financial ecosystem by attracting, retaining, and growing customer relationships across integrated banking and non-banking solutions.",
  desired:
    "Solutioning transformation calls for a deliberate, organisation-wide learning journey that empowers leaders and bankers to challenge entrenched ways of thinking and embrace new approaches to creating value.",
};

/** The behavioural challenge, what the journey requires bankers to do. */
export const behaviouralChallenge = [
  {
    title: "Achieve business results",
    body: "Increase market share by deepening customer value, expanding portfolio contribution, and growing profitable relationships across the client base.",
  },
  {
    title: "Adopt ecosystem-centric thinking",
    body: "Help bankers identify broader customer needs, connect clients to integrated solutions, increase share of wallet, improve retention, and manage risk well.",
  },
  {
    title: "Scale relationship excellence",
    body: "Build habits that improve the quality, relevance, and commercial impact of every customer engagement.",
  },
  {
    title: "Build relationship capability",
    body: "Strengthen the leadership, behaviours, and customer focus needed to deepen relationships and grow within the evolving financial ecosystem.",
  },
];

/** Why this is more than a sales-skills intervention. */
export const challengeNarrative = [
  "In an increasingly digital, competitive, and fast-evolving financial ecosystem, CalBank must strengthen its ability to attract, grow, and retain customer relationships while expanding its role as a trusted connector of integrated financial solutions.",
  "Achieving this ambition takes more than enhanced sales capability. It demands a real shift in how leaders and bankers think, collaborate, engage customers, and create value.",
  "By strengthening relationship management disciplines, embedding leader-led engagement, and building commercial and digital capability, CalBank can deepen customer value, increase market share, and accelerate sustainable growth.",
];

export const challengeQuote =
  "Market leadership is earned when capability, culture, and customer value converge.";

/* ============================================================
   THE OPPORTUNITY AND SOLUTION
   ============================================================ */

/** The shift the programme drives. */
export const opportunityShift = {
  from: "Transactional banking",
  to: "Strategic, solution-led relationship management",
  body: "This is the opportunity to move beyond transactional banking and become drivers of transformation, strengthening strategic alignment, deepening client-centric engagement and solutioning, unlocking cross-sell and value chain opportunities, and optimising portfolio contribution to deliver greater value for both clients and the bank.",
};

/** Bridging the gap between knowledge and performance. */
export const knowledgeToPerformance = [
  "Become a trusted strategic partner.",
  "Think client value, growth, and long-term relationships.",
  "Engage with insight-led, solution-driven conversations.",
  "Optimise portfolio value through strategic relationship management.",
  "Solve holistically across the client's business and value chain.",
];

/** What the solution actually is. */
export const solutionIntro = [
  "We propose a leader-led relationship management programme, built as a targeted response to diagnosed skills gaps.",
  "It is designed to drive meaningful organisational change by embedding new solutioning behaviours, strengthening learning application at scale, and reshaping the habits that influence performance and culture. It is more than a learning intervention. It works as a strategic organisation development and change initiative.",
];

/** Learning for impact, the five enablers. */
export const learningForImpact = [
  {
    title: "Engaged leadership",
    body: "Leaders who actively champion, model, and embed the desired competencies across the organisation.",
  },
  {
    title: "Seamless learning adoption",
    body: "Capability development that translates directly into workplace performance.",
  },
  {
    title: "Structured learning cadences",
    body: "A rhythm that sustains momentum and keeps the transformation on course.",
  },
  {
    title: "A scalable learning ecosystem",
    body: "A secure, flexible platform designed to support evolving business and capability needs at any scale.",
  },
  {
    title: "Data-driven insight",
    body: "Robust analytics that measure progress, engagement, competence, application, and business impact.",
  },
];

/* ============================================================
   THE FOUR TRANSITIONS
   ============================================================ */

/** The four learning transitions that build a trusted advisor. */
export const transitions = [
  {
    n: 1,
    name: "Become client-centric",
    summary:
      "Put the client at the centre of every engagement, and lead with empathy and intent.",
    points: [
      "The role of the client and the banker",
      "The emotional consideration of client experience",
      "The client-centric experience",
      "Your voice: tone, energy, and empathy",
      "Personalisation techniques",
    ],
  },
  {
    n: 2,
    name: "Become a problem-solver",
    summary:
      "Move from pitching products to understanding and solving real client problems.",
    points: [
      "The role of the problem-solver",
      "Educating the problem",
      "Personal significance of the problem-solver",
      "Increase confidence and resilience",
    ],
  },
  {
    n: 3,
    name: "Become a value-creator",
    summary:
      "Create and articulate value across the client's business and value chain.",
    points: [
      "Solution for value",
      "The value of problems",
      "How value is created",
      "Who determines value",
      "The balanced exchange of value",
      "Value in our products and services",
    ],
  },
  {
    n: 4,
    name: "Become a value-conversationist",
    summary:
      "Lead insight-led conversations that turn relationships into portfolio growth.",
    points: [
      "The flow of value",
      "The value conversation",
      "The unique hypothesis of value",
      "Responding to rejection",
      "Preparation and planning for value conversations",
      "Psychological buffering",
    ],
  },
];

/** Critical competencies linked to outcomes. */
export const competencies = [
  {
    title: "Client centricity",
    body: "A deep understanding of client behaviour and the emotional experience clients have when they are seeking value through banking solutions.",
  },
  {
    title: "Solutioning value",
    body: "Greater awareness of the client's needs, leading to flexible, collaborative, and value-focused engagements.",
  },
  {
    title: "Value conversations",
    body: "The ability to engage and draw the best from client conversations, creating immediate and lasting value for clients.",
  },
  {
    title: "Leader-enabled impact",
    body: "Personal significance and self-efficacy, so capability shows up on the job when leaders are enabling client value.",
  },
];

/* ============================================================
   THE TWO PROGRAMMES (TRACKS)
   ============================================================ */

/**
 * The Academy holds two relationship management programmes. Each runs a
 * banker journey and a parallel leader enablement journey.
 */
export const tracks = [
  {
    id: "sme",
    name: "RM for SME Bankers",
    badge: "Express",
    audience: "SME bankers",
    blurb:
      "An express relationship management programme for bankers serving the SME segment, focused on solutioning excellence and portfolio growth.",
    banker: {
      price: "R 17 840",
      amount: 17840,
      unit: "per banker",
      cohort: "Minimum cohort of 20",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, Journey to Mastery marking and reporting.",
    },
    leader: {
      price: "R 2 510",
      amount: 2510,
      unit: "per line manager",
      cohort: "Runs in parallel with the banker cohort",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, and reporting.",
    },
  },
  {
    id: "bcc",
    name: "RM for Business, Commercial and Corporate",
    badge: "BCC",
    audience: "Business, commercial and corporate bankers",
    blurb:
      "A relationship management programme for bankers managing business, commercial, and corporate portfolios, building strategic, solution-led client engagement.",
    banker: {
      price: "R 17 270",
      amount: 17270,
      unit: "per banker",
      cohort: "Minimum cohort of 20",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, Journey to Mastery marking and reporting.",
    },
    leader: {
      price: "R 2 510",
      amount: 2510,
      unit: "per line manager",
      cohort: "Runs in parallel with the banker cohort",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, and reporting.",
    },
  },
] as const;

/* ============================================================
   THE LEARNING JOURNEY
   ============================================================ */

export const bankerJourneyIntro =
  "The intent is to increase the relationship manager's effectiveness in executing the business strategy, growing customer and portfolio profitability, and improving the quality of customer experiences. Each transition unlocks the banker's ability to grow performance, build stronger relationships, and hit their targets.";

/** The banker journey, activating relationship managers as trusted advisors. */
export const bankerJourney = [
  {
    n: 1,
    title: "Student registration",
    detail: "Onboarding onto CPS Learn and the cohort.",
  },
  {
    n: 2,
    title: "Pre-programme evaluation",
    detail: "A capability baseline that informs the journey.",
  },
  {
    n: 3,
    title: "Programme activation",
    detail: "A 2-hour contact session that sets intent and direction.",
  },
  {
    n: 4,
    title: "Become client-centric",
    detail: "Contact session and online learning for transition one.",
  },
  {
    n: 5,
    title: "Become a problem-solver",
    detail: "Contact session and online learning for transition two.",
  },
  {
    n: 6,
    title: "Become a value-creator",
    detail: "Contact session and online learning for transition three.",
  },
  {
    n: 7,
    title: "Become a value-conversationist",
    detail: "Contact session and online learning for transition four.",
  },
  {
    n: 8,
    title: "Portfolio growth plan and Journey to Mastery",
    detail:
      "Integrated assessment and a portfolio growth plan that turns capability into sustained performance.",
  },
];

export const leaderJourneyIntro =
  "Direct line managers run a parallel enablement journey, so team capability translates into sustained workplace performance. Leaders learn to engage their teams with greater intention, build trust, and strengthen performance conversations. Each transition unlocks the leader's ability to enable their bankers to grow.";

/** The leader enablement journey, activating line managers as performance multipliers. */
export const leaderJourney = [
  {
    n: 1,
    title: "Pre-programme leader survey",
    detail: "A baseline of leader capability and enablement readiness.",
  },
  {
    n: 2,
    title: "Programme activation",
    detail: "A 2-hour contact session and online learning to set the leader's role.",
  },
  {
    n: 3,
    title: "Enable the transitions",
    detail:
      "Contact sessions and online learning that prepare leaders to coach client-centricity, problem-solving, value creation, and value conversations.",
  },
  {
    n: 4,
    title: "Coach and embed",
    detail:
      "Support and guidance for the workplace application of the banker's Journey to Mastery.",
  },
];

/* ============================================================
   WHY CPS
   ============================================================ */

/** The 5 Cornerstones of BIL. */
export const fiveCornerstones = [
  { n: 1, title: "RAMPed", body: "Science-based learning, built so knowledge sticks." },
  { n: 2, title: "Managed and supported learning", body: "Guided support that keeps learners moving and on track." },
  { n: 3, title: "Applied, leader-led learning", body: "Learning practised in the flow of real work, led by leaders." },
  { n: 4, title: "Adaptive FutureSkills", body: "Skills tuned for change, complexity, and what comes next." },
  { n: 5, title: "CPS Learn", body: "The BIL learning technology that delivers it all in one place." },
];

export const methodologyIntro =
  "CPS uses a transformative learning methodology, the 5 C's, designed to help organisations navigate digitalisation, adapt to industry shifts, and thrive in a changing landscape. By embracing the five cornerstones of learning, you set out on a journey of continuous growth, resilience, and adaptability.";

/** CPS Learn platform capability. */
export const platformCapabilities = [
  "Accessible 24 / 7 / 365",
  "Web based",
  "PC, tablet, and mobile enabled",
  "Separate, assignable interfaces for administrator, student, and coach",
  "Ease of use across every role",
  "Secure, scalable, and flexible for cohorts of any size",
];

/** Trust proof points. */
export const trustPoints = [
  { stat: "Accredited", label: "Recognised and accredited by the relevant South African regulators." },
  { stat: "30 000+", label: "Successful graduates across financial services." },
  { stat: "4 800", label: "Active learners on the CPS Learn platform." },
  { stat: "Award-winning", label: "Three-year winner of the BANKSETA Skills Development awards." },
];

/** B-BBEE ownership, shown as donut rings. */
export const ownership = [
  { value: 57, label: "Black ownership" },
  { value: 32, label: "Black women ownership" },
];

export const whyCpsNarrative = [
  "In our 24 years, we have helped many organisations reach their strategic goals by building the adaptive skills the changing world demands. That experience shaped the methodologies, processes, and technology we use to design, develop, and deliver affordable learning at scale.",
  "CPS is a Level 1 B-BBEE contributor, with 57% black ownership and 32% black women ownership.",
];

/** Accreditation and assurance. */
export const accreditation = [
  {
    title: "Recognised and accredited",
    body: "CPS programmes are recognised and accredited by the relevant South African regulators, so the capability you build carries weight.",
  },
  {
    title: "Category B endorsement",
    body: "The relationship management programme is positioned for Category B on the skills development matrix, on endorsement from your verification agencies, thanks to its integrated assessment of theoretical and practical knowledge and workplace experience.",
  },
  {
    title: "Measured for impact",
    body: "Programme impact surveys measure shifts in mindset, behaviour, and application, giving you clear evidence of value and a measurable return on investment.",
  },
  {
    title: "B-BBEE Level 1",
    body: "A Level 1 contributor with 57% black ownership and 32% black women ownership.",
  },
];

/** Client logos for the trust band (files in /public/images/logos). */
export const clientLogos = [
  { name: "Standard Bank", src: "/images/logos/standard-bank.png" },
  { name: "Absa", src: "/images/logos/absa.svg" },
  { name: "Nedbank", src: "/images/logos/nedbank.gif" },
  { name: "FNB", src: "/images/logos/fnb.svg" },
  { name: "Capitec", src: "/images/logos/capitec.png" },
  { name: "Discovery Bank", src: "/images/logos/discovery-bank.png" },
  { name: "Old Mutual", src: "/images/logos/old-mutual.png" },
];
