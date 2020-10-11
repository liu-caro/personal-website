import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from '@material-ui/styles';

import { Home } from './screen/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

import { UrlLinks } from './util/link-constants';
import { theme } from './util/theme';



const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Switch>
                    <Route exact path={UrlLinks.HOME} component={Home} />
                    <Route path={UrlLinks.ABOUT} component={Home} />
                    <Route path={UrlLinks.PROJECTS} component={Home} />
                </Switch>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export { App }