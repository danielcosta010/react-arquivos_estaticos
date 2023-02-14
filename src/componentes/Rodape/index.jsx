import React from 'react'
import styles from './Rodape.module.scss'
import linkedin from '../../assets/icones/linkedin.svg'
import github from '../../assets/icones/github.svg'
import instagram from '../../assets/icones/twitter.svg'

function Rodape() {
  return ( 
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a 
          href="https://www.linkedin.com/in/daniel-costa010"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="logo facebook" />
        </a>
        <a 
          href="https://github.com/danielcosta010"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="logo twitter" />
        </a>
        <a 
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="logo instagram" />
        </a>

      </div>
      <p>Desenvolvido por Daniel Costa, curso react Alura</p>
    </footer>
  );
}

export default Rodape;