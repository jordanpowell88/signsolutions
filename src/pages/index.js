import { Link } from 'gatsby';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import Sign from '../components/Sign';
import * as indoorSign from '../images/indoor/indoor-sign.jpg';
import * as outdoorSign from '../images/outdoor/outdoor-sign.jpg';
import * as trailerWrap from '../images/vehicles/trailer-wrap.jpg';
import * as ledSign from '../images/outdoor/led.jpg';
import * as wallGraphic from '../images/indoor/wall-graphic.jpg';
import * as indoorBanner from '../images/indoor/indoor-banner.jpg';
import * as showroom from '../images/showroom.jpg';
import * as mike from '../images/mike-powell.png';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            It's Not Just A Sign, It's Your Image
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Your Local, Trusted Sign Company
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink href="#about">
              <Button size="lg">Learn More</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={mike} className="lg:-mt-24" />
        </div>
      </div>
    </section>


  <hr className="mt-12" />

    <SplitSection
      id="about"
      primarySlot={
          <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">About Us</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              At Sign Solutions of Ohio we focus on not over or under selling our clients. We believe in not selling a product that is more than desired, nor selling a product that is less than desired. We believe in looking long term in order to get the best value for our customers. We are proud to be your local, quality sign company. If you have any questions about what we do or would like a free quote, feel free to call us at <a href="tel:4192242231">419-224-2231</a> or click below for a free quote.
              </p>
              <div className="mt-4">
                  <Link to="/contact">
                    <Button>Contact Us</Button>
                  </Link>
              </div>
          </div>
      }
      secondarySlot={
          <div className="my-8">
              <Card>
                <img src={showroom} />
                <p className="leading-tight text-center pt-4 text-gray-800">Our Showroom at 2601 Central Point Parkway in Lima Ohio</p>
              </Card>
          </div>
      }
    >
    </SplitSection>

    <hr />

    <section id="signs" className="py-20 lg:pb-40 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Feature Signage</h2>
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
        <div className="float-right">
          <Link to="/signs">
            <Button>View More Signs</Button>
          </Link>
        </div>
      </div>
    </section>
    
    <hr />
  
    <section id="testimonials" className="py-20 lg:py-24">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-4xl font-bold text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light px-8">
        Are you looking for sign company that has the right <span className="underline font-semibold">process</span>, <span className="underline font-semibold">price</span>, <span className="underline font-semibold">products</span> and <span className="underline font-semibold">people</span>? Fill out the form to receive a 100% FREE sign quote on your next sign, vehicle or promotional item.
      </p>
      <h4 className="pt-6 text-2xl font-semibold">What we strive for:</h4>
      <ul className="list-decimal">
        <ol>An efficient <span className="underline font-semibold">process</span> saves you money</ol>
        <ol>An affordable <span className="underline font-semibold">price</span>, helps make a great product</ol>
        <ol>A great <span className="underline font-semibold">product</span> makes a happy customer</ol>
        <ol>Great <span className="underline font-semibold">people</span> keep happy customers</ol>
      </ul>
      <p className="mt-8">
        <Link to="/free-quote">
          <Button size="xl">Free Quote</Button>
        </Link>
      </p>
    </section>
  </Layout>
);
