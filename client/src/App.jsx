import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Entries from './routes/Entries.jsx'
import UpdatePage from './routes/UpdatePage.jsx'
import { EntriesContextProvider } from './context/EntriesContext.js';

const App = () => {
  return (
    <EntriesContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/entries' component={Entries} />
            <Route exact path='/entries/:id/update' component={UpdatePage} />
          </Switch>
        </Router>
      </div>
    </EntriesContextProvider>

  );
}

export default App;