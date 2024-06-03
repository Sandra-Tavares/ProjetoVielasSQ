import styles from "./styles.module.css";
import {Footer} from "./../../components/Footer"
import {Header} from "./../../components/Header"

import React from 'react'

export const Carrinhodecompras = () => {
  return (
    
    <>
    
    <Header />
    
    <div className={styles.containercarcompras}>
      <h1>Carrinho de compras</h1>
      <p>Itens selecionados para compra: 1</p>
        <div className={styles.carcompras}>
         <img src="casaraocambuci.png" alt="casaraocambuci"/>
         <div className={styles.textomeio}>
            <p>Tipo de mídia:</p>
            <p>Resolução:</p>
            <p>Tipo de licença:</p>
            <p>Como posso Utilizar:</p>
         </div>
            <div className={styles.textodireita}>
                <p>Imagem do Creative</p>
                <p>Resolução 4000x6000 - 300 dpi - RGB</p>
                <p>Royalty-free | Ver resumo das licenças</p>
                <p>Disponível para todas as utilizações permitidas ao abrigo dos nossos "Termos de licença"</p>

                    <div className={styles.textodireitainf}>
                     <p> Selecionar para compra</p>
                    </div>
            </div>
        
    
            </div>
        <div className={styles.textoinf}>
          <p> Subtotal: Rs xx.xx</p>
        </div>
    
        <div className={styles.botaoprosseguir}>
            <p>PROSSEGUIR COM A COMPRA</p>
            </div>
    
    
    </div>


<Footer />

</>

)

}