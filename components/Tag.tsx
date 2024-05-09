export default function Tag({ text, level }: { text: string; level: number }) {
  return (
    <small
      className={`${level >= 3 ? "gold-text " : "silver-text"} px-2 text-xs`}
    >
      {text}
    </small>
  );
}
