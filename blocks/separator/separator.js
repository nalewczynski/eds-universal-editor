export default function decorate(block) {
  const [separatorWrapper] = block.children;
  const separator = document.createElement('div');
  separatorWrapper.replaceWith(separator)
}