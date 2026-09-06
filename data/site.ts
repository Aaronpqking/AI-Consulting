// ─── Centralized Site Identity ───────────────────────────────────
// All global components, metadata, and page titles read from this source.
// To change the firm identity, update this object only.

export const siteIdentity = {
  brandName: 'Forward Deployment',
  discipline: 'AI Systems Engineering',
  descriptor: 'Forward Deployment · AI Systems Engineering',
  legalName: 'Aaron King',
  tagline: 'AI · Data · Automation · Integration',
  positioning: 'Built to work beyond the demo.',
  description:
    'We architect and build the AI, data, automation and integration infrastructure that connects business information to reliable, governed action.',
  contactEmail: 'aaronpqking@gmail.com',
  location: 'South Florida · Remote',
  linkedin: 'https://linkedin.com/in/aaronpqking',
  github: 'https://github.com/Aaronpqking',
  footerLine:
    'AI infrastructure for complex business operations.',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://forwarddeployment.ai',
};

// ─── Metadata Helper ────────────────────────────────────────────
// Centralized page-title pattern: [Page Name] | Forward Deployment
export function pageTitle(page?: string): string {
  return page
    ? `${page} | ${siteIdentity.brandName}`
    : `${siteIdentity.brandName} · ${siteIdentity.discipline}`;
}

export const siteDescription = siteIdentity.description;

// ─── Navigation ──────────────────────────────────────────────────
export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Firm', href: '/firm' },
  { label: 'Contact', href: '/contact' },
];

// ─── Homepage ────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'FORWARD DEPLOYMENT · AI SYSTEMS ENGINEERING',
  headline: 'AI infrastructure for complex business operations.',
  subheadline:
    'We architect and build the AI, data, automation and integration infrastructure that connects business information to reliable, governed action.',
  supporting: 'Built to work beyond the demo.',
  primaryCta: { label: 'Start a Conversation', href: '/contact?source=hero' },
  secondaryCta: { label: 'View Our Work', href: '/work' },
};

export const authorityBand = {
  statement:
    'Senior-led systems architecture and implementation across AI, data, operational systems and complex integrations.',
  labels: [
    'SYSTEMS ARCHITECTURE',
    'AI & DATA INFRASTRUCTURE',
    'ENTERPRISE INTEGRATION',
    'PRODUCTION RELIABILITY',
  ],
};

export const forwardDeployment = {
  eyebrow: 'WE ARE FORWARD DEPLOYMENT',
  heading: 'We work inside the operating reality of the business.',
  copy: 'We do not stop at recommendations or prototypes. We work directly with the systems, information, constraints and workflows that run the business — designing, building, integrating and evaluating the system through production readiness.',
  ctaLine: 'Have an operating process or system that should work differently?',
  stages: [
    { name: 'Understand', desc: 'Define the business objective, operating process, constraints and judgment requirements.' },
    { name: 'Map', desc: 'Identify information sources, systems of record, actors, decisions, integrations and failure boundaries.' },
    { name: 'Architect', desc: 'Define deterministic logic, AI reasoning, data flows, approval boundaries and system ownership.' },
    { name: 'Build', desc: 'Implement the smallest useful version and connect it to the real operating environment.' },
    { name: 'Integrate', desc: 'Connect the system to existing infrastructure, APIs, workflows and systems of record.' },
    { name: 'Evaluate', desc: 'Measure system behavior, observe failures, test assumptions and verify outputs against explicit criteria.' },
    { name: 'Operationalize', desc: 'Add monitoring, retries, documentation, release controls and continuous improvement.' },
  ],
};

export const firmPositioning = {
  eyebrow: 'FROM BUSINESS PROCESS TO WORKING SYSTEM',
  heading: 'AI tools are not usually the hard part.',
  copy: 'The hard part is connecting information, business process, systems of record, human judgment, automation and reliable execution into one coherent system.',
  copy2: '',
  supporting: '',
};

