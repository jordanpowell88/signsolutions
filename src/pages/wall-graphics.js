import React from'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import WallGraphicForm from '../forms/wall-graphic-form';
import * as wallGraphic from '../images/indoor/wall-graphic.jpg';
import * as wallGraphic2 from '../images/indoor/wall-graphic-2.jpg';

export default () => (
    <Layout>
        <SplitSection
            id="wall-graphics"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Wall Graphics</h3>
                    <h5 className="text-1xl font-semibold leading-tight">Wall Graphics, Wall Murals, Indoor Letter, Indoor Graphics</h5>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                    The vinyl wall wrap is perfect for transforming your plain ugly walls into something that represents your organization with pride.  It's an excellent solution to improving the astethics of your space as well as sharing your organizations mission and values.  No matter the size of your company, first impressions matter. So lets your space make the right impression with a wall graphic or wall mural
                    </p>
                    {
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold">Free Quote</h3>
                            <WallGraphicForm />
                        </div>
                    }
                </div>
            }
            secondarySlot={
                <>
                    <img src={wallGraphic} className="pb-4" />
                    <img src={wallGraphic2} className="pb-4" />
                </>
            }
        />
    </Layout>
)