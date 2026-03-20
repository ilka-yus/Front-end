import { GetStaticProps } from "next";

export default function About({ timestamp }: { timestamp: string }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page (SSG)</h1>
      <p>This page was generated at build time.</p>
      <p><strong>Generated at:</strong> {timestamp}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { timestamp: new Date().toISOString() } };
};