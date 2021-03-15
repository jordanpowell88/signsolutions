import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import customerData from '../data/customer-data';

export default () => {
    const customer = customerData[Math.floor(Math.random() * customerData.length)];

    return (
        <Layout>
            <SplitSection
                id="about"
                primarySlot={
                    <div className="lg:pr-32 xl:pr-48">
                        <h3 className="text-3xl font-semibold leading-tight">About Us</h3>
                        <p className="mt-8 text-xl font-light leading-relaxed">
                        At Sign Solutions of Ohio we focus on not over or under selling our clients. We believe in not selling a product that is more than desired, nor selling a product that is less than desired. We believe in looking long term in order to get the best value for our customers. We are proud to be your local, quality sign company. If you have any questions about what we do or would like a free quote, feel free to call us at <a href="tel:4192242231">419-224-2231</a> or click below for a free quote.
                        </p>
                        <div className="mt-4">
                            <Button>Free Quote</Button>
                        </div>
                    </div>
                }
                secondarySlot={
                    <div className="my-8">
                        <CustomerCard customer={customer} />
                    </div>
                }
            >
            </SplitSection>
        </Layout>
    )
}