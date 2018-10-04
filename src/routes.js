import Css from './components/Css.vue';
import CssColor from './components/CssColor.vue';

export const routes = [
  {path: '/css-parent', component: Css,
  children:[
      {path: 'css-color', component: CssColor}  // vuex state component: path:':id', 'CssColor' <> 'param'
  ]},
];
