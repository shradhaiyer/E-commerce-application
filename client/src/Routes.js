import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import UserDashboard from './user/UserDashboard';
import AdminRoutes from './auth/AdminRoutes';
import AdminDashboard from './user/AdminDashboard';
 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component= {Home}/>
                <Route path="/signIn" exact component={SignIn}/>
                <Route path="/signUp" exact component={SignUp}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoutes path ="/admin/dashboard" exact component={AdminDashboard}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;