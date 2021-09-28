import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './auth/PrivateRoutes'
import Counter from './components/counter'
import Home from './pages/home'
import Products from './pages/products'
import {LogInPage} from './pages/userLogin'
import {SignUpPage} from './pages/userSignUp'


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/counter" exact>
                    <Counter />
                </PrivateRoute>
                <PrivateRoute path="/products">
                    <Products />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </Router>
    );
}