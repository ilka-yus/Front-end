import { GetServerSideProps } from "next";

export default function AboutSSR({ timestamp }: { timestamp: string }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page (SSR)</h1>
      <p>This page is generated on every request.</p>
      <p><strong>Generated at:</strong> {timestamp}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { timestamp: new Date().toISOString() } };
};