import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import * as led from '../images/outdoor/outdoor-led.jpg';
import OutdoorForm from '../forms/outdoor-form';

export default () => (
    <Layout>
        <SplitSection
            id="led"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">LED Signs</h3>
                    <h5 className="text-1xl font-semibold leading-tight">LED, Digital Message Center, Digital Sigange</h5>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                    Does your business operates out of a brick and mortar? An outdoor sign is essential to identifiying your brand and organization to those who travel by that building. An LED Outdoor Message Board sign may be the perfect solution. LED Outdoor Message Board Signs give you the ability to easily change the message your organization displays in front of your building. We do live in an ever changing world, why should your sign be any different?
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
                    <img src={led} className="pb-4" />
                </>
            }
        />
    </Layout>
)