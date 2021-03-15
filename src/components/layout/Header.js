import { Link } from 'gatsby';
import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Link to="/"><LogoIcon /></Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/about">
          About
        </Link>
        <Link className="px-4" to="/signs">
          Signs
        </Link>
        <Link className="px-4" to="/blog">
          Blog
        </Link>
        <Link className="px-4" to="/contact">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <Link to="/free-quote">
          <Button className="text-sm">Free Quote</Button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
