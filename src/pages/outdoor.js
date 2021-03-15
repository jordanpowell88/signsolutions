import React from 'react';
import Layout from "../components/layout/Layout";
import SplitSection from '../components/SplitSection';
import * as monumentSign from '../images/outdoor/monument-sign.jpg';
import * as outdoorSign from '../images/outdoor/outdoor-sign.jpg';
import OutdoorForm from '../forms/outdoor-form';

export default () => (
    <Layout>
        <SplitSection
            id="outdoor"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                <h3 className="text-3xl font-semibold leading-tight">Outdoor Signage</h3>
                <h5 className="text-1xl font-semibold leading-tight">Monument Signs, Storefront Signs & LED Electronic Message Boards</h5>
                <p className="mt-8 text-xl font-light leading-relaxed">
                Does your business operates out of a brick and mortar? An outdoor sign is essential to identifiying your brand and organization to those who travel by that building. Whether you need a storefront sign, LED Electronic Message Board, monument sign or any other form of outdoor sign, you will want the very best to represent your organization. Sign Solutions is your source for affordable outdoor signage.
                </p>
                {
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold">Free Quote</h3>
                        <OutdoorForm />
                    </div>
                }
                </div>
            }
            secondarySlot={
                <>
                    <img src={outdoorSign} className="pb-4" />
                    <img src={monumentSign} className="pb-4" />
                </>
            }
    />
    </Layout>
)