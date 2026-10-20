import { ExperienceItem } from '@/types';

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'ICT Attachment',
    company: 'NACADA — National Campaign Against Alcohol and Drug Abuse',
    location: 'NSSF Building, Nairobi, Kenya',
    period: 'June 2026 – September 2026',
    bullets: [
      'Provide technical support: connect and configure printers, install and troubleshoot drivers, and resolve hardware/software conflicts across departments.',
      'Diagnose and resolve reported network and LAN outages, coordinating with relevant teams to restore service promptly.',
      'Set up video-conferencing for senior officers — running Zoom meeting screens every Monday, Wednesday and Friday.',
      'Review outsourced ERP systems against operational requirements and document findings for internal IT support.',
    ],
    stack: ['ERP Systems', 'Windows', 'Networking', 'Printer Configuration', 'IT Support'],
  },
  {
    id: 2,
    role: 'CRM & Systems Developer',
    company: 'Aquashine Limited',
    location: 'Nairobi, Kenya',
    period: 'March 2026',
    bullets: [
      'Rewrote a legacy 450-file PHP CRM/ERP system into a modern Python/Flask application in a one-month sprint — cutting codebase complexity by 90%.',
      'Architected core business modules: job card management, customer database, inventory control, technician scheduling, financial tracking, and quotation generation with margin analysis.',
      'Introduced role-based access control, audit logging, and a responsive Bootstrap UI; integrated PDFShift for document generation and Africa’s Talking for automated SMS notifications.',
      'Deployed to production on Render (MySQL/TiDB) and maintained it through handover — shipping Excel/CSV export, dynamic dashboards and automated daily status reports for management.',
    ],
    stack: ['Python', 'Flask', 'MySQL', 'TiDB Cloud', 'Bootstrap', 'Render', 'PDFShift', 'Africa’s Talking'],
  },
  {
    id: 4,
    role: 'Freelance Developer',
    company: 'Independent — business systems & automation',
    location: 'Nairobi, Kenya',
    period: 'Ongoing',
    bullets: [
      'Designed and shipped automation systems for small businesses — a furniture e-commerce platform (FurniEase) and a retail shop’s record-keeping system.',
      'Delivered a WiFi billing and hotspot management system for small ISPs, deployed in production.',
    ],
    stack: ['Python', 'PHP', 'JavaScript', 'Kotlin', 'System Design'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>experience</span>
          <h2 className="section-title">Where I&apos;ve worked</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every role dated and verifiable — from freelance business systems to enterprise IT support.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">
                {item.company} · {item.location}
              </p>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              {item.stack && (
                <div className="tech-tags" style={{ marginTop: '0.9rem' }}>
                  {item.stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
