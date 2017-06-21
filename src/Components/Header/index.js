/**
 * Created by Douglas on 6/13/2017.
 */
import React, {Component} from 'react';
import './Header.css';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <header>
                {/*Header Drawer*/}
                <section>
                    <i className="fa fa-bars fa-2x" onTouchTap={this.handleToggle}/>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem href="/" onTouchTap={this.handleClose}><h4>Douglas Soule</h4></MenuItem>
                        <MenuItem href="/About" onTouchTap={this.handleClose}>About</MenuItem>
                        <MenuItem href="/Experience" onTouchTap={this.handleClose}>Experience</MenuItem>
                        <MenuItem href="/Education" onTouchTap={this.handleClose}>Education</MenuItem>
                        <MenuItem href="/Contact" onTouchTap={this.handleClose}>Contact Me</MenuItem>
                        <MenuItem target="_blank" href="https://github.com/souleman13" onTouchTap={this.handleClose}><i className="fa fa-github fa-2x" /></MenuItem>
                        <MenuItem target="_blank" href="/" onTouchTap={this.handleClose}> <i className="fa fa-linkedin-square fa-2x" /></MenuItem>
                        <MenuItem target="_blank" href="https://www.facebook.com/soultrain2013" onTouchTap={this.handleClose}><i className="fa fa-facebook fa-2x" /></MenuItem>
                    </Drawer>
                </section>
                {/*Header Title*/}
                <a href="/"><h2>Douglas Soule</h2></a>
                {/*Header Right-Corner Buttons*/}
                <section>
                    <a target="_blank" href="/"><i className="fa fa-linkedin-square fa-2x" /></a>
                    <a target="_blank" href="https://github.com/souleman13"  ><i className="fa fa-github fa-2x" /></a>
                    <RaisedButton label="Contact Me" href="./Contact" style={{minWidth: 130}} />
                </section>
            </header>
        );
    }
}