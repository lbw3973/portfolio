export const getSectionY = (section: string) => {
  const element = document.querySelector(`#${section}`);
  if (element) {
    const rect = element.scrollIntoView({ behavior: "smooth" });
  }
};
