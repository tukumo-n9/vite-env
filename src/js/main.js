import { getUserAgentDatas } from './helper/getUserAgentDatas.js';
import { top as pageTop } from './pages/top.js';
import { subpage as pageSubpage } from './pages/subpage.js';

window.addEventListener('load', () => {
  console.log('Hello Vite!');

  getUserAgentDatas();

  const pageClass = document.body.classList;
  if(pageClass.contains('top')) pageTop();
  if(pageClass.contains('subpage')) pageSubpage();
});