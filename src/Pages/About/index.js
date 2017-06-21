/**
 * Created by Douglas on 6/13/2017.
 */
import './About.css';
import React from 'react';
import funNgames from '../../images/Sonny.jpg'
import profilepic from '../../images/profilepic.jpg'
import goalspic from '../../images/born2rule.jpg'

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default () => (
    <main className="mainAbout">
        <section>
            <Card className="aboutMediaCardStyle">
                <CardMedia>
                    <img src={profilepic}/>
                </CardMedia>
            </Card>
            <Card className="aboutCardStyle">
                <CardTitle title="Basic Information"/>
                <CardText>
                    <ul>
                        <li>Age: 22</li>
                        <li>From: Kansas City, Missouri</li>
                        <li>Currently: Salt Lake City</li>
                        <li>Dog: I own an Airedale named Sonny</li>
                        <li>Snowboarding > Skiing</li>
                    </ul>
                </CardText>
            </Card>
        </section>
        <section className="rowReverse">
            <Card className="aboutMediaCardStyle">
                <CardMedia>
                    <img src={goalspic}/>
                </CardMedia>
            </Card>
            <Card className="aboutCardStyle">
                <CardTitle title="Goals"/>
                <CardText>



                </CardText>
            </Card>
        </section>
        <section>
            <Card className="aboutMediaCardStyle">
                <CardMedia>
                    <img src={funNgames}/>
                </CardMedia>
            </Card>
            <Card className="aboutCardStyle">
                <CardTitle title="Fun and Games"/>
                <CardText>
                    <ul>
                        <li>Playing with Sonny (pictured left)</li>
                        <li>Snowboarding: season pass to Brighton Resort, Utah</li>
                        <li>World of Warcraft: realm-Thrall, guild-Big Sorry</li>
                        <li>Hiking: Millcreek Canyon, Provo Canyon / Sundance</li>
                    </ul>


                </CardText>
            </Card>
        </section>
    </main>
);