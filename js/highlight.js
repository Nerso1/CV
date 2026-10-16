// Highlights skills related to a hovered item (job, education, portfolio) and vice versa.
// Relations are defined one way in relations.js; both directions are wired here.
document.addEventListener("DOMContentLoaded", () => {
  // touch devices have no real hover - tapping would leave highlights "stuck"
  if (!window.matchMedia("(hover: hover)").matches) return;

  const items = new Map();
  document.querySelectorAll("[data-item]").forEach((el) => items.set(el.dataset.item, el));

  const skills = new Map();
  document.querySelectorAll("[data-skill]").forEach((el) => skills.set(el.dataset.skill, el));

  // element -> elements to highlight when it is hovered (both directions)
  const related = new Map();
  const link = (from, to) => {
    if (!related.has(from)) related.set(from, []);
    related.get(from).push(to);
  };

  for (const [itemId, skillIds] of Object.entries(relations)) {
    const item = items.get(itemId);
    if (!item) {
      console.warn(`highlight: no element with data-item="${itemId}"`);
      continue;
    }

    for (const skillId of skillIds) {
      const skill = skills.get(skillId);
      if (!skill) {
        console.warn(`highlight: no element with data-skill="${skillId}" (used by "${itemId}")`);
        continue;
      }
      link(item, skill);
      link(skill, item);
    }
  }

  related.forEach((targets, el) => {
    const toggle = (on) => targets.forEach((target) => target.classList.toggle("is-related", on));
    el.addEventListener("mouseenter", () => toggle(true));
    el.addEventListener("mouseleave", () => toggle(false));
    el.addEventListener("focusin", () => toggle(true));
    el.addEventListener("focusout", () => toggle(false));
  });
});
