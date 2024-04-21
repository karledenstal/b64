export function InlineCode({ text }: { text: string }) {
  return (
    <code className="relative rounded bg-zinc-800 bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg">
      {text}
    </code>
  );
}
