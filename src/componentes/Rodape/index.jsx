import React from 'react'
import styles from './Rodape.module.scss'
import facebook from '../../assets/icones/facebook.svg'
import instagram from '../../assets/icones/instagram.svg'
import twitter from '../../assets/icones/twitter.svg'

function Rodape() {
  return ( 
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a 
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="logo facebook" />
        </a>
        <a 
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="logo twitter" />
        </a>
        <a 
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="logo instagram" />
        </a>

      </div>
      <p>Desenvolvido por alura</p>
    </footer>
  );
}

export default Rodape;