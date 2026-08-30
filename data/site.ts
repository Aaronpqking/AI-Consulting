export const site = {
  name: 'Aaron King',
  tagline: 'AI Systems Engineering',
  positioning: 'Built to work beyond the demo.',
  description:
    'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
  email: 'aaronpqking@gmail.com',
  location: 'South Florida · Remote',
  linkedin: 'https://linkedin.com/in/aaronpqking',
  github: 'https://github.com/Aaronpqking',
  footerLine:
    'AI systems engineering, data infrastructure, automation and integration.',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://aaronking.dev',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Demonstrations', href: '/demonstrations' },
  { label: 'Firm', href: '/firm' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  eyebrow: 'AI SYSTEMS ENGINEERING · DATA · AUTOMATION · INTEGRATION',
  headline: 'AI infrastructure for complex business operations.',
  subheadline:
    'We architect and build the AI, data, automation and integration infrastructure that connects business information to reliable, governed action.',
  supporting: 'Built to work beyond the demo.',
  primaryCta: { label: 'Discuss a System', href: '/contact' },
  secondaryCta: { label: 'View Our Work', href: '/work' },
};

export const firmPositioning = {
  eyebrow: 'FROM BUSINESS PROCESS TO WORKING SYSTEM',
  heading: 'Intelligence is useful when it changes how the business operates.',
  copy: 'Organizations increasingly have AI tools, data, SaaS platforms and automation available to them. The harder problem is connecting those capabilities into coherent operating infrastructure.',
  copy2:
    'We translate business objectives and processes into systems that ingest information, structure it, apply deterministic and model-based reasoning where appropriate, route judgment to people, execute against systems of record, and remain observable after deployment.',
  supporting: 'Architecture and implementation are treated as one continuous engineering problem.',
};

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
    cta: 'View Case Study',
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
    cta: 'View Architecture',
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
    cta: 'View Case Study',
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

export const methodology = {
  eyebrow: 'HOW WE WORK',
  heading: 'From objective to operating system.',
  closing:
    'Architecture and implementation are treated as one continuous engineering problem.',
  stages: [
    { num: '01', name: 'Understand', desc: 'Define the business objective, operating process, constraints and judgment requirements.' },
    { num: '02', name: 'Map', desc: 'Identify information sources, systems of record, actors, decisions, integrations and failure boundaries.' },
    { num: '03', name: 'Architect', desc: 'Define deterministic logic, AI reasoning, data flows, approval boundaries, security and system ownership.' },
    { num: '04', name: 'Build', desc: 'Implement the smallest useful version and connect it to the real operating environment.' },
    { num: '05', name: 'Evaluate', desc: 'Measure system behavior, observe failures, test assumptions and verify outputs against explicit criteria.' },
    { num: '06', name: 'Operationalize', desc: 'Add monitoring, retries, documentation, release controls, ownership and continuous improvement.' },
  ],
};

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

export const finalCta = {
  eyebrow: 'START A CONVERSATION',
  headline: 'Have a business process that should work differently?',
  copy: 'Bring the objective, the process and the constraints. We can determine what should be automated, where AI belongs, what should remain deterministic, and what architecture is required to operate it reliably.',
  primary: { label: 'Discuss a System', href: '/contact' },
  secondary: { label: 'Send a Project Brief', href: '/contact' },
};

export const firm = {
  whoWeAre: {
    heading: 'Who We Are',
    copy: 'We are an AI systems engineering and technology consulting practice. The work spans architecture, implementation, evaluation and operational readiness for organizations building AI capabilities into real business systems.',
  },
  whatWeBelieve: {
    heading: 'What We Believe',
    items: [
      'AI should reason where reasoning adds value. Deterministic systems should execute where correctness is required.',
      'Architecture and implementation are one continuous engineering problem.',
      'Reliability, evaluation and operational readiness are first-class concerns—not afterthoughts.',
      'Human judgment can remain explicitly inside the system where ambiguity, authority or risk requires it.',
      'Systems should be observable, testable and improvable after deployment.',
    ],
  },
  howWeWork: {
    heading: 'How We Work',
    items: [
      'Start with the business objective, not the technology.',
      'Map the full system before architecting any part of it.',
      'Build the smallest useful version connected to the real environment.',
      'Evaluate against explicit criteria before expanding scope.',
      'Operationalize with monitoring, documentation and ownership.',
    ],
  },
  leadership: {
    heading: 'Leadership',
    name: 'Aaron King',
    role: 'AI Systems Architect & Delivery Consultant',
    copy: 'AI systems and delivery professional combining hands-on applied AI engineering with more than 15 years of leadership, operations, implementation and stakeholder delivery. Experience spans applied AI architecture, RAG and retrieval systems, evaluation and governance, complex operational environments, production support and cross-functional delivery.',
  },
  capability: {
    heading: 'Technical Capability',
    copy: 'The practice operates across the full AI systems stack: model integration, retrieval and data infrastructure, automation and API integration, evaluation and production reliability. See the capabilities section for the full technical surface area.',
  },
};

export const contactForm = {
  heading: 'Tell us about the system.',
  subheading:
    'You do not need to know the solution. A concise description of the business process, current systems and desired outcome is enough to start.',
  buildingOptions: [
    'AI operating system / workflow',
    'RAG / knowledge system',
    'AI agent',
    'Automation / integration',
    'AI feature inside an existing product',
    'Evaluation / QA system',
    'Model integration',
    'Private / hybrid AI architecture',
    'Other',
  ],
  happeningOptions: [
    'Need architecture',
    'Need implementation',
    'System stalled',
    'Integration failure',
    'Poor retrieval quality',
    'Inconsistent outputs',
    'No evaluation framework',
    'Production-readiness concerns',
    'Need ongoing systems support',
    'Other',
  ],
  stageOptions: [
    'Idea / discovery',
    'Prototype',
    'Internal beta',
    'Pre-production',
    'Production',
    'Production with active problems',
  ],
  budgetOptions: [
    'Under $1,000',
    '$1,000–$2,500',
    '$2,500–$5,000',
    '$5,000–$10,000',
    '$10,000+',
    'Not sure yet',
  ],
  engagementOptions: [
    'Architecture & Discovery',
    'Implementation',
    'Systems Rescue',
    'Evaluation & Readiness',
    'Fractional Architecture',
    'Not sure',
  ],
  successMessage:
    "Received. We'll review the project brief and respond with the most appropriate next step.",
};
