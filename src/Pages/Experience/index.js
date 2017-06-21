/**
 * Created by Douglas on 6/13/2017.
 */
import './Experience.css';
import React, {Component} from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import {white} from 'material-ui/styles/colors'

import sonny from '../../images/Sonny.jpg'



const styles = {
    slide: {
        padding: 10,
    },
    paper: {
        height: 150,
        width: 150,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    }
};


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab style={{fontWeight: 800}} label="Job History" value={0}/>
                    <Tab style={{fontWeight: 800}} label="Accolades & Certifications" value={1}/>
                    <Tab style={{fontWeight: 800}} label="Volunteering" value={2}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    {/*Job History*/}
                    <div>
                        <main className="mainExp">
                            {/*La Caille*/}
                            <section>
                                <Card className="cardStyle">
                                    <CardHeader
                                        title={<CardTitle title="La Caille"/>}
                                        showExpandableButton={true}
                                    />
                                    <CardMedia>
                                        <img src={sonny}/>
                                    </CardMedia>
                                    <CardText expandable={true}>
                                        <ul>
                                            <li>Type of Business: Resteraunt</li>
                                            <li>Position(s):</li>
                                            <li>Employeed from:</li>
                                            <li><a href="">website link</a></li>
                                        </ul>
                                    </CardText>
                                </Card>
                            </section>
                            {/*Brian Head*/}
                            <section>
                                <Card className="cardStyle">
                                    <CardHeader
                                        title={<CardTitle title="Brain Head Ski Resort"/>}
                                        showExpandableButton={true}
                                    />
                                    <CardMedia>
                                        <img src={sonny}/>
                                    </CardMedia>
                                    <CardText expandable={true}>
                                        <ul>
                                            <li>Type of Business:</li>
                                            <li>Position(s):</li>
                                            <li>Employeed from:</li>
                                            <li><a href="">website link</a></li>
                                        </ul>
                                    </CardText>
                                </Card>
                            </section>
                            {/*Gastronomy*/}
                            <section>
                                <Card className="cardStyle">
                                    <CardHeader
                                        title={<CardTitle title="Gastronomy"/>}
                                        showExpandableButton={true}
                                    />
                                    <CardMedia>
                                        <img src={sonny}/>
                                    </CardMedia>
                                    <CardText expandable={true}>
                                        <ul>
                                            <li>Type of Business:</li>
                                            <li>Location: Marketstreet Grill, Cottonwood Heights</li>
                                            <li>Position(s):</li>
                                            <li>Employeed from:</li>
                                            <li><a href="">website link</a></li>
                                        </ul>
                                    </CardText>
                                </Card>
                            </section>
                        </main>
                    </div>
                    {/*Accolades and Certs*/}
                    <div style={styles.slide}>
                        <main>
                            <Subheader style={{fontWeight: 800, color:white}}>Accolades</Subheader>
                            <Divider />
                            <Paper style={styles.paper} zDepth={5}>
                                <h3>Award</h3>
                                <p>No Accolades have been added yet</p>
                            </Paper>
                            <Subheader style={{fontWeight: 800, color:white}}>Certifications</Subheader>
                            <Divider />
                            <Paper style={styles.paper} zDepth={5}>
                                <h3>Cert</h3>
                                <p>No certifications have been added yet</p>
                            </Paper>
                        </main>
                    </div>
                    {/*Volunteering*/}
                    <div style={styles.slide}>
                        <main>

                        </main>
                    </div>
                </SwipeableViews>
            </div>
        );
    }

}