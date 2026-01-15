import { getGradientStyle } from "./color";

/**
 * Highlights keywords in text with gradient styling
 * @param {string} text - Text to highlight keywords in
 * @param {Array<string>} keywords - Array of keywords to highlight
 * @param {string} color - Color for highlighted keywords
 * @returns {JSX.Element} Text with highlighted keywords
 */
export const highlightKeywords = (text, keywords, color) => {
  if (!color || typeof color !== "string") {
    return <>{text}</>;
  }

  // Sort keywords by length (longest first) to avoid overlaps
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

  const matches = [];

  // Find all keyword occurrences (case-insensitive)
  sortedKeywords.forEach((keyword) => {
    const regex = new RegExp(
      `\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi"
    );
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        keyword: keyword,
        start: match.index,
        end: match.index + match[0].length,
        original: match[0],
      });
    }
  });

  // Sort matches by position
  matches.sort((a, b) => a.start - b.start);

  // Remove overlaps (keep only the first match at each position)
  const filteredMatches = [];
  let lastEnd = -1;
  matches.forEach((match) => {
    if (match.start >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.end;
    }
  });

  // Build array of parts (normal text and highlighted)
  const parts = [];
  let lastIndex = 0;
  filteredMatches.forEach((match) => {
    if (match.start > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.start),
        highlight: false,
      });
    }
    parts.push({ text: match.original, highlight: true });
    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    parts.push({ text: text.substring(lastIndex), highlight: false });
  }

  // If no matches, return original text
  if (parts.length === 0) {
    return <>{text}</>;
  }

  // Render parts
  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? (
          <span
            key={index}
            className="font-semibold"
            style={getGradientStyle(color, "to-r")}>
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
};
