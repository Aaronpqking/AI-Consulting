export type Meeting = {
  id: string;
  title: string;
  date: string;
  participants: string[];
  duration: string;
  status: 'processed' | 'review' | 'actioned';
  summary: string;
  keyTopics: string[];
  actionItems: {
    id: string;
    task: string;
    owner: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'approved' | 'rejected';
    source: string;
    confidence: number;
  }[];
  decisions: {
    id: string;
    decision: string;
    context: string;
    decidedBy: string;
    confidence: number;
  }[];
  commitments: {
    id: string;
    commitment: string;
    party: string;
    deadline: string;
    confidence: number;
  }[];
  questions: {
    id: string;
    question: string;
    context: string;
    addressed: boolean;
  }[];
  risks: {
    id: string;
    risk: string;
    severity: 'high' | 'medium' | 'low';
    notedBy: string;
  }[];
  transcriptExcerpts: {
    id: string;
    speaker: string;
    text: string;
    linkedItemId: string;
    timestamp: string;
  }[];
  people: {
    id: string;
    name: string;
    role: string;
    company?: string;
    mentionedInTranscript: boolean;
  }[];
  companies: {
    id: string;
    name: string;
    type: 'Client' | 'Partner' | 'Prospect' | 'Vendor' | 'Competitor';
    context: string;
  }[];
  entityResolution: {
    id: string;
    transcriptMention: string;
    resolvedName?: string;
    resolvedRole?: string;
    resolvedCompany?: string;
    confidence: number;
    status: 'auto-resolved' | 'human-review-required' | 'unresolved';
    transcriptExcerpt: string;
    candidates?: {
      name: string;
      role: string;
      company: string;
      crmId: string;
      matchScore: number;
    }[];
  }[];
  crmProposals: {
    id: string;
    type: 'contact-update' | 'opportunity-update' | 'relationship-note' | 'new-contact' | 'account-update';
    company: string;
    contact: string;
    description: string;
    sourceEvidence: string;
    confidence: number;
    status: 'pending' | 'approved' | 'rejected' | 'needs-review';
  }[];
  proposedTasks: {
    id: string;
    task: string;
    owner: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'approved' | 'rejected';
    source: string;
    confidence: number;
  }[];
  followUpDraft: {
    recipient: string;
    subject: string;
    body: string;
    sourceCommitments: string[];
    status: 'pending' | 'sent' | 'draft';
  };
  knowledgeUpdates: {
    id: string;
    type: 'decision-record' | 'commitment-record' | 'relationship-note' | 'meeting-summary' | 'opportunity-insight';
    description: string;
    sourceEvidence: string;
    status: 'pending' | 'approved' | 'rejected';
  }[];
  executiveJudgment: {
    id: string;
    item: string;
    context: string;
    requiredAction: string;
    status: 'pending' | 'approved' | 'rejected' | 'escalated';
  }[];
};

