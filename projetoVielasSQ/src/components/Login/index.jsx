
  import styles from './styles.module.css'
  export const Login = () => {
    return (
    <>
    <div className={styles.tela_login}>
      
    <div className={styles.container}>
      <h1>Bem Vindo!</h1> 
      <input type='text'placeholder="Email"/>
      <input type="password" placeholder="Senha"/>
    <div>me mantenha informado</div>
    
    <div className={styles.button}>
      <button>ENTRAR</button>

    <div className={styles.esqueceu_senha}>
      <a  href="#Esqe" id="forgot-pass">Clique aqui</a>

  </div>
  </div>
  </div>
  </div> 
  </>  
    )
  }
