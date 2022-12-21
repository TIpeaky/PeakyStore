import styles from './NotFound.module.scss';
import NotFoundImage from './../../images/not_found.jpg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <img src={NotFoundImage} alt="página não encontrada" />
    </div>
  );
}