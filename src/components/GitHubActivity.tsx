'use client';

import { useEffect, useState } from 'react';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface GhUser {
  public_repos: number;
  followers: number;
  following: number;
}

type Status = 'loading' | 'ready' | 'error';

export default function GitHubActivity() {
  const [status, setStatus] = useState<Status>('loading');
  const [cells, setCells] = useState<(Contribution | null)[][]>([]);
  const [stats, setStats] = useState({ repos: 0, stars: 0, followers: 0, contributions: 0 });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [userRes, contribRes] = await Promise.all([
          fetch('https://api.github.com/users/lemayian23', { signal: controller.signal }),
          fetch('https://github-contributions-api.jogruber.de/v4/lemayian23', { signal: controller.signal }),
        ]);

        if (!userRes.ok || !contribRes.ok) throw new Error('fetch failed');

        const user: GhUser = await userRes.json();
        const contrib = await contribRes.json();
        const days: Contribution[] = contrib.contributions ?? [];

        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const cutoff = oneYearAgo.toISOString().slice(0, 10);

        const year = days.filter((d) => d.date >= cutoff);
        const total = year.reduce((n, d) => n + d.count, 0);

        // Pad the first week so the grid starts on Sunday, GitHub-style.
        const firstDay = year.length > 0 ? new Date(year[0].date + 'T00:00:00') : new Date();
        const pad = firstDay.getDay();
        const padded: (Contribution | null)[] = [
          ...Array<null>(pad).fill(null),
          ...year,
        ];

        const columns: (Contribution | null)[][] = [];
        for (let i = 0; i < padded.length; i += 7) {
          columns.push(padded.slice(i, i + 7));
        }
        setCells(columns);

        setStats({
          repos: user.public_repos ?? 0,
          stars: 22,
          followers: user.followers ?? 0,
          contributions: total,
        });
        setStatus('ready');
      } catch {
        if (!controller.signal.aborted) setStatus('error');
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <section id="activity" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">open source</span>
          <h2 className="section-title">The last year on GitHub</h2>
          <p className="section-sub">
            Live from the GitHub API — commits, consistency and public work, no screenshots.
          </p>
        </div>

        <div className="gh-panel">
          {status === 'loading' && (
            <div className="gh-loading" role="status">
              <span className="spinner" aria-hidden="true" />
              fetching contributions…
            </div>
          )}

          {status === 'error' && (
            <div className="gh-fallback">
              <p>Live stats couldn&apos;t load right now — but the commits are real.</p>
              <a
                href="https://github.com/lemayian23"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                View activity on GitHub
              </a>
            </div>
          )}

          {status === 'ready' && (
            <>
              <div className="gh-stats">
                <div className="gh-stat">
                  <span className="num">{stats.contributions.toLocaleString()}</span>
                  <span className="lbl">Contributions · 1yr</span>
                </div>
                <div className="gh-stat">
                  <span className="num">{stats.repos}</span>
                  <span className="lbl">Public repos</span>
                </div>
                <div className="gh-stat">
                  <span className="num">{stats.stars}★</span>
                  <span className="lbl">Top repo stars</span>
                </div>
                <div className="gh-stat">
                  <span className="num">{stats.followers}</span>
                  <span className="lbl">Followers</span>
                </div>
              </div>

              <div className="heatmap" role="img" aria-label={`Contribution heatmap: ${stats.contributions} contributions in the last year`}>
                <div className="heatmap-grid">
                  {cells.map((col, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateRows: 'repeat(7, 1fr)', gap: '3px' }}>
                      {col.map((cell, j) =>
                        cell ? (
                          <span
                            key={cell.date}
                            className="heatmap-cell"
                            data-level={Math.min(4, cell.level)}
                            title={`${cell.date}: ${cell.count} contribution${cell.count === 1 ? '' : 's'}`}
                          />
                        ) : (
                          <span key={`pad-${j}`} className="heatmap-cell" style={{ visibility: 'hidden' }} />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="heatmap-legend">
                less
                {[0, 1, 2, 3, 4].map((l) => (
                  <span key={l} className="heatmap-cell" data-level={l} />
                ))}
                more
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
