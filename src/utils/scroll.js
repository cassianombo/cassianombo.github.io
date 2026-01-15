/**
 * Smoothly scrolls to a section by its ID
 * @param {string} id - The ID of the section to scroll to
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
