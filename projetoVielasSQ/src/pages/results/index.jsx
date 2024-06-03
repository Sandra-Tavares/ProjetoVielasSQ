import styles from "./styles.module.css";
import {Footer} from "./../../components/Footer"
import {Header} from "./../../components/Header"
import {Search} from "./../../components/Search"
import React from 'react'

export const Results = () => {
  return (
    
    <>
    
    <Header />
    <Search />
    
    <div className={styles.containerresults}>
      <h1>Resultado em Coleções</h1>
      <div className={styles.result}>
        <img src="casaraocambuci.png" alt="casaraocambuci"/>
        <div className={styles.texto2}>
        <h2>Crise Financeira</h2>
        <p>Como a alta dos preços impacta as famílias das periferias</p>
        </div>
        </div>
 

   <div className={styles.outros}>
      <div className={styles.title}>
      <h1> Outros Resultados</h1>
      </div>
          {/* <div className={styles.Fotoparacompra}> */}
          <div className={styles.container_fotosSemelhantes}>
          <div className={styles.card1Wrapper}>
            <div className={styles.card1}>
              <img src="semelhantes1.png" alt="semelhantes1"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes2.png" alt="semelhantes2"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes3.png" alt="semelhantes3"/>
            </div>
            </div>
            <div className={styles.card1Wrapper}>
            <div className={styles.card1}>
              <img src="semelhantes4.png" alt="semelhantes4"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes5.png" alt="semelhantes5"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes6.png" alt="semelhantes6"/>
            </div>
            </div>
            <div className={styles.card1Wrapper}>
            <div className={styles.card1}>
              <img src="semelhantes7.png" alt="semelhantes7"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes8.png" alt="semelhantes8"/>
            </div>
            <div className={styles.card1}>
              <img src="semelhantes9.png" alt="9"/>    
            </div>
            </div>
      </div>
      </div>
  </div>


      <Footer />
  
    
    </>

  )
}
