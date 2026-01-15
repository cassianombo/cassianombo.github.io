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
 * Creates a gradient text style object
 * @param {string} color - Base hex color
 * @param {string} direction - Gradient direction ("to-r", "to-br", "to-b")
 * @returns {Object} Style object for gradient text
 */
export const getGradientStyle = (color, direction = "to-r") => {
  if (!color || typeof color !== "string") {
    return {
      background: "linear-gradient(to right, #ffffff, #ffffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    };
  }
  const lighterColor = lightenColor(color, 20);
  const directionMap = {
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
  };
  return {
    background: `linear-gradient(${
      directionMap[direction] || "to right"
    }, ${color}, ${lighterColor})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
};
