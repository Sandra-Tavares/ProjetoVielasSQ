import styles from'./styles.module.css'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () =>  {
  return (

    <div className={styles.container}>
          <div className={styles.vielas}> 
            <h3>VIELAS</h3>
              <div className={styles.icon}>
                <a><TiSocialFacebookCircular className={styles.icons}/></a>
                <a><FaInstagram className={styles.icons}/></a>
                <a><FaTwitter className={styles.icons}/></a>
                <a><FaWhatsapp className={styles.icons}/></a>
                <a><FaLinkedinIn className={styles.icons}/></a>
              </div>
          </div>
               <div className={styles.textos1}>
                 <p>Quem Somos</p>
                 <p>Equipe</p>
                 <p>poie</p>
                 <p>Fale Conosco</p>
               </div>
    </div>
  )
}
