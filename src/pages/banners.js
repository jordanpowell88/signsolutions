import React from 'react';
import Layout from "../components/layout/Layout";
import SplitSection from '../components/SplitSection';
import BannersForm from '../forms/banners-form';
import * as tradeshowBanner from '../images/indoor/tradeshow-banner.jpg';

export default () => (
    <Layout>
        <SplitSection
            id="vehicles"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Banners</h3>
                    <h5 className="text-1xl font-semibold leading-tight">Indoor banners, Outdoor Banners</h5>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                    Banners, Banners and more banners. They are great for just about everything. They are an affordable solution to both your indoor and outdoor signage needs. Whether you just need simple lettering or a full color printed banner, Sign Solutions is your affordable banner provider.
                    </p>
                    {
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold">Free Quote</h3>
                            <BannersForm />
                        </div>
                    }
                </div>
            }
            secondarySlot={
                <>
                    <img src={tradeshowBanner} />
                </>
            }
    />
    </Layout>
)
