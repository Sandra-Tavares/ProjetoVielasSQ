import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Search1} from '../../components/Search1';
import styles from './styles.module.css';

export const Fotoparacompra = () => {
    return (
        <>
        <Header/>
        <Search1/>
       <div className={styles.containerFotocompra}>
        <div className={styles.fotoEscolhida}>
        <img src="casaraocambuci.png" alt="casaraocambuci"/>
        </div>
        <div className={styles.texto}>
        <h3>Casarão do Cambuci</h3>
        
        <p>Vista da casa de Dona Magnólia no Cambuci </p>
        <br></br>
        <p>Foto <a href="https://agenciamural.org.br/muralista/iraromao">Ira Romão</a></p>
        <br></br>
       
       <div className={styles.carrinho}>
        <p>Adicionar ao carrinho (compra indivisual)</p>
        <p>Adicionar ao meu pacote (planos)</p>
        <br></br>
        <div className={styles.botaoComprar}>
           <button><h1>COMPRAR</h1></button> 
        </div>
        </div>
        </div>
        </div>

        <div className={styles.containerFotocompra2}>
        <div className={styles.fotoEscolhida2}>
        <img src="casaraocambuci.png" alt="casaraocambuci"/>
        </div>
        <div className={styles.texto2}>
        <h3>Crise Financeira</h3>
        <p>Como a alta dos preços impacta as famílias das periferias</p>
        </div>
        </div>

        <div className={styles.containerMenu2}>
            <ul className={styles.barraMenu2}>
              <li><a href="#">#Cambuci</a></li>
              <li><a href="#"><div id="Crise"></div></a></li>
              <li><a href="#">#Alimentação</a></li>
              <li><a href="#">#Dinheiro</a></li>
              <li><a href="#">#Cotidiano</a></li>
              <li><a href="#">#Hospitais</a></li>
            </ul>
          </div>

          <div className={styles.container_fotosSemelhantes}>
          <h3>Fotos semelhantes</h3>
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
            <div className={styles.card1Wrapper}></div>
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


       <Footer/>
        </>
    )
}

export default Fotoparacompra;