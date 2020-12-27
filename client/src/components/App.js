import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from '../components/auth/login';
import Movielist from '../components/imdb/Movielist';
import Moviedetails from '../components/imdb/movieDetails';
import {ProtectedRoute} from '../routes/protectedRoutes';
class App extends React.Component {
  
  render() {
    return (
   <>
<Switch>
  <Route exact path="/" component={Login}/>
   <ProtectedRoute path="/movielist" component={Movielist}/>
   <ProtectedRoute path="/moviedetails/:id" component={Moviedetails}/>
  <Route path="*" component={()=>"404 not found"}/>
</Switch>
   </>
    );
  }
}

export default App;
