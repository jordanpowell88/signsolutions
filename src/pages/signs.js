import React from 'react';
import Layout from "../components/layout/Layout";
import Sign from '../components/Sign';
import * as indoorSign from '../images/indoor/indoor-sign.jpg';
import * as outdoorSign from '../images/outdoor/outdoor-sign.jpg';
import * as trailerWrap from '../images/vehicles/trailer-wrap.jpg';
import * as ledSign from '../images/outdoor/led.jpg';
import * as wallGraphic from '../images/indoor/wall-graphic.jpg';
import * as indoorBanner from '../images/indoor/indoor-banner.jpg';

export default () => (
    <Layout>
        <div className="container mx-auto px-16 mt-12 items-center flex flex-col lg:flex-row">
            <div>
                <h3 className="text-3xl font-semibold leading-tight">Signs</h3>
                <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                    <Sign link="/indoor" type="Indoor" image={indoorSign} />
                    <Sign link="/outdoor" type="Outdoor" image={outdoorSign} />
                    <Sign link="/vehicles" type="Vehicles" image={trailerWrap} />
                </div>
                <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                    <Sign link="/led" type="Electronic Message Boards" image={ledSign} />
                    <Sign link="/wall-graphics" type="Wall Graphics" image={wallGraphic} />
                    <Sign link="/banners" type="Banners" image={indoorBanner} />
                </div>
            </div>
        </div>
    </Layout>
);