export default function Space({ height = 200 }: { height?: number }) {
  return (
    <div style={{ marginTop: height }}>
      <span>&nbsp;</span>
    </div>
  );
}
