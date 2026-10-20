const quotes = [
  {
    text: 'Denis automated our entire furniture platform — job cards, quotations, inventory and customer records that used to live in paper books. He understood the business first, then built the system around it.',
    name: 'Osiany',
    role: 'Founder · Funiease Furniture',
    initials: 'O',
  },
  {
    text: 'My eggs and cereals shop ran on notebooks before Denis. Now every sale and every stock count is in the system — I know exactly what the business did today, and it saves me hours every week.',
    name: 'Jane Nanyori',
    role: 'Shop Owner · Nairobi',
    initials: 'JN',
  },
  {
    text: 'He taught our boys — aged 13 to 17 — to code, and he never stopped showing up. He became a mentor they look up to, not just a teacher who left when the lessons ended.',
    name: 'A grateful parent',
    role: 'Maasai youth coding mentorship · Kenya',
    initials: 'AP',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">testimonials</span>
          <h2 className="section-title">What people say about working with me</h2>
        </div>

        <div className="quotes-grid">
          {quotes.map((q) => (
            <figure key={q.role} className="quote-card">
              <span className="qmark" aria-hidden="true">&ldquo;</span>
              <blockquote>{q.text}</blockquote>
              <figcaption className="quote-who">
                <span className="quote-avatar" aria-hidden="true">{q.initials}</span>
                <span>
                  <span className="name">{q.name}</span>
                  <span className="role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
