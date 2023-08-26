import { top as pageTop } from './pages/top.js';
import { subpage as pageSubpage } from './pages/subpage.js';
import { getUserAgentDatas } from './getUserAgentDatas.js';

window.addEventListener('load', () => {
  console.log('Hello Vite!');

  getUserAgentDatas();

  const classList = document.body.classList;
  if(classList.contains('top')) pageTop();
  if(classList.contains('subpage')) pageSubpage();
});