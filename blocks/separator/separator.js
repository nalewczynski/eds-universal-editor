export default function decorate(block) {
  const [separatorWrapper] = block.children;
  const separator = document.createElement('div');
  separator.textContent = separatorWrapper.textContent.trim();
  separatorWrapper.replaceWith(separator);
}
