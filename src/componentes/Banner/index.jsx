import banner from '../../assets/icones/banner.png'
import styles from './Banner.module.scss'

function Banner() {
  return ( 
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="Banner" />
    </div>
  );
}

export default Banner;