import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getDryCrag } from './Services/crags';

import GlobalStyle from './components/styles/Global';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import CragInfo from './components/CragInfo';

const theme = {};

function App() {
  const [crag, setCrag] = useState();
  console.log(crag);
  const findDryCrag = async (postcode, history) => {
    const response = await getDryCrag(postcode);
    setCrag(response);
    console.log(crag);
    history.push('/drycrag');
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Footer />
        <Switch>
          <Route path="/drycrag">
            {!crag ? <Redirect to="/" /> : <CragInfo crag={crag} />}
          </Route>
          <Route path="/">
            <Search findDryCrag={findDryCrag} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
