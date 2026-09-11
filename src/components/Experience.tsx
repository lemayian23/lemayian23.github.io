import { ExperienceItem } from '@/types';

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'ICT Attachment',
    company: 'NACADA (National Campaign Against Alcohol and Drug Abuse)',
    location: 'NSSF Building, Nairobi, Kenya',
    period: 'June 2026 – September 2026',
    bullets: [
      'Provide technical support: printer setup/troubleshooting and resolving hardware/software conflicts.',
      'Diagnose and resolve reported network outages, coordinating with teams to restore service promptly.',
      "Review the organization's outsourced ERP systems against operational requirements and flag improvements.",
      'Document system review findings and contribute to internal IT support documentation.',
    ],
    stack: ['ERP Systems', 'Windows', 'Networking', 'Printer Configuration', 'IT Support'],
  },
  {
    id: 2,
    role: 'CRM & Systems Developer',
    company: 'Aquashine Limited',
    location: 'Nairobi, Kenya',
    period: 'Jan 2026 – May 2026',
    bullets: [
      'Led an end-to-end rewrite of a legacy 450-file PHP CRM/ERP system into a modern Python Flask application, reducing codebase complexity by 90%.',
      'Architected core modules: job card management, customer database, inventory control, technician scheduling, financial tracking, and margin-based quotation generation.',
      'Added role-based access control, audit logging, and a responsive Bootstrap UI.',
      "Integrated PDFShift for document generation and Africa's Talking for automated SMS notifications.",
      'Maintained the live system on Render (MySQL/TiDB Cloud), sustaining 99.9% uptime, and shipped Excel/CSV export plus dynamic dashboards for management reporting.',
    ],
    stack: ['Python', 'Flask', 'MySQL', 'TiDB Cloud', 'JavaScript', 'Bootstrap', 'Render', 'Git'],
  },
  {
    id: 3,
    role: 'Developer Advocate Intern',
    company: 'Prisma Data Services',
    location: 'Remote',
    period: 'Jun 2024 – Dec 2025',
    bullets: [
      'Created and maintained Prisma examples and technical articles to aid developer onboarding.',
      'Built community relationships through content creator engagement and open-source contribution.',
    ],
  },
  {
    id: 4,
    role: 'Microsoft Learn Student Ambassador',
    company: 'Microsoft',
    location: 'Kenya',
    period: 'Jan 2023 – Dec 2024',
    bullets: [
      'Led a technical writing team and organized hackathons and job-readiness events for computing students.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--secondary-color)' }}>
          Experience
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
          {experience.map((item) => (
            <div
              key={item.id}
              style={{
                borderLeft: '3px solid var(--primary-color)',
                paddingLeft: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ margin: 0 }}>{item.role}</h3>
                <span style={{ opacity: 0.75, fontSize: '0.95rem' }}>{item.period}</span>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontWeight: 600 }}>
                {item.company} &middot; {item.location}
              </p>
              <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
                {item.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>{bullet}</li>
                ))}
              </ul>
              {item.stack && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff',
                        opacity: 0.85,
                      }}
                    >
                      {tech}
                    </span>
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
