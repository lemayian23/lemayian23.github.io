'use client';

import { useEffect, useRef, useState } from 'react';

interface AnswerPart {
  t: string;
  hl?: 'hl' | 'hl2';
}

interface Script {
  query: string;
  answer: AnswerPart[];
  citations: string[];
}

const scripts: Script[] = [
  {
    query: 'What has Denis built with RAG?',
    answer: [
      { t: 'A fully local RAG platform — ' },
      { t: 'document ingestion', hl: 'hl' },
      { t: ', ' },
      { t: 'token-aware chunking', hl: 'hl' },
      { t: ', ' },
      { t: '384-dim embeddings', hl: 'hl' },
      { t: ', ' },
      { t: 'FAISS semantic search', hl: 'hl2' },
      { t: ' and cited LLM answers — no cloud, no API keys, running on CPU.' },
    ],
    citations: ['metadata-rag', 'tuk-convosearch · 22★'],
  },
  {
    query: 'Can he ship full-stack products?',
    answer: [
      { t: 'Yes — ' },
      { t: 'FastAPI', hl: 'hl' },
      { t: ' backends with ' },
      { t: 'React admin panels', hl: 'hl' },
      { t: ', JWT auth, streaming chat over SSE, SQLite WAL persistence — plus self-hosted tools like a ' },
      { t: 'WiFi billing system', hl: 'hl2' },
      { t: ' in production.' },
    ],
    citations: ['tuk-convosearch', 'lema_wifi', 'mpesa-frontend'],
  },
  {
    query: 'Where can I see the code?',
    answer: [
      { t: 'All public on GitHub — ' },
      { t: '60+ public repos', hl: 'hl' },
      { t: ' across Python, TypeScript, Kotlin, Java and even an ' },
      { t: 'x86_64 hobby OS in C', hl: 'hl2' },
      { t: '. Every flagship links to a real, running repo.' },
    ],
    citations: ['github.com/lemayian23', 'lema-os'],
  },
];

const Q_SPEED = 42;
const A_SPEED = 13;
const HOLD_MS = 4600;
const FADE_MS = 350;

function AnswerText({ parts, count }: { parts: AnswerPart[]; count: number }) {
  let remaining = count;
  return (
    <>
      {parts.map((part, i) => {
        if (remaining <= 0) return null;
        const take = Math.min(part.t.length, remaining);
        remaining -= take;
        return (
          <span key={i} className={part.hl}>
            {part.t.slice(0, take)}
          </span>
        );
      })}
    </>
  );
}

export default function RetrievalDemo() {
  const [idx, setIdx] = useState(0);
  const [qLen, setQLen] = useState(0);
  const [aLen, setALen] = useState(0);
  const [cites, setCites] = useState(false);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const script = scripts[idx];
  const totalAnswerLen = script.answer.reduce((n, p) => n + p.t.length, 0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setQLen(script.query.length);
      setALen(totalAnswerLen);
      setCites(true);
      return;
    }

    if (fading) {
      timer.current = setTimeout(() => {
        setFading(false);
        setIdx((i) => (i + 1) % scripts.length);
        setQLen(0);
        setALen(0);
        setCites(false);
      }, FADE_MS);
    } else if (qLen < script.query.length) {
      timer.current = setTimeout(() => setQLen((n) => n + 1), Q_SPEED);
    } else if (aLen < totalAnswerLen) {
      timer.current = setTimeout(() => setALen((n) => n + 2), A_SPEED);
    } else if (!cites) {
      timer.current = setTimeout(() => setCites(true), 250);
    } else {
      timer.current = setTimeout(() => setFading(true), HOLD_MS);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [idx, qLen, aLen, cites, fading, script, totalAnswerLen]);

  return (
    <div
      className="demo-window"
      style={{ opacity: fading ? 0.15 : 1, transition: `opacity ${FADE_MS}ms ease` }}
      aria-label="Live demo: a retrieval-augmented generation assistant answering questions about Denis"
    >
      <div className="demo-titlebar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="title">convosearch — local RAG · live demo</span>
        <span className="live">local</span>
      </div>
      <div className="demo-body">
        <p className="demo-query">
          <span className="qmark">&gt; </span>
          {script.query.slice(0, qLen)}
          {qLen < script.query.length && <span className="demo-caret" />}
        </p>
        <p className="demo-answer">
          <AnswerText parts={script.answer} count={aLen} />
          {qLen >= script.query.length && aLen < totalAnswerLen && <span className="demo-caret" />}
        </p>
        {cites && (
          <div className="demo-citations">
            {script.citations.map((c, i) => (
              <span key={c} className="demo-cite" style={{ animationDelay: `${i * 0.18}s` }}>
                [{c}]
              </span>
            ))}
          </div>
        )}
        <div className="demo-meta">
          <span>faiss · sentence-transformers · ollama</span>
          <span>100% cited · runs on CPU</span>
        </div>
      </div>
    </div>
  );
}
