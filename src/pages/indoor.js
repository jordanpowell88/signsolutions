import React from 'react';
import Layout from "../components/layout/Layout";
import SplitSection from '../components/SplitSection';
import * as lobbySign from '../images/indoor/lobby-sign.jpg';
import * as indoorSign from '../images/indoor/indoor-sign.jpg';
import IndoorForm from '../forms/indoor-form';

export default () => (
    <Layout>
        <SplitSection
            id="indoor"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                <h3 className="text-3xl font-semibold leading-tight">Indoor Signage</h3>
                <h5 className="text-1xl font-semibold leading-tight">Directional Signs, Lobby Signs & ADA Signage</h5>
                <p className="mt-8 text-xl font-light leading-relaxed">
                Signs not only are a great source for information such as directions to the nearest restroom, they also can help tell a story. A beautiful lobby sign communicates the story that your company believes it is important to greet you with a nice first impression. In the same way, a facility that has no clear understanding of where things are is extra confusing. ADA Signs are also required to meet ADA compliance. Indoor signage is essential to providing information and communicating your story. 
                </p>
                {
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold">Free Quote</h3>
                        <IndoorForm />
                    </div>
                }
                </div>
            }
            secondarySlot={
                <>
                <img src={lobbySign} className="pb-4" />
                <img src={indoorSign} className="pb-4" />
                </>    
            }
    />
    </Layout>
)