export const meetingFixture: Meeting = {
  id: 'meeting-001',
  title: 'Q3 Product Strategy Review',
  date: '2026-08-28',
  participants: ['Sarah Chen (VP Product)', 'Marcus Johnson (Engineering)', 'Priya Patel (Design)', 'David Kim (Sales)'],
  duration: '47 min',
  status: 'review',
  summary:
    'Quarterly product strategy review covering Q2 performance, Q3 roadmap priorities, resource allocation across three product lines, and a go/no-go decision on the analytics dashboard feature. The team aligned on deferring the marketplace integration to Q4 and prioritizing the analytics dashboard for September release.',
  keyTopics: [
    'Q2 performance review',
    'Q3 roadmap prioritization',
    'Analytics dashboard go/no-go',
    'Marketplace integration deferral',
    'Resource allocation',
    'Hiring plan for Q3',
  ],
  actionItems: [
    {
      id: 'a1',
      task: 'Prepare technical spec for analytics dashboard API endpoints',
      owner: 'Marcus Johnson',
      dueDate: '2026-09-05',
      priority: 'high',
      status: 'pending',
      source: 'Marcus Johnson at 14:32',
      confidence: 0.95,
    },
    {
      id: 'a2',
      task: 'Create wireframes for dashboard onboarding flow',
      owner: 'Priya Patel',
      dueDate: '2026-09-08',
      priority: 'high',
      status: 'pending',
      source: 'Sarah Chen at 15:02',
      confidence: 0.91,
    },
    {
      id: 'a3',
      task: 'Pull Q2 customer retention metrics broken down by segment',
      owner: 'David Kim',
      dueDate: '2026-09-03',
      priority: 'medium',
      status: 'pending',
      source: 'David Kim at 14:18',
      confidence: 0.88,
    },
    {
      id: 'a4',
      task: 'Draft marketplace integration scope document for Q4 planning',
      owner: 'Sarah Chen',
      dueDate: '2026-09-15',
      priority: 'low',
      status: 'pending',
      source: 'Sarah Chen at 15:22',
      confidence: 0.84,
    },
    {
      id: 'a5',
      task: 'Review engineering hiring pipeline and identify two senior candidates',
      owner: 'Marcus Johnson',
      dueDate: '2026-09-10',
      priority: 'medium',
      status: 'pending',
      source: 'Marcus Johnson at 15:35',
      confidence: 0.79,
    },
  ],
  decisions: [
    {
      id: 'd1',
      decision: 'Analytics dashboard is approved for September release',
      context: 'Sarah Chen confirmed the analytics dashboard is the top Q3 priority after reviewing Q2 engagement data showing 40% of enterprise clients requesting it.',
      decidedBy: 'Sarah Chen',
      confidence: 0.97,
    },
    {
      id: 'd2',
      decision: 'Marketplace integration deferred to Q4',
      context: 'Team agreed that deferring marketplace work allows focus on the dashboard without overextending engineering capacity.',
      decidedBy: 'Sarah Chen (with team consensus)',
      confidence: 0.93,
    },
    {
      id: 'd3',
      decision: 'Engineering will hire two senior engineers in Q3',
      context: 'Marcus Johnson identified capacity gap. Sarah Chen approved the headcount.',
      decidedBy: 'Sarah Chen',
      confidence: 0.89,
    },
  ],
  commitments: [
    {
      id: 'c1',
      commitment: 'Engineering will deliver API spec by September 5th',
      party: 'Marcus Johnson',
      deadline: '2026-09-05',
      confidence: 0.95,
    },
    {
      id: 'c2',
      commitment: 'Design will have wireframes ready by September 8th',
      party: 'Priya Patel',
      deadline: '2026-09-08',
      confidence: 0.91,
    },
    {
      id: 'c3',
      commitment: 'Sales will provide retention metrics by September 3rd',
      party: 'David Kim',
      deadline: '2026-09-03',
      confidence: 0.88,
    },
  ],
  questions: [
    {
      id: 'q1',
      question: 'Should the analytics dashboard support custom report scheduling?',
      context: 'David Kim raised this based on enterprise client feedback. No decision was made in this meeting.',
      addressed: false,
    },
    {
      id: 'q2',
      question: 'What is the budget for the two new senior engineering hires?',
      context: 'Marcus Johnson asked about compensation range. Sarah Chen indicated HR would provide details separately.',
      addressed: false,
    },
  ],
  risks: [
    {
      id: 'r1',
      risk: 'API spec deadline (Sep 5) may slip if current sprint work overruns',
      severity: 'medium',
      notedBy: 'Marcus Johnson',
    },
    {
      id: 'r2',
      risk: 'Analytics dashboard scope may expand if custom scheduling is included',
      severity: 'high',
      notedBy: 'Priya Patel',
    },
  ],
  transcriptExcerpts: [
    {
      id: 't1',
      speaker: 'Sarah Chen',
      text: 'Okay so the analytics dashboard is our top priority for Q3. Marcus, I need the API spec by end of next week so design can start on schedule.',
      linkedItemId: 'a1',
      timestamp: '14:32',
    },
    {
      id: 't2',
      speaker: 'Sarah Chen',
      text: 'We are going to defer marketplace integration to Q4. We just do not have the engineering capacity to do both well.',
      linkedItemId: 'd2',
      timestamp: '15:22',
    },
    {
      id: 't3',
      speaker: 'David Kim',
      text: 'Enterprise clients keep asking about custom report scheduling. Should we include that in the dashboard scope?',
      linkedItemId: 'q1',
      timestamp: '14:55',
    },
    {
      id: 't4',
      speaker: 'Marcus Johnson',
      text: 'I can have the API spec ready by September 5th. That gives us two weeks before design needs to start.',
      linkedItemId: 'c1',
      timestamp: '14:34',
    },
  ],
  people: [
    {
      id: 'p1',
      name: 'Sarah Chen',
      role: 'VP Product',
      mentionedInTranscript: true,
    },
    {
      id: 'p2',
      name: 'Marcus Johnson',
      role: 'Engineering Lead',
      mentionedInTranscript: true,
    },
    {
      id: 'p3',
      name: 'Priya Patel',
      role: 'Design Lead',
      mentionedInTranscript: true,
    },
    {
      id: 'p4',
      name: 'David Kim',
      role: 'Sales Lead',
      mentionedInTranscript: true,
    },
    {
      id: 'p5',
      name: 'James Walker',
      role: 'Investment Director',
      company: 'Apex Capital',
      mentionedInTranscript: true,
    },
    {
      id: 'p6',
      name: 'James Wilson',
      role: 'Managing Partner',
      company: 'Stonebridge Partners',
      mentionedInTranscript: false,
    },
    {
      id: 'p7',
      name: 'Elena Rodriguez',
      role: 'CTO',
      company: 'Northwind Logistics',
      mentionedInTranscript: true,
    },
    {
      id: 'p8',
      name: 'Tom Bradley',
      role: 'VP Operations',
      company: 'Helix Manufacturing',
      mentionedInTranscript: true,
    },
  ],
  companies: [
    {
      id: 'co1',
      name: 'Northwind Logistics',
      type: 'Client',
      context: 'Enterprise client that has been requesting the analytics dashboard. Referenced by David Kim when discussing Q2 retention metrics and custom report scheduling demand.',
    },
    {
      id: 'co2',
      name: 'Helix Manufacturing',
      type: 'Client',
      context: 'Existing enterprise client. Tom Bradley raised concerns about marketplace integration timeline during a separate sync, referenced indirectly in the deferral discussion.',
    },
    {
      id: 'co3',
      name: 'Apex Capital',
      type: 'Partner',
      context: 'Channel partner. James Walker was mentioned in the context of a potential co-selling arrangement for the analytics dashboard.',
    },
    {
      id: 'co4',
      name: 'Stonebridge Partners',
      type: 'Prospect',
      context: 'Prospective client currently evaluating the platform. James Wilson is the primary contact and has expressed interest in the analytics capabilities.',
    },
    {
      id: 'co5',
      name: 'DataForge Inc.',
      type: 'Competitor',
      context: 'Competitor mentioned by David Kim as having recently shipped a custom report scheduling feature, creating competitive pressure on the dashboard roadmap.',
    },
  ],
  entityResolution: [
    {
      id: 'er1',
      transcriptMention: 'Sarah Chen',
      resolvedName: 'Sarah Chen',
      resolvedRole: 'VP Product',
      confidence: 0.96,
      status: 'auto-resolved',
      transcriptExcerpt:
        'Sarah Chen: "Okay so the analytics dashboard is our top priority for Q3. Marcus, I need the API spec by end of next week so design can start on schedule."',
    },
    {
      id: 'er2',
      transcriptMention: 'James',
      confidence: 0.54,
      status: 'human-review-required',
      transcriptExcerpt:
        'David Kim: "James from Apex mentioned they would be interested in co-selling the dashboard once it ships, but he also said someone from Stonebridge reached out about the same thing."',
      candidates: [
        {
          name: 'James Walker',
          role: 'Investment Director',
          company: 'Apex Capital',
          crmId: 'crm-contact-4421',
          matchScore: 0.58,
        },
        {
          name: 'James Wilson',
          role: 'Managing Partner',
          company: 'Stonebridge Partners',
          crmId: 'crm-contact-7783',
          matchScore: 0.51,
        },
      ],
    },
    {
      id: 'er3',
      transcriptMention: 'Elena',
      resolvedName: 'Elena Rodriguez',
      resolvedRole: 'CTO',
      resolvedCompany: 'Northwind Logistics',
      confidence: 0.89,
      status: 'auto-resolved',
      transcriptExcerpt:
        'David Kim: "Elena at Northwind said the dashboard would be a game-changer for their ops team. She asked if we could prioritize their onboarding."',
    },
  ],
  crmProposals: [
    {
      id: 'cp1',
      type: 'opportunity-update',
      company: 'Northwind Logistics',
      contact: 'Elena Rodriguez',
      description:
        'Update existing analytics dashboard opportunity to reflect confirmed September release timeline. Increase opportunity probability from 60% to 80% based on explicit interest confirmed during meeting.',
      sourceEvidence: 'David Kim at 14:18 — "Elena at Northwind said the dashboard would be a game-changer for their ops team."',
      confidence: 0.86,
      status: 'pending',
    },
    {
      id: 'cp2',
      type: 'relationship-note',
      company: 'Apex Capital',
      contact: 'James Walker',
      description:
        'Add relationship note: James Walker expressed interest in co-selling the analytics dashboard once shipped. Flag for partnership team follow-up before September release.',
      sourceEvidence: 'David Kim at 14:41 — "James from Apex mentioned they would be interested in co-selling the dashboard once it ships."',
      confidence: 0.72,
      status: 'pending',
    },
    {
      id: 'cp3',
      type: 'contact-update',
      company: 'Stonebridge Partners',
      contact: 'James Wilson',
      description:
        'Update contact record: James Wilson is evaluating the platform and has expressed interest in analytics capabilities. Add to Q3 outreach campaign for analytics dashboard launch.',
      sourceEvidence: 'David Kim at 14:41 — "Someone from Stonebridge reached out about the same thing."',
      confidence: 0.61,
      status: 'needs-review',
    },
    {
      id: 'cp4',
      type: 'opportunity-update',
      company: 'Helix Manufacturing',
      contact: 'Tom Bradley',
      description:
        'Add note to Helix Manufacturing opportunity: marketplace integration deferred to Q4. Update expected close date and communicate revised timeline to Tom Bradley.',
      sourceEvidence: 'Sarah Chen at 15:22 — "We are going to defer marketplace integration to Q4."',
      confidence: 0.83,
      status: 'pending',
    },
    {
      id: 'cp5',
      type: 'relationship-note',
      company: 'DataForge Inc.',
      contact: 'N/A',
      description:
        'Log competitive intelligence: DataForge has shipped custom report scheduling feature. This creates competitive pressure on our analytics dashboard roadmap and should inform scope decisions for Q3.',
      sourceEvidence: 'David Kim at 14:50 — "DataForge just shipped custom report scheduling last week, so there is competitive pressure here."',
      confidence: 0.78,
      status: 'pending',
    },
  ],
  proposedTasks: [
    {
      id: 'pt1',
      task: 'Schedule a competitive analysis review of DataForge custom report scheduling feature',
      owner: 'David Kim',
      dueDate: '2026-09-06',
      priority: 'medium',
      status: 'pending',
      source: 'David Kim at 14:50',
      confidence: 0.82,
    },
    {
      id: 'pt2',
      task: 'Reach out to Elena Rodriguez at Northwind Logistics to confirm onboarding priority for analytics dashboard',
      owner: 'David Kim',
      dueDate: '2026-09-04',
      priority: 'high',
      status: 'pending',
      source: 'David Kim at 14:18',
      confidence: 0.87,
    },
    {
      id: 'pt3',
      task: 'Coordinate with partnership team on Apex Capital co-selling discussion for analytics dashboard',
      owner: 'Sarah Chen',
      dueDate: '2026-09-12',
      priority: 'medium',
      status: 'pending',
      source: 'David Kim at 14:41',
      confidence: 0.74,
    },
    {
      id: 'pt4',
      task: 'Draft a revised Q4 marketplace integration timeline communication for Helix Manufacturing',
      owner: 'David Kim',
      dueDate: '2026-09-10',
      priority: 'medium',
      status: 'pending',
      source: 'Sarah Chen at 15:22',
      confidence: 0.80,
    },
    {
      id: 'pt5',
      task: 'Set up a scope review meeting with Priya and Marcus to lock down analytics dashboard MVP boundaries before wireframes begin',
      owner: 'Sarah Chen',
      dueDate: '2026-09-04',
      priority: 'high',
      status: 'pending',
      source: 'Priya Patel at 14:58',
      confidence: 0.85,
    },
  ],
  followUpDraft: {
    recipient: 'Marcus Johnson',
    subject: 'Action Items from Q3 Product Strategy Review (Aug 28)',
    body: `Hi Marcus,

Thanks for the thorough input in today's Q3 Product Strategy Review. I want to confirm the commitments coming out of our discussion so we can stay on track for the September dashboard release.

As discussed, engineering will deliver the API spec for the analytics dashboard by September 5th. This gives Priya's design team the runway they need to start wireframes on September 8th. If there is any risk to that date, please flag it early so we can adjust the downstream schedule.

On the hiring front, please review the engineering pipeline and identify two senior candidates by September 10th. HR will follow up separately with compensation range details for the budget question you raised.

Lastly, I have asked David to pull the Q2 retention metrics by September 3rd so we have the segment breakdown before the dashboard scope review. I will set up a scope lock meeting for early next week with you and Priya.

Thanks,
Sarah`,
    sourceCommitments: ['c1', 'c2', 'c3'],
    status: 'pending',
  },
  knowledgeUpdates: [
    {
      id: 'ku1',
      type: 'decision-record',
      description:
        'Recorded decision: Analytics dashboard approved as top Q3 priority with September release target. Basis: Q2 engagement data showed 40% of enterprise clients requesting the feature.',
      sourceEvidence: 'Decision d1 — Sarah Chen at 14:32; supported by David Kim retention data discussion at 14:18.',
      status: 'pending',
    },
    {
      id: 'ku2',
      type: 'decision-record',
      description:
        'Recorded decision: Marketplace integration deferred to Q4 due to engineering capacity constraints. No simultaneous delivery with analytics dashboard feasible.',
      sourceEvidence: 'Decision d2 — Sarah Chen at 15:22 with team consensus.',
      status: 'pending',
    },
    {
      id: 'ku3',
      type: 'commitment-record',
      description:
        'Commitment logged: Engineering to deliver analytics dashboard API spec by September 5th, enabling design work to begin September 8th.',
      sourceEvidence: 'Commitment c1 — Marcus Johnson at 14:34.',
      status: 'pending',
    },
    {
      id: 'ku4',
      type: 'relationship-note',
      description:
        'Northwind Logistics (Elena Rodriguez, CTO) is a high-priority candidate for early analytics dashboard onboarding. Explicit interest confirmed via David Kim.',
      sourceEvidence: 'David Kim at 14:18 — "Elena at Northwind said the dashboard would be a game-changer for their ops team."',
      status: 'pending',
    },
    {
      id: 'ku5',
      type: 'meeting-summary',
      description:
        'Q3 Product Strategy Review held August 28, 2026. Participants: Sarah Chen, Marcus Johnson, Priya Patel, David Kim. Key outcomes: dashboard approved for September, marketplace deferred to Q4, two senior engineering hires approved, scope review pending on custom report scheduling.',
      sourceEvidence: 'Full meeting transcript and decisions d1-d3, commitments c1-c3.',
      status: 'pending',
    },
    {
      id: 'ku6',
      type: 'opportunity-insight',
      description:
        'Competitive pressure identified: DataForge Inc. has shipped custom report scheduling, a feature enterprise clients are requesting. This may impact win rates on analytics dashboard deals if not addressed in the roadmap.',
      sourceEvidence: 'David Kim at 14:50 — "DataForge just shipped custom report scheduling last week."',
      status: 'pending',
    },
  ],
  executiveJudgment: [
    {
      id: 'ej1',
      item: 'Custom report scheduling scope decision deferred',
      context:
        'David Kim raised that 40% of enterprise clients want custom report scheduling, and DataForge has already shipped it. The team deferred the decision, but Priya flagged that including it could expand scope and threaten the September release. This is a strategic trade-off between competitiveness and delivery commitment.',
      requiredAction:
        'Executive decision needed: include custom report scheduling in the September dashboard MVP (accepting schedule risk) or defer to a follow-up release (accepting competitive risk). Recommend Sarah Chen and Marcus Johnson jointly decide before the scope lock meeting on September 4th.',
      status: 'pending',
    },
    {
      id: 'ej2',
      item: 'Unresolved entity: "James" mention requires human disambiguation',
      context:
        'The transcript references "James" in the context of both Apex Capital (James Walker) and Stonebridge Partners (James Wilson). The system cannot auto-resolve which James was intended, and the CRM proposals for both contacts depend on the correct identification.',
      requiredAction:
        'Human review required: confirm with David Kim which James was referenced in the co-selling discussion before approving CRM proposals cp2 and cp3. Do not auto-apply either update until resolved.',
      status: 'pending',
    },
    {
      id: 'ej3',
      item: 'Engineering hiring budget not yet confirmed',
      context:
        'Sarah Chen approved two senior engineering hires, but the budget was not discussed in the meeting. Marcus Johnson raised this as an open question. Without a confirmed budget, the hiring pipeline action item (a5) cannot fully proceed.',
      requiredAction:
        'Escalate to HR and Finance for compensation range approval. Sarah Chen should confirm the budget envelope before Marcus Johnson begins candidate identification to avoid misaligned offers.',
      status: 'escalated',
    },
  ],
};
