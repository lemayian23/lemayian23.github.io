export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>education</span>
          <h2 className="section-title">Foundations</h2>
        </div>

        <div className="edu-card">
          <h3>Bachelor of Technology in Information Technology</h3>
          <p className="edu-sub">
            Technical University of Kenya · Nairobi · Expected graduation 2026
          </p>
          <p>
            <strong>Final Year Project:</strong> TUK-ConvoSearch — RAG-based AI Student Support
            Assistant, defended before a panel of academic lecturers.
          </p>
          <ul>
            <li>
              <strong>Relevant coursework:</strong> Artificial Intelligence, Data Structures &amp;
              Algorithms, Machine Learning, NLP, Database Systems, Software Engineering
            </li>
            <li>
              <strong>Python Programming Certificate</strong> — Institute of Advanced Technology, Nairobi
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
