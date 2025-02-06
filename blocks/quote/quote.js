export default function (block) {
  const [quoteWrapper] = block.children();
  console.log(quoteWrapper);
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceWith(blockquote);

}