import React from 'react';
import { connect } from 'frontity';
import ProductLayout from './product-layout';
import ProductCarousel from '../Products/carousel';

const HomeLayou = ({ state }) => {
    return (
        <div>
            <ProductLayout CategoriesTitle="Safety Equipment's" />
            <ProductLayout CategoriesTitle="Industrial Plant" />
            <ProductLayout CategoriesTitle="Lab Equipment" />
        </div>
    )
}

export default connect(HomeLayou);
