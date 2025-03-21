export default class Utils {

  createReactiveButton() {
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

    return container

  };
}
