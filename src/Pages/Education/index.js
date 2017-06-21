/**
 * Created by Douglas on 6/19/2017.
 */
import './Education.css';
import React from 'react';

import suuLogo from '../../images/suuLogo.jpg'
import jslogo from '../../images/logo_JavaScript.png'
import helioLogo from '../../images/heliologo.jpg'

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default () => (
    <main className="mainEducation">
        {/*Helio Training*/}
        <section>
            <Card className="eduMediaCardStyle">
                <CardMedia>
                    <img src={helioLogo}/>
                </CardMedia>
            </Card>
            <Card className="eduCardStyle">
                <CardTitle title="Helio Training" />
                <CardText>
                    <ul><h3>Full Stack Web Development BootCamp</h3>
                        <li>Currently Attending</li>
                        <li>13 weeks, full time</li>
                        <li>Parent: Neumont University</li>
                        <li>132+ proficiencies covered</li>
                        <li>Including: JavaScript, React, and Node.js</li>
                    </ul>
                </CardText>
            </Card>
        </section>
        {/*SUU*/}
        <section className="rowReverse">
            <Card className="eduMediaCardStyle">
                <CardMedia>
                    <img src={suuLogo}/>
                </CardMedia>
            </Card>
            <Card className="eduCardStyle">
                <CardTitle title="Southern Utah University" />
                <CardText>
                    Attended SUU for 2 years immediately following high school on a full-ride scholarship.
                    During this time I primarily studied general education classes.
                    However, I did take a few introductory computer science courses.
                </CardText>
            </Card>
        </section>
        {/*Conferences*/}
        <section>
            <Card className="eduMediaCardStyle">
                <CardMedia>
                    <img src={jslogo}/>
                </CardMedia>
            </Card>
            <Card className="eduCardStyle">
                <CardTitle title="Confrences" />
                <CardText>
                    Currently I have not been to any conferences,
                    however I am looking forward to attending the following events in the future.
                <ul>
                    <li>JS SLC 2017</li>
                </ul>
                </CardText>
            </Card>
        </section>
    </main>
);