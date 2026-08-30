export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Architectural flow: horizontal layers with connecting lines */}
        <defs>
          <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200 65% 38%)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(200 65% 38%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background grid - very subtle */}
        <g opacity="0.04">
          {Array.from({ length: 13 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="520"
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 50}
              x2="600"
              y2={i * 50}
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Layer 1: Information sources */}
        <g>
          <rect x="30" y="40" width="540" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
          <text x="50" y="65" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace" letterSpacing="2">INFORMATION</text>
          <text x="50" y="85" fill="white" fillOpacity="0.6" fontSize="13" fontFamily="serif">Meetings · Email · Documents · CRM · Commerce</text>
        </g>

        {/* Connector */}
        <line x1="300" y1="100" x2="300" y2="130" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="300" cy="130" r="3" fill="hsl(200 65% 58%)" />

        {/* Layer 2: Intelligence */}
        <g>
          <rect x="30" y="140" width="540" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
          <text x="50" y="165" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace" letterSpacing="2">INTELLIGENCE</text>
          <text x="50" y="185" fill="white" fillOpacity="0.6" fontSize="13" fontFamily="serif">Normalize · Retrieve · Classify · Reason</text>
        </g>

        {/* Connector */}
        <line x1="300" y1="200" x2="300" y2="230" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="300" cy="230" r="3" fill="hsl(200 65% 58%)" />

        {/* Layer 3: Decision */}
        <g>
          <rect x="30" y="240" width="540" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
          <text x="50" y="265" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace" letterSpacing="2">DECISION</text>
          <text x="50" y="285" fill="white" fillOpacity="0.6" fontSize="13" fontFamily="serif">Recommendations · Tasks · Exceptions · Commitments</text>
        </g>

        {/* Connector */}
        <line x1="300" y1="300" x2="300" y2="330" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="300" cy="330" r="3" fill="hsl(200 65% 58%)" />

        {/* Layer 4: Governance */}
        <g>
          <rect x="30" y="340" width="540" height="60" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.08" stroke="hsl(200 65% 48%)" strokeOpacity="0.35" strokeWidth="1" />
          <text x="50" y="365" fill="hsl(200 65% 68%)" fontSize="10" fontFamily="monospace" letterSpacing="2">GOVERNANCE</text>
          <text x="50" y="385" fill="white" fillOpacity="0.7" fontSize="13" fontFamily="serif">Rules · Confidence · Permissions · Human Review</text>
        </g>

        {/* Connector */}
        <line x1="300" y1="400" x2="300" y2="430" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="300" cy="430" r="3" fill="hsl(200 65% 58%)" />

        {/* Layer 5: Action */}
        <g>
          <rect x="30" y="440" width="540" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
          <text x="50" y="465" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace" letterSpacing="2">ACTION</text>
          <text x="50" y="485" fill="white" fillOpacity="0.6" fontSize="13" fontFamily="serif">CRM · Email · Calendar · Tasks · Workflows</text>
        </g>
      </svg>
    </div>
  );
}
