// OfferCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import styled from "styled-components";

import { packages } from '../../data/packages';
import { Button } from "../Button";

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
          <SwiperSlide key={item.id} className="offer-slide">
            <img src={item.img} alt={item.destination} />
            <article>
              <div className="titleCard">
                <h2>{item.destination}</h2>
                <i class="ri-heart-line"></i>
              </div>
              <p>{item.description}</p>
              <div className="detailsCard">
                <span>{item.price}</span>
                <p>x{item.peopleQuantity} pessoas</p>
              </div>
              <Button variant='secondary'>Adicionar ao Carrinho
                <i class="ri-shopping-cart-line"></i>
              </Button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
}

// Styled
const Wrap = styled.div`
  width: 100%;
  padding: 30px;

  /* container do swiper (geralmente tem .swiper class) */
  .offer-swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  /* ajuste importante: deixe o wrapper usar alinhamento correto */
  .offer-swiper .swiper-wrapper {
    /* garante que as "linhas" do grid iniciem no topo e não estiquem verticalmente */
    align-content: start;
    /* casos extremos: permite que o swiper calcule as colunas/linhas corretamente */
  }

  .offer-slide {
    background: #fff;
    border-radius: 12px;
    border-bottom-left-radius: 0;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    height: auto !important; /* ESSENCIAL: impede esticar */
    display: flex;
    flex-direction: column;
    transition: 0.5s all;

    &:hover{
      transform: scale(1.03);
      border-radius: 0;
    }
  }

  .offer-slide img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  .offer-slide article {
    padding: 12px;
    flex: 1 0 auto; /* evita expansão forçada */

    .titleCard{
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2{
        font-size: 20px;
        color: #ffd500ff;
      }

      i{
        font-size: 23px;
      }
    }

    .detailsCard{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      p{
        margin: 0;
        background-color: #ffd500ff;
        color: #fff;
        font-size: 14px;
        border-radius: 50px;
        padding: 7px;
      }
    }
  }

  /* Opcional: pager dots centralizados */
  .offer-swiper .swiper-pagination {
    margin-top: 12px;
  }
`;