// ─── Services ────────────────────────────────────────────────────
export const services = [
  {
    id: 'ai-operating-systems',
    num: '01',
    title: 'AI Systems & Operating Infrastructure',
    label: 'OPERATING SYSTEMS',
    copy: 'Connect information, decisions, workflows and execution across business functions.',
    applications: [
      'executive operating systems',
      'meeting-to-action workflows',
      'decision and commitment tracking',
      'work/review queues',
      'business-process automation',
      'AI-enabled operational systems',
      'multi-system orchestration',
    ],
    href: '/services/ai-operating-systems',
    cta: 'Explore AI Systems',
  },
  {
    id: 'data-knowledge',
    num: '02',
    title: 'Data & Knowledge Infrastructure',
    label: 'DATA · KNOWLEDGE',
    copy: 'Turn documents, databases, research and operational information into usable institutional intelligence.',
    applications: [
      'document intelligence',
      'RAG and advanced retrieval',
      'structured + unstructured retrieval',
      'relational + vector retrieval',
      'research ingestion',
      'knowledge pipelines',
      'metadata architecture',
      'enterprise search',
      'provenance and citations',
      'evaluation and regression testing',
    ],
    href: '/services/data-knowledge',
    cta: 'Explore Data & Knowledge',
  },
  {
    id: 'automation-integration',
    num: '03',
    title: 'Automation & Integration',
    label: 'AUTOMATION · INTEGRATION',
    copy: 'Connect CRM, commerce, productivity, marketing and internal systems through reliable workflows and APIs.',
    applications: [
      'CRM workflows',
      'email and calendar systems',
      'commerce systems',
      'marketing systems',
      'APIs and webhooks',
      'task systems',
      'SaaS integrations',
      'workflow orchestration',
      'synchronization',
      'deterministic automation',
      'agent-assisted processes',
    ],
    href: '/services#automation-integration',
    cta: 'Explore Automation & Integration',
  },
  {
    id: 'private-hybrid-ai',
    num: '04',
    title: 'Private & Hybrid AI',
    label: 'PRIVATE · HYBRID',
    copy: 'Select local, cloud and hybrid architectures based on data sensitivity, performance and model requirements.',
    applications: [
      'local inference',
      'cloud models',
      'private cloud',
      'hybrid architectures',
      'sensitive-data routing',
      'data classification',
      'model abstraction',
      'controlled disclosure',
      'provider-independent application architecture',
    ],
    href: '/services#private-hybrid-ai',
    cta: 'Explore Private & Hybrid AI',
  },
];

// ─── Engagement Modes ────────────────────────────────────────────
export const engagementModes = [
  {
    title: 'Architecture & Discovery',
    desc: 'Define the target system architecture, information flows, integration points and evaluation strategy before implementation begins.',
  },
  {
    title: 'Implementation',
    desc: 'Build the system — data pipelines, retrieval, APIs, workflows, agent logic, human-review interfaces and operational controls.',
  },
  {
    title: 'Systems Rescue & Modernization',
    desc: 'Diagnose and repair stalled or failing AI, data, or integration systems. Isolate the failure boundary and implement the smallest defensible fix.',
  },
  {
    title: 'Evaluation & Production Readiness',
    desc: 'Establish evaluation frameworks, regression testing, release gates, monitoring and operational readiness criteria.',
  },
  {
    title: 'Fractional AI Systems Architecture',
    desc: 'Ongoing senior technical guidance for organizations that need architecture and delivery leadership without a full-time hire.',
  },
  {
    title: 'Ongoing Optimization & Support',
    desc: 'Monitor, evaluate and improve the system in production. Iterate on retrieval quality, evaluation coverage and operational reliability.',
  },
];

