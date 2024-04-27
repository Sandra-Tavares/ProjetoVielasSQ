import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Search = () => {
  const data = [
    { id: '1', image: 'foto1.jpeg' },
    { id: '2', image: 'foto2.png' },
    { id: '3', image: 'foto3.png' },
  ];
  return (
    <>
      <div className={styles.pesquisa}>
        <input type='text' placeholder="BUSCA" />
      </div>

      <ul className={styles.barraMenu}>
        <li><a href="#">#Paraisopolis</a></li>
        <li><a href="#">#Saúde</a></li>
        <li><a href="#">#Hospitais</a></li>
        <li><a href="#">#Coperifa</a></li>
        <li><a href="#">#CasaDeCultura</a></li>
        <li><a href="#">#Hospitais</a></li>
        <li><a href="#">#Eleições2022</a></li>
        <li><a href="#">#Urnas</a></li>
      </ul>

      <div className={styles.container}>
        <h3>VIELAS</h3>
        <p>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
          Nascido nas quebradas e fomentado por quem vive e pensa nelas.</p>

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
      </div>

    <div className={styles.maisfotos}>
    <h3>COLEÇÕES</h3>
    <div className={styles.card1}>
            <img src="foto4.jpeg" alt="Foto1"/>
            <h4>eleições 2022 </h4>
            <p>Como estão as eleições nas periferias e Grande São Paulo</p>
            </div>
            <div className={styles.card2}>
            <img src="foto5.jpeg" alt="Foto1"/>
            <h4>Arte de Rua </h4>
            <p>Grafites que enfeitam as ruas das quebradas</p>


            </div>
    </div>
</>

  );
};