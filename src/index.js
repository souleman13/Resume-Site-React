import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import TapPlugin from 'react-tap-event-plugin'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {blue900, orange500} from 'material-ui/styles/colors'


const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
        primary1Color: orange500,
        accent1Color: blue900,
    },
    fontFamily: 'Courier New',
});

const Wrapped = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
);


TapPlugin();

ReactDOM.render(Wrapped, document.getElementById('root'));

registerServiceWorker();