// ─── Systems Model ───────────────────────────────────────────────
export const systemsModel = {
  eyebrow: 'OUR SYSTEMS MODEL',
  heading: 'From information to governed action.',
  closing:
    'AI should reason where reasoning adds value. Deterministic systems should execute where correctness is required.',
  stages: [
    {
      num: '01',
      name: 'INFORMATION',
      label: 'Sources',
      items: ['Meetings', 'Email', 'Documents', 'CRM', 'Commerce', 'Research', 'Operational data'],
    },
    {
      num: '02',
      name: 'INTELLIGENCE',
      label: 'Capabilities',
      items: ['Normalize', 'Retrieve', 'Correlate', 'Classify', 'Reason', 'Extract'],
    },
    {
      num: '03',
      name: 'DECISION',
      label: 'Outputs',
      items: ['Recommendations', 'Tasks', 'Commitments', 'Opportunities', 'Exceptions'],
    },
    {
      num: '04',
      name: 'GOVERNANCE',
      label: 'Controls',
      items: ['Rules', 'Confidence', 'Permissions', 'Human review', 'Approval'],
    },
    {
      num: '05',
      name: 'ACTION',
      label: 'Targets',
      items: ['CRM', 'Email', 'Calendar', 'Tasks', 'Business systems', 'Workflows'],
    },
    {
      num: '06',
      name: 'EVALUATION',
      label: 'Controls',
      items: ['Logs', 'Evidence', 'Outcomes', 'Errors', 'Feedback', 'Improvement'],
    },
  ],
};

// ─── Outcomes ────────────────────────────────────────────────────
export const outcomes = [
  {
    title: 'Less information handling',
    desc: 'Reduce repetitive movement, classification and reconciliation of information across systems.',
  },
  {
    title: 'Better institutional memory',
    desc: 'Preserve decisions, relationships, commitments, evidence and knowledge beyond individual conversations or documents.',
  },
  {
    title: 'Faster execution',
    desc: 'Turn business events into proposed or approved actions without manually rebuilding context at every step.',
  },
  {
    title: 'Controlled intelligence',
    desc: 'Place deterministic rules, permissions, human judgment and evaluation around AI rather than treating model output as the final authority.',
  },
];

// ─── Case Studies ────────────────────────────────────────────────
export const caseStudies = [
  {
    id: 'industrial-knowledge-system',
    category: 'DATA · KNOWLEDGE · RETRIEVAL',
    title: 'Industrial Knowledge & Retrieval System',
    description:
      'Engineering work on a technical knowledge system combining document ingestion, structured data, advanced retrieval, source governance and evaluation across complex product information.',
    themes: [
      'technical document retrieval',
      'relational + vector search',
      'metadata isolation',
      'tables and diagrams',
      'OCR',
      'provenance',
      'retrieval evaluation',
      'production release discipline',
    ],
    href: '/work/industrial-knowledge-system',
    cta: 'Read Case Study',
    problem:
      'Technical teams needed reliable answers from complex product documentation, but retrieval was inconsistent and ungrounded.',
    constraints:
      'Diverse document formats including tables, diagrams and structured data. Required provenance and citation for every answer.',
    system:
      'A hybrid retrieval architecture combining relational and vector search, with metadata isolation, OCR for scanned documents, and explicit source governance.',
    method:
      'Treat retrieval quality and source governance as first-class architectural concerns. Build evaluation before expanding surface area.',
    decision:
      'Make retrieval and grounding explicit boundaries rather than emergent prompt behavior. Enforce provenance at the system level.',
    result:
      'Established a retrieval architecture where source governance, evaluation and production discipline are first-class concerns.',
  },
  {
    id: 'private-hybrid-architecture',
    category: 'PRIVATE · HYBRID AI',
    title: 'Private / Hybrid Intelligence Architecture',
    description:
      'Architecture exploring local inference, persistent context, controlled data boundaries and cloud-model integration for privacy-sensitive workflows.',
    themes: [
      'local models',
      'private data',
      'cloud fallback',
      'model abstraction',
      'memory architecture',
      'access boundaries',
    ],
    href: '/work#private-hybrid-architecture',
    cta: 'View Summary',
    problem:
      'Privacy-sensitive workflows needed AI capabilities without exposing internal data to external model providers.',
    constraints:
      'Required local inference for sensitive content while preserving access to higher-capability cloud models for non-sensitive tasks.',
    system:
      'A hybrid architecture with local inference, cloud fallback, model abstraction layer, persistent memory and explicit access boundaries.',
    method:
      'Abstract model interaction behind a routing and fallback layer. Keep application behavior and governance provider-independent.',
    decision:
      'Preserve provider flexibility by making routing and data classification first-class architectural concerns.',
    result:
      'Explored architecture patterns that preserve flexibility across model providers while keeping data boundaries explicit and governed.',
  },
  {
    id: 'transaction-integration-reliability',
    category: 'SYSTEMS · INTEGRATION · RELIABILITY',
    title: 'Transaction & Integration Reliability',
    description:
      'Production integration work where payment state, validation, synchronization and execution required deterministic behavior, observable failures and controlled recovery.',
    themes: [
      'API integration',
      'transaction state',
      'validation',
      'idempotency',
      'synchronization',
      'production debugging',
    ],
    href: '/work#transaction-integration-reliability',
    cta: 'View Summary',
    problem:
      'Payment and transaction integrations were failing silently or producing inconsistent state across systems.',
    constraints:
      'Required deterministic behavior, idempotent operations, observable failure modes and controlled recovery without data loss.',
    system:
      'A transaction integration layer with state validation, idempotency guarantees, synchronization controls and observable error handling.',
    method:
      'Isolate the failure boundary. Implement the smallest defensible fix. Add idempotency and observability before expanding scope.',
    decision:
      'Make transaction state and failure observability explicit system boundaries rather than emergent behavior.',
    result:
      'Stabilized transaction integration with deterministic behavior, observable failures and controlled recovery procedures.',
  },
];

