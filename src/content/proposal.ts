/**
 * CalBank — Academy of Trusted Advisors proposal content.
 *
 * The proposal covers TWO clearly separate banking segments, each with its own
 * pathway, outcomes, and pricing:
 *   - Retail banking → Client Value Impact (the four transitions), for frontline
 *     bankers across sales, service, and collections. Source: CPS "Client Value
 *     Impact, Front Line" deck. Pricing R5,040 banker / R3,580 leader, 8 weeks.
 *   - Business banking → Relationship Management, for SME and Business,
 *     Commercial & Corporate relationship managers. Source: the two CPS RM decks.
 *     Each track runs an 8-step trusted-advisor journey. Pricing R17,840 (SME) /
 *     R17,270 (BCC) per banker, R2,510 per line manager.
 *
 * Copy is written in the CPS voice: second person, sentence case,
 * South African spelling, specific and credentialed, no em dashes.
 */

export const academy = {
  name: "Academy of Trusted Advisors",
  client: "CalBank",
  strapline: "One sales intervention into the ecosystem, across retail and business banking.",
  promise:
    "A leader-led capability journey that turns frontline and relationship bankers into trusted advisors, moving CalBank from transactional engagement to value-led conversations that grow client value and portfolio contribution.",
  kicker: "#ShapeYourFuture // Retail and business banking",
};

