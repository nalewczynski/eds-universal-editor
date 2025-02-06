export default function decorate(block) {
  console.log("Siema z bloku quote");
  const [quoteWrapper] = block.children();
  console.log(quoteWrapper);
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceWith(blockquote);

}