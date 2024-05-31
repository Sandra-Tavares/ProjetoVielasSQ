import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const data = [
    { id: '1', image: 'foto1.jpeg' },
    { id: '2', image: 'foto2.png' },
    { id: '3', image: 'foto3.png' },
  ];

<Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Slider"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>


   