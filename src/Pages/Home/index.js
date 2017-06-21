/**
 * Created by Douglas on 6/14/2017.
 */
import React from 'react';
import './Home.css';

import sonny from '../../images/Sonny.jpg'
import profilepic from '../../images/profilepic.jpg'
import downloadpic from '../../images/downloadArrow.png'
import contactIcon from '../../images/email-icon-99.png'
import eduIcon from '../../images/helio2logo.png'

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default () => (
    <main className="mainHome">
        {/*about card*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="About Me"/>}
                >
                    <img src={profilepic} />
                </CardMedia>
                <CardText>
                    <ul>
                        <li>Bio</li>
                        <li>Goals</li>
                        <li>Free Time</li>
                    </ul>
                </CardText>
            </Card>
        </section>
        {/*exp card*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="Experience"/>}
                >
                    <img src={sonny}/>
                </CardMedia>
                <CardText>
                    <ul>
                        <li>Job History</li>
                        <li>Accolades</li>
                        <li>Certifications</li>
                        <li></li>
                    </ul>
                </CardText>
            </Card>
        </section>
        {/*edu card*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="Education"/>}
                >
                    <img src={eduIcon}/>
                </CardMedia>
                <CardText>
                    Schoolling programs attended.
                    Conferences attended to keep my knowledge base
                    up to date on the newest coding trends.
                </CardText>
            </Card>
        </section>
        {/*contact card*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="Contact Me"/>}
                >
                    <img src={contactIcon} />
                </CardMedia>
                <CardText>
                    <RaisedButton href="/Contact" label="Click Here!"/>
                </CardText>
            </Card>
        </section>
        {/*links card*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="Helpful Links"/>}
                >
                    <img src={sonny}/>
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        </section>
        {/*resume download*/}
        <section>
            <Card className="cardStyle">
                <CardMedia
                    overlay={<CardTitle title="Resume"/>}
                >
                    <img src={downloadpic}/>
                </CardMedia>
                <CardText>
                   <p>Full copy of my paper resume,
                       just choose your file type:</p>
                    <RaisedButton href="/Contact" label="Download"/>
                </CardText>
            </Card>
        </section>
    </main>
);