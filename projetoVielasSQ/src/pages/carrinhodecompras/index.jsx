import styles from "./styles.module.css";
import {Footer} from "./../../components/Footer"
import {Header} from "./../../components/Header"
import React from 'react'

export const Carrinhodecompras = () => {
  return (
    
    <>
    
    <Header />
    
    <div className={styles.containercarcompras}>
      <div className={styles.titulo}>
        <h1>Carrinho de compras</h1>
        <p>Itens selecionados para compra: 1</p>
      </div>
        
        <div className={styles.carcompras}>
            <div className={styles.carImagem}>
                <img src="casaraocambuci.png" alt="casaraocambuci"/>
            </div>
          <div className={styles.textomeio}>
            <p>Tipo de mídia:</p>
            <p>Resolução:</p>
            <br></br>
            <p>Tipo de licença:</p>
            <br></br>
            <p>Como posso Utilizar:</p>
         </div>
            <div className={styles.textodireita}>
                <p>Imagem do Creative</p>
                <p>Resolução 4000x6000 - 300 dpi - RGB</p>
                <br></br>
                <p>Royalty-free | Ver resumo das licenças</p>
                <br></br>
                <p>Disponível para todas as utilizações permitidas ao abrigo dos nossos <span>Termos de licença</span></p>
                
                <div className={styles.textodireitainf}>
                    <input type="checkbox" />
                    <a> Selecionar para compra</a>
                </div>
            </div>
        </div>
         <div className={styles.textoinf}>
          <p> Subtotal: Rs xx.xx</p>
            
            <div className={styles.botaoprosseguir}>
                <button><h3>PROSSEGUIR COM A COMPRA</h3></button>
            </div>
         </div>
    </div>


<Footer />

</>

)

}