// ─── Capabilities ────────────────────────────────────────────────
export const capabilities = [
  {
    title: 'AI & Reasoning',
    items: ['LLM APIs', 'Structured outputs', 'Agents', 'Model routing', 'Local models', 'Context and memory'],
  },
  {
    title: 'Data & Knowledge',
    items: ['PostgreSQL / SQL', 'Vector retrieval', 'Embeddings', 'Document ingestion', 'Metadata', 'Hybrid retrieval', 'OCR', 'Provenance'],
  },
  {
    title: 'Systems & Integration',
    items: ['Python', 'JavaScript / TypeScript', 'REST APIs', 'Webhooks', 'OAuth', 'CRM', 'Google Workspace', 'Commerce platforms'],
  },
  {
    title: 'Reliability',
    items: ['Evaluation', 'Regression testing', 'Logging', 'Retries', 'Error handling', 'Monitoring', 'Version control', 'Release gates', 'Documentation'],
  },
];

// ─── Final CTA ───────────────────────────────────────────────────
export const finalCta = {
  eyebrow: 'START A CONVERSATION',
  headline: 'Have a business process or system that should work differently?',
  copy: 'Bring the objective, the process and the constraints. We can determine what should be automated, where AI belongs, what should remain deterministic, and what architecture is required to operate it reliably.',
  primary: { label: 'Start a Conversation', href: '/contact?source=final-cta' },
  secondary: { label: 'View Our Work', href: '/work' },
};

