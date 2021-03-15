import React from 'react';
import Layout from "../components/layout/Layout";
import SplitSection from '../components/SplitSection';
import VehicleForm from '../forms/vehicle-form';
import * as trailerWrap from '../images/vehicles/trailer-wrap.jpg'
import * as vehicleWrap from '../images/vehicles/vehicle-wrap.jpg';

export default () => (
    <Layout>
        <SplitSection
            id="vehicles"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Vehicle Wraps</h3>
                    <h5 className="text-1xl font-semibold leading-tight">Vehicle Wraps, Truck Wraps, Vinyl Lettering, Window Mesh, Magnets</h5>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                    The vehicle vinyl wrap is a tool used to transform your car, van, bus or fleet into a moving billboard to promote and showcase your business. The more visible your business is the more profitable it will become. Whether you have a small business or a large business when it comes to a vehicle wrap your image is what matters. 
                    </p>
                    {
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold">Free Quote</h3>
                            <VehicleForm />
                        </div>
                    }
                </div>
            }
            secondarySlot={
                <>
                    <img src={trailerWrap} className="pb-4" />
                    <img src={vehicleWrap} className="pb-4" />
                </>
            }
    />
    </Layout>
)
