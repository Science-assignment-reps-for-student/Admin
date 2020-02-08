import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Login, Homework, Main } from './component';
import { AccessTokenProvider, AccessTokenConsumer } from './context/AccessTokenContext';
import './style/reset.css'

function App() {

  return (
      <Switch>
        <AccessTokenProvider>
          <AccessTokenConsumer>
            {
              ({ actions, state }) => {
                return (
                  <>
                    <Route path="/Login" render={()=> <Login actions={actions}/>}/>
                    <Route path="/Make" render={() => <Homework state={state} type="Make"/>}/>
                    <Route path="/revise" render={() => <Homework state={state} type="Fix"/>}/>
                    <Route exact path="/" render={()=> <Main/>}/>
                  </>
                );
              }
          }
          </AccessTokenConsumer>
        </AccessTokenProvider>
      </Switch>
  );
};

export default withRouter(App);
