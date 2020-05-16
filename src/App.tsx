import * as React from 'react';

import { Header } from './features/header/components';
import Menu from './features/menu/containers/menu/Menu';
import { Content } from './features/content/components';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Menu />
          <Content />
        </main>
      </div>
    );
  }
}

export default App;
