"""
Diagramas SVG para as questões que dependem de figuras espaço-tempo.
"""

SVG_POSCOMP_2005_Q69 = '''<div class="diagram-wrapper">
  <div class="diagram-caption"><strong>Figura 2 — Diagrama Espaço-Tempo (Relógios Lógicos de Lamport)</strong></div>
  <svg viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
      </marker>
    </defs>
    <!-- Background grid/box -->
    <rect width="100%" height="100%" fill="#f8fafc" rx="8" stroke="#e2e8f0" stroke-width="1.5" />
    
    <!-- Process Timelines -->
    <!-- P0 -->
    <text x="35" y="55" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P0</text>
    <line x1="70" y1="50" x2="740" y2="50" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,50 735,45 735,55" fill="#64748b" />
    
    <!-- P1 -->
    <text x="35" y="125" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P1</text>
    <line x1="70" y1="120" x2="740" y2="120" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,120 735,115 735,125" fill="#64748b" />

    <!-- P2 -->
    <text x="35" y="195" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P2</text>
    <line x1="70" y1="190" x2="740" y2="190" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,190 735,185 735,195" fill="#64748b" />

    <!-- P0 events (d=10): 10, 20, 30, 40, 50, 60 -->
    <circle cx="110" cy="50" r="4.5" fill="#0f172a" /><text x="110" y="38" font-size="11" text-anchor="middle" fill="#475569">10</text>
    <circle cx="160" cy="50" r="4.5" fill="#0f172a" /><text x="160" y="38" font-size="11" text-anchor="middle" fill="#475569">20</text>
    <circle cx="210" cy="50" r="4.5" fill="#0f172a" /><text x="210" y="38" font-size="11" text-anchor="middle" fill="#475569">30</text>
    <circle cx="260" cy="50" r="4.5" fill="#0f172a" /><text x="260" y="38" font-size="11" text-anchor="middle" fill="#475569">40</text>
    <circle cx="310" cy="50" r="4.5" fill="#0f172a" /><text x="310" y="38" font-size="11" text-anchor="middle" fill="#475569">50</text>
    <circle cx="360" cy="50" r="5" fill="#2563eb" /><text x="360" y="38" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">60 (envio)</text>

    <!-- Message from P0(60) to P1(67) -->
    <line x1="360" y1="50" x2="415" y2="116" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)" />

    <!-- P1 events (d=7): 14, 21, 28, 35, 42 | msg recvd -> 67, 74, 81, 88 -->
    <circle cx="130" cy="120" r="4.5" fill="#0f172a" /><text x="130" y="108" font-size="11" text-anchor="middle" fill="#64748b">14</text>
    <circle cx="175" cy="120" r="4.5" fill="#0f172a" /><text x="175" y="108" font-size="11" text-anchor="middle" fill="#64748b">21</text>
    <circle cx="220" cy="120" r="4.5" fill="#0f172a" /><text x="220" y="108" font-size="11" text-anchor="middle" fill="#64748b">28</text>
    <circle cx="265" cy="120" r="4.5" fill="#0f172a" /><text x="265" y="108" font-size="11" text-anchor="middle" fill="#64748b">35</text>
    <circle cx="310" cy="120" r="4.5" fill="#0f172a" /><text x="310" y="108" font-size="11" text-anchor="middle" fill="#64748b">42</text>
    <!-- After msg: 67 -->
    <circle cx="420" cy="120" r="5" fill="#2563eb" /><text x="420" y="108" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">?</text>
    <circle cx="480" cy="120" r="5" fill="#2563eb" /><text x="480" y="108" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">? (envio)</text>
    <circle cx="540" cy="120" r="4.5" fill="#0f172a" /><text x="540" y="108" font-size="11" text-anchor="middle" fill="#64748b">?</text>
    <circle cx="600" cy="120" r="4.5" fill="#0f172a" /><text x="600" y="108" font-size="11" text-anchor="middle" fill="#64748b">?</text>

    <!-- Message from P1(?=74) to P2(?=79) -->
    <line x1="480" y1="120" x2="545" y2="186" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)" />

    <!-- P2 events (d=5): 35, 40 | msg recvd -> 79, 84 -->
    <circle cx="240" cy="190" r="4.5" fill="#0f172a" /><text x="240" y="213" font-size="11" text-anchor="middle" fill="#64748b">35</text>
    <circle cx="295" cy="190" r="4.5" fill="#0f172a" /><text x="295" y="213" font-size="11" text-anchor="middle" fill="#64748b">40</text>
    <circle cx="550" cy="190" r="5" fill="#2563eb" /><text x="550" y="213" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">?</text>
    <circle cx="620" cy="190" r="4.5" fill="#0f172a" /><text x="620" y="213" font-size="11" text-anchor="middle" fill="#64748b">?</text>
  </svg>
</div>'''

