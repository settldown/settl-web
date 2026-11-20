const TYPE_MS = 85;
const DELETE_MS = 45;
const HOLD_MS = 1700;
const GAP_MS = 300;
const SWAP_MS = 2500;

const wait = (ms: number) => new Promise((done) => setTimeout(done, ms));

async function type(el: HTMLElement, words: string[]) {
  let index = 0;
  for (;;) {
    await wait(HOLD_MS);
    const current = words[index];
    for (let n = current.length - 1; n >= 0; n--) {
      el.textContent = current.slice(0, n);
      await wait(DELETE_MS);
    }
    index = (index + 1) % words.length;
    const next = words[index];
    await wait(GAP_MS);
    for (let n = 1; n <= next.length; n++) {
      el.textContent = next.slice(0, n);
      await wait(TYPE_MS);
    }
  }
}

/** Reduced motion: swap whole words, no typing. */
function swap(el: HTMLElement, words: string[]) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % words.length;
    el.textContent = words[index];
  }, SWAP_MS);
}

/**
 * Animates every [data-typing] word. The full sentence stays in the HTML,
 * and the heading keeps it as its accessible name while the word changes.
 */
export function startTyping() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll<HTMLElement>("[data-typing]").forEach((el) => {
    const words: string[] = JSON.parse(el.dataset.words ?? "[]");
    if (words.length < 2) return;
    const heading = el.closest("h1, h2");
    const sentence = heading?.textContent?.replace(/\s+/g, " ").trim();
    if (heading && sentence) heading.setAttribute("aria-label", sentence);
    if (reduce) return swap(el, words);
    heading?.classList.add("is-typing");
    void type(el, words);
  });
}
