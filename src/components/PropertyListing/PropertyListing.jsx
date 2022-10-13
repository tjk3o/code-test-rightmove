import React, { useEffect, useState } from 'react';
import { PROPERTIES_URL } from '../../constants';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(PROPERTIES_URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then((data) => setProperties(data))
            .catch((error) => console.error('Error: ', error));
    }, []);

    return (
        <ul className="PropertyListing">
            {properties?.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
