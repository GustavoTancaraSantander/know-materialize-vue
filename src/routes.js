import Css from './components/Css.vue';
import Comp from './components/Comp.vue';
import Js from './components/Js.vue';
import Forms from './components/Forms.vue';

export const routes = [
  {path: '/css-parent', component: Css},
  {path: '/components-parent', component: Comp},
  {path: '/jscript-parent', component: Js},
  {path: '/forms-parent', component: Forms},
];
