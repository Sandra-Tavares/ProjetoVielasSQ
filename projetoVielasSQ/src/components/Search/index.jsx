  import styles from './styles.module.css';

  export const Search = () => {
    return (
      <>
        <div className={styles.mainContainer}>
          <div className={styles.pesquisa}>
            <input type='text' placeholder="BUSCA" />
          </div>
        </div>
      </>
    );
  };