export const contact = {
  name: "Dr Indira Bhagaloo",
  role: "CEO, Cornerstone Performance Solutions",
  mobile: "+27 83 400 7082",
  phone: "+27 11 789 1957",
  website: "www.cps.co.za",
  email: "indirab@cps.co.za",
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
      { label: "Two pathways", href: "/#pathways" },
      { label: "Retail · Client Value Impact", href: "/#retail" },
      { label: "Business · Relationship Management", href: "/#business" },
      { label: "Next steps", href: "/#contact" },
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
   SHARED FRONT END — THE CHALLENGE
   ============================================================ */

export const challengeStates = {
  current:
    "The challenge facing CalBank is to strengthen its position within a rapidly evolving financial ecosystem by attracting, retaining, and growing customer relationships across integrated banking and non-banking solutions.",
  desired:
    "Solutioning transformation calls for a deliberate, organisation-wide learning journey that empowers leaders and bankers to challenge entrenched ways of thinking and embrace new approaches to creating value.",
};

/** The behavioural challenge, what the transformation requires bankers to do. */
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

export const challengeNarrative = [
  "In an increasingly digital, competitive, and fast-evolving financial ecosystem, CalBank must strengthen its ability to attract, grow, and retain customer relationships while expanding its role as a trusted connector of integrated financial solutions.",
  "Achieving this ambition takes more than enhanced sales capability. It demands a real shift in how leaders and bankers think, collaborate, engage customers, and create value.",
  "By strengthening relationship management disciplines, embedding leader-led engagement, and building commercial and digital capability, CalBank can deepen customer value, increase market share, and accelerate sustainable growth.",
];

export const challengeQuote =
  "Market leadership is earned when capability, culture, and customer value converge.";

/* ============================================================
   SHARED FRONT END — THE OPPORTUNITY
   ============================================================ */

export const opportunityShift = {
  from: "Transactional banking",
  to: "Trusted, value-led advice across the ecosystem",
  body: "This is the opportunity to move beyond transactional banking and become drivers of transformation, deepening client-centric engagement and solutioning, unlocking cross-sell and value chain opportunities, and optimising portfolio contribution to deliver greater value for clients and the bank, across both retail and business banking.",
};

export const solutionIntro = [
  "We propose one leader-led sales intervention into the ecosystem, delivered as two clearly separate pathways so each segment gets the journey, outcomes, and pricing that fit its reality.",
  "Both pathways are designed to drive meaningful organisational change by embedding new solutioning behaviours, strengthening learning application at scale, and reshaping the habits that influence performance and culture. This is more than a learning intervention. It works as a strategic organisation development and change initiative.",
];

/** Learning for impact, the five enablers (shared methodology). */
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

/** The two segment pathways, summarised for the overview band. */
export const pathways = [
  {
    id: "retail",
    segment: "Retail banking",
    programme: "Client Value Impact",
    href: "#retail",
    summary:
      "Frontline value selling across sales, service, and collections, built on the four transitions that turn a frontline banker into a trusted advisor.",
    audience: "Frontline bankers · contact centre and collections",
    priceFrom: "From R 5 040 per banker",
    duration: "8 weeks",
  },
  {
    id: "business",
    segment: "Business banking",
    programme: "Relationship Management",
    href: "#business",
    summary:
      "An 8-step trusted-advisor journey for relationship managers, building strategic, solution-led engagement that grows portfolio value.",
    audience: "SME · Business, Commercial & Corporate",
    priceFrom: "From R 17 270 per banker",
    duration: "Leader-enabled cohort",
  },
] as const;

/* ============================================================
   RETAIL BANKING — CLIENT VALUE IMPACT
   ============================================================ */

export const retail = {
  segment: "Retail banking",
  programme: "Client Value Impact",
  tagline: "Built on the fundamentals of value selling.",
  intro:
    "A leader-led frontline programme that moves retail bankers from transactional engagement to consistent client value creation, across sales, service, and collections. Each transition unlocks the competencies frontline staff need to grow sales and improve client experience.",
  audiences: ["Frontline bankers", "Contact centre and collections agents"],
  pricing: {
    duration: "8 weeks",
    category: "Category B programme, on endorsement from your verification agencies.",
    banker: {
      role: "Frontline bankers",
      price: "R 5 040",
      amount: 5040,
      unit: "per banker",
      cohort: "Minimum cohort of 20",
      includes: "Programme fees, virtual contact sessions, and digital content.",
    },
    leader: {
      role: "Leaders",
      price: "R 3 580",
      amount: 3580,
      unit: "per leader",
      cohort: "Minimum cohort of 10",
      includes: "Two contact sessions over 8 weeks and programme material.",
    },
  },
};

/** The four transitions, contextualised across frontline sales, service, and collections. */
export const retailTransitions = [
  {
    n: 1,
    name: "Become client-centric",
    summary: "Put the client at the centre of every engagement, and lead with empathy and intent.",
    points: [
      "The role of the client and the banker",
      "The emotional consideration of client experience",
      "The client-centric experience, in person and virtual",
      "Your voice: tone, energy, and empathy",
      "Personalisation techniques and call resolution",
    ],
  },
  {
    n: 2,
    name: "Become a problem-solver",
    summary: "Move from pitching products to understanding and solving real client problems.",
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
    summary: "Create and articulate value for the client and the bank.",
    points: [
      "Solution for value",
      "The value of problems",
      "How value is created and who determines it",
      "The balanced exchange of value",
      "Value in our products and services",
    ],
  },
  {
    n: 4,
    name: "Become a value-conversationist",
    summary: "Lead insight-led conversations that turn engagements into client value.",
    points: [
      "The flow of value and the value conversation",
      "The unique hypothesis of value",
      "Responding to rejection",
      "Preparation and planning for value conversations",
      "Psychological buffering",
    ],
  },
];

/** Critical frontline competencies linked to sales, service, and collections outcomes. */
export const retailCompetencies = [
  {
    title: "Client centricity",
    body: "A deep understanding of client behaviour and the emotional experience clients have when they are seeking value through sales and service solutions.",
  },
  {
    title: "Client service value",
    body: "Greater awareness of the client's peak-end requirements, leading to flexible, collaborative, and value-focused engagements.",
  },
  {
    title: "Banking value conversations",
    body: "The ability to engage and draw the best from client conversations, creating immediate and lasting value for clients.",
  },
  {
    title: "Leader-enabled value impact",
    body: "Personal significance and self-efficacy, so frontline capability shows up on the job when leaders are enabling client value.",
  },
];

export const retailBankerJourneyIntro =
  "Bankers follow a leader-enabled learning journey over 8 weeks, from transactional engagement to consistent client value creation. Each transition unlocks the key competencies frontline staff need to grow sales and improve client experience.";

export const retailBankerJourney = [
  { n: 1, title: "Programme orientation", detail: "Week 1. A 2-hour virtual contact session and 4 hours of online learning." },
  { n: 2, title: "Become client-centric", detail: "Transition 1. 1 week, a 1-day contact session, and 6 hours of online learning." },
  { n: 3, title: "Become a problem-solver", detail: "Transition 2. 1 week, a 1-day contact session, and 6 hours of online learning." },
  { n: 4, title: "Become a value-creator", detail: "Transition 3. 1 week, a 1-day contact session, and 6 hours of online learning." },
  { n: 5, title: "Become a value-conversationist", detail: "Transition 4. 1 week, a 1-day contact session, and 6 hours of online learning." },
  { n: 6, title: "Integrated assessment and Journey to Mastery", detail: "Weeks 6 to 8. Two weeks of workplace activities and a 1-week online knowledge application assessment." },
];

export const retailLeaderJourneyIntro =
  "Direct line managers run a parallel enablement journey over 8 weeks, so frontline capability translates into sustained workplace results. Each transition unlocks the leader's ability to enable their bankers to grow their sales.";

export const retailLeaderJourney = [
  { n: 1, title: "Programme orientation", detail: "Week 1. A 2-hour virtual contact session and online learning." },
  { n: 2, title: "Enable transitions 1 and 2", detail: "Client-centricity and problem-solving. 1 week, a 1-day contact session, and 8 hours of online learning." },
  { n: 3, title: "Enable transitions 3 and 4", detail: "Value creation and value conversations. 1 week, a 1-day contact session, and 8 hours of online learning." },
  { n: 4, title: "Support, guidance, and enablement", detail: "Weeks 6 to 8. Coach and enable the workplace application of the team's Journey to Mastery." },
];

/* ============================================================
   BUSINESS BANKING — RELATIONSHIP MANAGEMENT
   ============================================================ */

export const business = {
  segment: "Business banking",
  programme: "Relationship Management",
  tagline: "Activating relationship managers as trusted advisors.",
  intro:
    "A leader-led relationship management programme for SME and Business, Commercial & Corporate bankers. It increases the relationship manager's effectiveness in executing the business strategy, growing customer and portfolio profitability, and improving the quality of customer experiences. Each transition unlocks the ability to grow performance, build stronger relationships, and hit targets.",
};

/** The four shifts that bridge knowledge and performance for relationship managers. */
export const businessShifts = [
  "Become a trusted strategic partner.",
  "Think client value, growth, and long-term relationships.",
  "Engage with insight-led, solution-driven conversations.",
  "Optimise portfolio value through strategic relationship management.",
  "Solve holistically across the client's business and value chain.",
];

/** Business banking outcomes. */
export const businessOutcomes = [
  {
    title: "Portfolio contribution",
    body: "Grow market share by deepening customer value and expanding profitable portfolio contribution across the client base.",
  },
  {
    title: "Cross-sell and ecosystem",
    body: "Connect clients to integrated solutions, increase share of wallet, and grow the bank's role as a connector of the financial ecosystem.",
  },
  {
    title: "Retention and risk",
    body: "Improve retention and manage risk well through stronger, insight-led client relationships.",
  },
  {
    title: "Relationship and sales effectiveness",
    body: "Increase the number and quality of customer engagements, and strengthen sales leadership, behaviour, and energy.",
  },
];

/**
 * The two business-banking tracks. Each runs its own 8-step trusted-advisor
 * journey (the modules differ between SME and BCC), with a parallel leader
 * enablement journey.
 */
export const businessTracks = [
  {
    id: "sme",
    name: "RM for SME Bankers",
    badge: "SME",
    audience: "SME bankers",
    blurb:
      "A relationship management programme for bankers serving the SME segment, focused on solutioning excellence and portfolio growth.",
    journey: [
      { n: 1, title: "Programme activation", detail: "A 2-hour contact session, 2 hours of online learning, and a pre-programme evaluation." },
      { n: 2, title: "Value alignment", detail: "Establish a clear understanding of the bank's strategy and align your role to deliver value as a trusted advisor." },
      { n: 3, title: "Client insight and business finance", detail: "Understand the link between client insight and value creation, and apply eco-systemic thinking." },
      { n: 4, title: "Solutioning for value", detail: "Adopt an intentional solutioning approach that drives value for clients and the bank." },
      { n: 5, title: "Business credit, the foundations of value", detail: "Identify the right credit and risk-mitigation solutions to meet client needs and business goals." },
      { n: 6, title: "Value conversations", detail: "Master higher-quality value-up conversations that translate into better client solutions." },
      { n: 7, title: "Unlocking portfolio value", detail: "Deepen insight into portfolio performance and execute systematically to create full-bank value." },
      { n: 8, title: "Portfolio growth plan and Journey to Mastery", detail: "Consolidate learning into a portfolio growth plan and an integrated assessment." },
    ],
    banker: {
      role: "Relationship managers",
      price: "R 17 840",
      amount: 17840,
      unit: "per banker",
      cohort: "Minimum cohort of 20",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, Journey to Mastery marking and reporting.",
    },
    leader: {
      role: "Line managers",
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
    journey: [
      { n: 1, title: "Programme activation", detail: "A 2-hour contact session, 2 hours of online learning, and a pre-programme evaluation." },
      { n: 2, title: "Value alignment", detail: "Understand the bank's strategy and align your role to deliver value as a trusted advisor." },
      { n: 3, title: "Building client insight", detail: "Deepen your understanding of clients, their goals and challenges, and their value chains." },
      { n: 4, title: "A value perspective on business finance", detail: "Align your solutioning to the client's financial goals and the bank's strategy." },
      { n: 5, title: "Partnering for credit value", detail: "Identify the right credit and risk-mitigation solutions to meet client needs and business goals." },
      { n: 6, title: "Client engagement and solutioning", detail: "Strengthen engagements through intentional preparation, critical questioning, and value-driven conversations." },
      { n: 7, title: "Unlocking portfolio value", detail: "Deepen insight into portfolio performance and execute systematically to create full-bank value." },
      { n: 8, title: "Portfolio growth plan and Journey to Mastery", detail: "Consolidate learning into a portfolio growth plan and an integrated assessment." },
    ],
    banker: {
      role: "Relationship managers",
      price: "R 17 270",
      amount: 17270,
      unit: "per banker",
      cohort: "Minimum cohort of 20",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, Journey to Mastery marking and reporting.",
    },
    leader: {
      role: "Line managers",
      price: "R 2 510",
      amount: 2510,
      unit: "per line manager",
      cohort: "Runs in parallel with the banker cohort",
      includes:
        "Facilitation, LMS fees, online learning material, student registration, student support, academic support, and reporting.",
    },
  },
] as const;

export const businessLeaderJourneyIntro =
  "Direct line managers run a parallel enablement journey, so team capability translates into sustained workplace performance. Each enablement block prepares leaders to coach the modules their bankers are working through.";

export const businessLeaderJourney = [
  { n: 1, title: "Programme activation", detail: "A 2-hour contact session, 2 hours of online learning, and a pre-programme leader survey." },
  { n: 2, title: "Enable client insight and credit value", detail: "An 8-hour contact session enabling deeper client, business, and credit understanding." },
  { n: 3, title: "Enable solutioning and value conversations", detail: "An 8-hour contact session enabling intentional solutioning and value-driven conversations." },
  { n: 4, title: "Enable portfolio value and coach to mastery", detail: "An 8-hour contact session on portfolio value, then coaching the workplace application of the Journey to Mastery." },
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
  { stat: "30 000+", label: "Successful graduates." },
  { stat: "4 800", label: "Active learners on the CPS Learn platform." },
  { stat: "Award-winning", label: "Three-year winner of the BANKSETA Skills Development awards." },
];

/** B-BBEE ownership, shown as donut rings. */
export const ownership = [
  { value: 57, label: "Black ownership" },
  { value: 32, label: "Black women ownership" },
];

export const whyCpsNarrative = [
  "In more than 25 years, we have helped many organisations reach their strategic goals by building the adaptive skills the changing world demands. That experience shaped the methodologies, processes, and technology we use to design, develop, and deliver affordable learning at scale.",
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
    body: "The programmes are positioned for Category B on the skills development matrix, on endorsement from your verification agencies, thanks to their integrated assessment of theoretical and practical knowledge and workplace experience.",
  },
  {
    title: "Integrated assessment",
    body: "Each pathway is assessed through the Journey to Mastery, covering theoretical and practical knowledge and workplace application, with marking and reporting included.",
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
