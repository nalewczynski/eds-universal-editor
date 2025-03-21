import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  console.log('block', block);
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  const createReactiveButton = () => {
    let count = 0;
    const counterDisplay = document.createElement('span');
    const container = document.createElement('div');

    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    counterDisplay.textContent = count;
    counterDisplay.style.fontSize = '20px';

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.addEventListener('click', () => {
      // eslint-disable-next-line no-plusplus
      count--;
      counterDisplay.textContent = `${count}`;
    });

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => {
      // eslint-disable-next-line no-plusplus
      count++;
      counterDisplay.textContent = `${count}`;
    });

    container.appendChild(minusButton);
    container.appendChild(counterDisplay);
    container.appendChild(plusButton);

    block.appendChild(container);

  };

  createReactiveButton();

  block.textContent = '';
  block.append(ul);
}
