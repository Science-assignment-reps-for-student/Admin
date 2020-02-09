import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AdminLogin, Homework, AdminMain } from './component';
import { AccessTokenProvider, AccessTokenConsumer } from './context/AccessTokenContext';

function App() {

  return (
      <Switch>
        <AccessTokenProvider>
          <AccessTokenConsumer>
            {
              ({ actions, state }) => {
                return (
                  <>  
                    <Route path="/Admin/Login" render={()=> <AdminLogin actions={actions}/>}/>
                    <Route path="/Amdin/Make" render={() => <Homework state={state} actions={actions} type="Make"/>}/>
                    <Route path="/Admin/revise" render={() => <Homework state={state} actions={actions} type="Fix"/>}/>
                    <Route exact path="/Admin" render={()=> <AdminMain state={state} actions={actions}/>}/>
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
