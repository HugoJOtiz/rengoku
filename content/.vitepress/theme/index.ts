import '../theme/styles/main.scss';
import '../theme/styles/code.scss';
import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import About from './components/About.vue';
const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('About', About);
  },
};

export default theme;
