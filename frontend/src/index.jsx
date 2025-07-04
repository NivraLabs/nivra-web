/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Route, Router } from '@solidjs/router';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Roadmap from './pages/Roadmap';
import About from './pages/About';
import JoinUs from './pages/JoinUs';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/documentation" component={Docs} />
    <Route path="/roadmap" component={Roadmap} />
    <Route path="/about" component={About} />
    <Route path="/join" component={JoinUs} />
  </Router>
), root);
