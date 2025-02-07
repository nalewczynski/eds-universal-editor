// eslint-disable-next-line import/no-unresolved
import { createApp } from 'vue';
import Facts from './Facts.vue';

function getPropsForFactsFromBlock(block) {
  const factPropObject = {
    facts: [],
  };
  factPropObject.facts = Array.from(block.children).map((child) => child.children[0].innerText);
  return factPropObject;
}

export default async function decorate(block) {
  const factWrapper = document.createElement('div');
  factWrapper.className = 'fact__block-style';
  const factProp = getPropsForFactsFromBlock(block);
  createApp(Facts, {
    factProp,
  }).mount(factWrapper);
  block.textContent = '';
  block.append(factWrapper);
}