// ─── Firm Page ───────────────────────────────────────────────────
export const firm = {
  whoWeAre: {
    heading: 'Who We Are',
    copy: 'We are a forward-deployed AI systems engineering practice. We work with organizations to design, build, integrate and operationalize AI, data, automation and software systems inside real business environments. Our work spans architecture through implementation, evaluation and production readiness, with particular emphasis on systems where reliability, integration and operational context matter as much as model capability.',
  },
  principles: {
    heading: 'Principles',
    items: [
      { label: 'Direct Accountability', desc: 'Senior technical involvement from problem definition through implementation.' },
      { label: 'Production Orientation', desc: 'Systems are designed around real users, data, workflows, integrations and failure conditions.' },
      { label: 'Engineering Discipline', desc: 'Architecture, testing, evaluation, observability and operational readiness are part of the delivery — not afterthoughts.' },
      { label: 'Business Context', desc: 'Technology decisions are evaluated against the actual operating constraint and desired outcome.' },
    ],
  },
  experience: {
    heading: 'Experience',
    copy: 'Representative categories of hands-on experience.',
    categories: [
      { name: 'Applied AI', desc: 'LLM integration, retrieval-augmented generation, agent systems, structured extraction and evaluation.' },
      { name: 'Data & Knowledge Systems', desc: 'Document ingestion, hybrid retrieval, metadata architecture, provenance and corpus governance.' },
      { name: 'Enterprise Integration', desc: 'CRM, commerce, email, calendar and internal system integration through APIs and workflows.' },
      { name: 'CRM / Operational Systems', desc: 'Sales and operational workflows, relationship intelligence and process automation.' },
      { name: 'Commerce', desc: 'Transaction systems, payment integration, state management and reliability engineering.' },
      { name: 'Production Delivery', desc: 'Cross-functional delivery, stakeholder management, release discipline and operational support.' },
      { name: 'Evaluation & Reliability', desc: 'Regression testing, evaluation frameworks, monitoring, failure observability and release gates.' },
    ],
  },
  engagementModel: {
    heading: 'Engagement Model',
    items: [
      { label: 'Senior-led', desc: 'Architecture and implementation led by experienced practitioners, not handed off to juniors.' },
      { label: 'Architecture through implementation', desc: 'Design and build are treated as one continuous engineering problem.' },
      { label: 'Production-oriented', desc: 'Systems are built for observable, reliable operation — not just demonstration.' },
      { label: 'Iterative delivery', desc: 'Start with the smallest useful version connected to the real environment, then expand.' },
      { label: 'Ongoing optimization', desc: 'Monitoring, evaluation and improvement continue after deployment.' },
    ],
  },
  operatingContexts: {
    heading: 'Where These Systems Apply',
    copy: 'Representative operating contexts.',
    contexts: [
      { name: 'Investment & Capital Operations', desc: 'Decision tracking, relationship intelligence, meeting-to-action workflows and research ingestion.' },
      { name: 'Multi-Business Operations', desc: 'Cross-entity coordination, shared services and consolidated operational intelligence.' },
      { name: 'Commerce & Revenue Operations', desc: 'Transaction reliability, CRM integration, revenue workflows and operational automation.' },
      { name: 'Technical & Industrial Knowledge', desc: 'Complex document retrieval, structured data, provenance and corpus governance.' },
      { name: 'Privacy-Sensitive Workflows', desc: 'Local and hybrid AI architectures with controlled data boundaries and disclosure.' },
    ],
  },
  capability: {
    heading: 'Technical Capability',
    copy: 'The practice operates across the full AI systems stack: model integration, retrieval and data infrastructure, automation and API integration, evaluation and production reliability.',
  },
  principal: {
    heading: 'Principal',
    name: 'Aaron King',
    role: 'AI Systems Architecture & Delivery',
    copy: 'AI systems and delivery professional combining hands-on applied AI engineering with more than 15 years of leadership, operations, implementation and stakeholder delivery. Experience spans applied AI architecture, RAG and retrieval systems, evaluation and governance, complex operational environments, production support and cross-functional delivery.',
  },
};

// ─── Contact Form ────────────────────────────────────────────────
export const contactForm = {
  heading: 'Send a project brief.',
  subheading:
    'Bring the objective, the process and the constraints. A concise description of the business process, current systems and desired outcome is enough to start a qualified architecture conversation.',
  projectTypeOptions: [
    'Architecture & Discovery',
    'Implementation',
    'Systems Rescue',
    'Evaluation',
    'Fractional Architecture',
    'Ongoing Support',
  ],
  timelineOptions: [
    'Immediate',
    '1–2 months',
    '3–6 months',
    'Exploratory',
  ],
  successMessage:
    "Project brief received. We'll review it and respond with the most appropriate next step.",
};
