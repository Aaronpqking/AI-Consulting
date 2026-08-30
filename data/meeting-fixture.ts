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
};
