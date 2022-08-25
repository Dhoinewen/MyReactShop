import React, {useRef, useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import './ProductImgs.css'

import { Pagination } from "swiper";


const ProductImgs = ({gallery}) => {

    console.log(gallery)

    return (
        <div className="altBody">
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {gallery.map(productImg => <SwiperSlide key={productImg}><img src={productImg}  alt='productImg'/></SwiperSlide>)}
            </Swiper>

        </div>
    );
};

export default ProductImgs;