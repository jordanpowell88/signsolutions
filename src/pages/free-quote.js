import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import FreeQuoteForm from '../forms/free-quote-form';
import * as showroom from '../images/showroom.jpg';
import CustomerCard from '../components/CustomerCard';
import customerData from '../data/customer-data';

export default () => {
    const customer = customerData[Math.floor(Math.random() * customerData.length)];
    return (
        <Layout>
            <SplitSection
                id="free-quote"
                primarySlot={
                    <div className="lg:pr-32 xl:pr-48">
                        <h3 className="text-3xl font-semibold leading-tight">Free Quote</h3>
                        <p className="mt-8 text-xl font-light">
                            Are you looking for sign company that has the right <span className="underline font-semibold">process</span>, <span className="underline font-semibold">price</span>, <span className="underline font-semibold">products</span> and <span className="underline font-semibold">people</span>? Fill out the form to receive a 100% FREE sign quote on your next sign, vehicle or promotional item.
                        </p>
                        <h4 className="pt-6 text-xl font-semibold">What we strive for:</h4>
                        <ul className="list-decimal">
                            <ol>An efficient <span className="underline font-semibold">process</span> saves you money</ol>
                            <ol>An affordable <span className="underline font-semibold">price</span>, helps make a great product</ol>
                            <ol>A great <span className="underline font-semibold">product</span> makes a happy customer</ol>
                            <ol>Great <span className="underline font-semibold">people</span> keep happy customers</ol>
                        </ul>
                        {
                            <div className="mt-8">
                                <FreeQuoteForm />
                            </div>
                        }
                    </div>
                }
                secondarySlot={
                    <>
                        <img src={showroom} />
                        <div className="my-8">
                            <CustomerCard customer={customer} />
                        </div>
                    </>
                }
                >
            </SplitSection>
        </Layout>
    )
}