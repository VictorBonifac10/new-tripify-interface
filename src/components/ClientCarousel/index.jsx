import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, FreeMode } from 'swiper/modules';
import { depoiments } from '../../data/depoiments';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { ContainerCarousel } from './styles'

export function ClientCarousel() {

    return (
        <ContainerCarousel>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1200: { slidesPerView: 3 },
                    850: { slidesPerView: 2 },
                    600: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {depoiments.map((data) => (
                    <SwiperSlide>
                        <div className='clientCard'>
                            <img src={data.url} alt="Foto do Cliente" />
                            <h3>{data.client}</h3>
                            <p>{data.depoiment}</p>
                            <p><b>{data.loyalty}</b></p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel >
    )
}