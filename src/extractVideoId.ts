export function extractVideoId(url: string): string | null {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*vi=))([^?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
