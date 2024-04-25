import styles from'./styles.module.css'

export const Footer = () =>  {
  return (

    <div className={styles.container}>
          <div className={styles.vielas}> 
                  <h3>VIELAS</h3>
                  </div>
        
            <div className={styles.icon}>
            <a>icones</a>
            </div>
            <div className={styles.texto1}>
                 <p>Quem Somos</p>
                 <p>Equipe</p>
                 <p>Apoie</p>
                 <p>Fale Conosco</p>
                </div>
    </div>
  )
}
