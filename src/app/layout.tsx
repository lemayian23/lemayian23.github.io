import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lemayian Kirionki Denis - Senior Software Engineer',
  description: 'Senior Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. Available for freelance projects and full-time opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}