// OfferCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { packages } from '../../data/packages';
import { PackageCard } from '../index';

import { Wrap } from './styles'

export function OfferCarousel() {
  return (
    <Wrap>
      <Swiper
        modules={[Grid, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={3}          // default desktop
        grid={{ rows: 2, fill: "row" }}
        breakpoints={{
          1200: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          850: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          0: { slidesPerView: 1, grid: { rows: 1, fill: "row" } },
        }}
        className="offer-swiper"
        // observers ajudam quando o swiper está dentro de containers dinâmicos
        observer={true}
        observeParents={true}
      >
        {packages.filter(p => p.offer).map(item => (
          <SwiperSlide>
            <PackageCard
              key={item.id}
              Image={item.img}
              Destination={item.destination}
              Details={item.description}
              Price={item.price}
              Quantity={item.peopleQuantity}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap >
  );
}

