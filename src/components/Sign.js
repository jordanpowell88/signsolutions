import React from 'react';
import { Link } from 'gatsby';
import Card from '../components/Card';

const Sign = ({ type, image, link }) => (
    <div className="flex-1 px-3">
        <Link to={link}>
            <Card className="mb-8">
            <p className="font-semibold text-xl">{type}</p>
            <img src={image} className="mt-4" />
            </Card>
        </Link>
    </div>
);
export default Sign;