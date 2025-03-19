export async function Image({
  src,
  alt: originalAlt,
  width = null,
  height = null,
}: {
  src: string;
  alt?: string;
  width: number | null;
  height: number | null;
}) {


  return <img src={src} alt={originalAlt ?? ""} />

}