SVG_POSCOMP_2015_Q62 = '''<div class="diagram-wrapper">
  <div class="diagram-caption"><strong>Diagrama Espaço-Tempo — Ordenação Causal (Relação "Acontece Antes" →)</strong></div>
  <svg viewBox="0 0 780 230" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
    <defs>
      <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
      </marker>
    </defs>
    <rect width="100%" height="100%" fill="#f8fafc" rx="8" stroke="#e2e8f0" stroke-width="1.5" />
    
    <!-- P1 Timeline -->
    <text x="35" y="55" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P1</text>
    <line x1="70" y1="50" x2="740" y2="50" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,50 735,45 735,55" fill="#64748b" />

    <!-- P2 Timeline -->
    <text x="35" y="125" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P2</text>
    <line x1="70" y1="120" x2="740" y2="120" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,120 735,115 735,125" fill="#64748b" />

    <!-- P3 Timeline -->
    <text x="35" y="195" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1e293b">P3</text>
    <line x1="70" y1="190" x2="740" y2="190" stroke="#64748b" stroke-width="2.5" />
    <polygon points="745,190 735,185 735,195" fill="#64748b" />

    <!-- Events on P1: a, b, c, d -->
    <circle cx="160" cy="50" r="5" fill="#0f172a" /><text x="160" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">a</text>
    <circle cx="230" cy="50" r="5" fill="#0f172a" /><text x="230" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">b</text>
    <circle cx="430" cy="50" r="5" fill="#0f172a" /><text x="430" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">c</text>
    <circle cx="560" cy="50" r="5" fill="#0f172a" /><text x="560" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">d</text>

    <!-- Events on P2: e, f, g, h -->
    <circle cx="100" cy="120" r="5" fill="#0f172a" /><text x="100" y="108" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">e</text>
    <circle cx="360" cy="120" r="5" fill="#0f172a" /><text x="360" y="108" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">f</text>
    <circle cx="490" cy="120" r="5" fill="#0f172a" /><text x="490" y="108" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">g</text>
    <circle cx="700" cy="120" r="5" fill="#0f172a" /><text x="700" y="108" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">h</text>

    <!-- Events on P3: i, k, m -->
    <circle cx="120" cy="190" r="5" fill="#0f172a" /><text x="120" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">i</text>
    <circle cx="300" cy="190" r="5" fill="#0f172a" /><text x="300" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">k</text>
    <circle cx="630" cy="190" r="5" fill="#0f172a" /><text x="630" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">m</text>

    <!-- Message Arrows -->
    <!-- b (P1, 230, 50) -> k (P3, 300, 190) -->
    <line x1="230" y1="50" x2="295" y2="184" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)" />

    <!-- k (P3, 300, 190) -> f (P2, 360, 120) -->
    <line x1="300" y1="190" x2="355" y2="126" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)" />

    <!-- f (P2, 360, 120) -> c (P1, 430, 50) -->
    <line x1="360" y1="120" x2="425" y2="56" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)" />

    <!-- g (P2, 490, 120) -> m (P3, 630, 190) -->
    <line x1="490" y1="120" x2="625" y2="186" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)" />

    <!-- d (P1, 560, 50) -> h (P2, 700, 120) -->
    <line x1="560" y1="50" x2="695" y2="116" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)" />
  </svg>
</div>'''
