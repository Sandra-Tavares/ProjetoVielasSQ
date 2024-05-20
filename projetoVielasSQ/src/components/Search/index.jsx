import styles from './styles.module.css';
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.pesquisa}>
        <input
          type='text'
          placeholder="BUSCA"
          className={styles.inputField}
        />
      </div>
    </div>
  );
};
