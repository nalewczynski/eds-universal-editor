export default function decorate(block) {
  const [marqueeWrapper] = block.children;
  const marquee = document.createElement('marquee');
  marquee.textContent = marqueeWrapper.textContent.trim();
  marqueeWrapper.replaceWith(marquee);
}
