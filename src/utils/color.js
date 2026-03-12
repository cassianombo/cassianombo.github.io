/**
 * Lightens a hex color by a given percentage
 * @param {string} hex - Hex color code (e.g., "#ff0000")
 * @param {number} percent - Percentage to lighten (0-100)
 * @returns {string} Lightened hex color
 */
export const lightenColor = (hex, percent) => {
  if (!hex || typeof hex !== "string") {
    return "#ffffff";
  }
  const cleanHex = hex.replace("#", "");
  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) {
    return "#ffffff";
  }
  const r = Math.min(
    255,
    (num >> 16) + Math.round((255 - (num >> 16)) * (percent / 100))
  );
  const g = Math.min(
    255,
    ((num >> 8) & 0x00ff) +
      Math.round((255 - ((num >> 8) & 0x00ff)) * (percent / 100))
  );
  const b = Math.min(
    255,
    (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * (percent / 100))
  );
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

/**
 * Creates a solid text style object (no gradients)
 * @param {string} color - Base hex color
 * @returns {Object} Style object for solid-colored text
 */
export const getGradientStyle = (color) => {
  if (!color || typeof color !== "string") {
    return {
      color: "#ffffff",
    };
  }
  return {
    color,
  };
};
