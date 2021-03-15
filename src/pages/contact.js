import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import ContactForm from '../forms/contact-form';
import * as showroom from '../images/showroom.jpg';

export default () => (
    <Layout>
        <SplitSection
            id="contact"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Contact Us</h3>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                    2601 Central Point Parkway<br />
                    Lima, Ohio 45804<br />
                    <a href="tel:4192242231">419-224-2231</a>
                    </p>
                    {
                        <div className="mt-8">
                            <ContactForm />
                        </div>
                    }
                </div>
            }
            secondarySlot={
                <img src={showroom} />
            }
        >
        </SplitSection>
    </Layout>
)