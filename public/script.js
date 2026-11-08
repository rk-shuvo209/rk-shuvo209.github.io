/* ===== EXPERIENCE DATA ===== */
const EXP = [
  {
    badge: 'Current Position',
    role: 'Senior SEO Specialist',
    co: 'Sales Ninja Training, Uttara, Dhaka &bull; March 2024 to Present',
    items: [
      'Engineered a full technical SEO overhaul covering Core Web Vitals, mobile UX, crawl budget allocation, and structured data implementation, resolving 200+ technical errors and growing organic traffic by 40% within 9 months.',
      'Improved CTR by 30% across 150+ high-impression pages by auditing search intent gaps using GSC data and rewriting all underperforming title tags and meta descriptions with intent-matched copy.',
      'Built a cross-department reporting pipeline connecting GA4, Google Search Console, and SEMrush into a real-time dashboard, cutting reporting lag from 7 days to same-day and improving content publishing efficiency by 25%.',
      'Aligned the quarterly SEO roadmap with product and content sprint cycles, eliminating cross-team bottlenecks and increasing publishing output by 25%.',
      'Co-led SEO team hiring, wrote technical job descriptions, conducted structured interviews, and designed a 3-week onboarding program that improved early contribution quality.'
    ]
  },
  {
    badge: 'January 2023 to February 2024',
    role: 'SEO Specialist',
    co: 'DOM-INNO Developments Ltd., Banani, Dhaka',
    items: [
      'Diagnosed on-page gaps across a full real-estate portal, executed a complete meta tag, header structure, and content relevance overhaul, and delivered 40% organic traffic growth in under 6 months.',
      'Restructured the entire content cluster strategy around buyer-intent search queries, improved average target keyword ranking positions by 25%, and reduced keyword cannibalization across the portal.',
      'Launched a niche link acquisition program targeting real-estate directories, local press, and sector publications, growing the backlink portfolio by 50% and domain authority by 20% over 12 months.',
      'Designed a structured monthly KPI dashboard for C-level stakeholders tracking organic traffic, keyword positions, CTR, and backlink growth, enabling data-backed SEO budget allocation.',
      'Embedded SEO review checkpoints into development and content publishing pipelines, reducing post-publishing errors by 60% and cutting rework hours across both teams.'
    ]
  },
  {
    badge: 'March 2021 to December 2022',
    role: 'SEO Specialist',
    co: 'MicroDeft, Banasree, Dhaka',
    items: [
      'Architected and executed full-funnel SEO strategies for three client websites from scratch, covering technical infrastructure, on-page optimization, and off-page link acquisition, averaging 40% organic traffic growth per client within 12 months.',
      'Overhauled keyword research and content architecture across all accounts using Ahrefs and SEMrush, restructuring content clusters around search intent and improving average keyword positions by 15%.',
      'Led a 6-person SEO team across simultaneous client projects, ran weekly performance syncs, established QA protocols for all deliverables, and maintained 100% on-time delivery across 18 months.',
      'Grew brand search visibility by 30% across client accounts through coordinated content and backlink campaigns in competitive verticals including technology services and e-commerce.',
      'Designed semantic and Q and A-based content strategies aligned with AI search patterns and featured snippet targeting, positioning client content for answer-box placements.'
    ]
  },
  {
    badge: 'January 2020 to December 2020',
    role: 'Assistant Network Engineer',
    co: 'Bangladesh Water Development Board, Barisal',
    items: [
      'Configured, troubleshot, and monitored network systems, servers, and CCTV infrastructure to ensure optimal functionality and security across the facility.',
      'Performed swift issue resolution and vigilant system monitoring to maintain seamless operations and minimise downtime.',
      'Built a practical foundation in network architecture and infrastructure that now directly informs my approach to technical SEO, server-side optimisation, and developer collaboration.'
    ]
  }
];

function renderExp(i) {
  const d = EXP[i];
  document.getElementById('expPanel').innerHTML = `
    <div class="exp-card">
      <span class="exp-card-badge">${d.badge}</span>
      <div class="exp-card-role">${d.role}</div>
      <div class="exp-card-co">${d.co}</div>
      <ul class="exp-list-items">
        ${d.items.map(it => `<li>${it}</li>`).join('')}
      </ul>
    </div>
  `;
}
renderExp(0);

document.querySelectorAll('.exp-row').forEach(row => {
  row.addEventListener('click', () => {
    document.querySelectorAll('.exp-row').forEach(r => r.classList.remove('on'));
    row.classList.add('on');
    renderExp(parseInt(row.dataset.i));
  });
});

/* ===== FAQ ===== */
function faqToggle(btn) {
  const body = btn.nextElementSibling;
  const wasOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-btn').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!wasOpen) {
    btn.classList.add('open');
    body.classList.add('open');
  }
}

/* ===== SCROLL REVEAL ===== */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.rr').forEach(el => obs.observe(el));

