'use client';

export default function ResumeToolbar() {
  return (
    <div className="resume-toolbar no-print">
      <a href="/" className="btn btn-ghost btn-sm">
        ← Back to portfolio
      </a>
      <button onClick={() => window.print()} className="btn btn-primary btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />
        </svg>
        Save as PDF
      </button>
    </div>
  );
}
