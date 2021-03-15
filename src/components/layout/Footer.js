import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <hr />
    <footer className="container mx-auto py-16 px-3 mt-16 mb-8 text-gray-800">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Visit Us</h2>
          <p className="mt-5">2601 Central Point Parkway<br />Lima, OH 45804<br /><a href="tel:4192242231">419-224-2231</a></p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Terms & Conditions</h2>
          <ul className="mt-4 leading-loose">
            <li>
              &copy; Copyright {year} Sign Solutions of Ohio.
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://www.facebook.com/SignSolutionsOfOhio" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/signsolutionsoh" target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
