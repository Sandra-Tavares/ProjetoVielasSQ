import styles from './styles.module.css'

export const Search = () => {
  return (
    <>
   <div className={styles.pesquisa}>

     <input type='text' placeholder="BUSCA"/>
    </div>

    <ul>
            <li><a href="#">#Paraisopolis</a></li>
            <li><a href="#">#Saúde</a></li>
            <li><a href="#">#Hospitais</a></li>
            <li><a href="#">#Coperifa</a></li>
            <li><a href="#">#CasaDeCultura</a></li>
            <li><a href="#">#Hospitais</a></li>
            <li><a href="#">#Eleições2022</a></li>
            <li><a href="#">#Urnas</a></li>
        </ul>
  
    <h3>VIELAS</h3>
    <p>Um banco de imagens pensado<br>para mostrar a diversidade das periferias de São Paulo. 
    Nascido nas quebradas e fomentado por quem vive e pensa nelas.</br></p>
    <div className = {styles.gallery}>
      <img src='foto1.jpeg'></img>
      <img src='foto2.jpeg'></img>
      <img src='foto3.jpeg'></img>
    </div>

  <div className={styles.container}>
    <h3>COLEÇÕES</h3>
    <div className={styles.card}>
            <img src="foto4.jpg"></img>
            <h4>eleições 2022 </h4>
            <p>Como estão as eleições nas periferias e Grande São Paulo</p>
    </div>

    <div className={styles.card}>
            <img src="foto5.jpg"></img>
            <h4>Arte de Rua</h4>
            <p>Grafites que enfeitam as ruas das quebradas</p>
    </div>

    <div className={styles.card}>
            <img src="foto5.jpg"></img>
            <h4>Crise Financeira</h4>
            <p>como a alta dos preços impacta as famílias das periferias</p>
    </div>
     
    </div>
    

    </>
  )
}
