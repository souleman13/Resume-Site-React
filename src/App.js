import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import AboutPage from './Pages/About';
import ExperiencePage from './Pages/Experience';
import ContactPage from './Pages/Contact';
import EducationPage from './Pages/Education'
import NotFound from './Pages/Not-Found';


export default () => (
    <Router>
        <div>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={AboutPage}/>
                    <Route path="/Experience" component={ExperiencePage}/>
                    <Route path="/Contact" component={ContactPage}/>
                    <Route path="/Education" component={EducationPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
            <Footer />
        </div>
    </Router>
);

