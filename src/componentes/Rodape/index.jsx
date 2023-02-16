import React from 'react'
import styles from './Rodape.module.scss'
import { ReactComponent as Linkedin} from 'assets/icones/linkedin.svg'
import { ReactComponent as Github} from 'assets/icones/github.svg'
import { ReactComponent as Instagram} from 'assets/icones/twitter.svg'

function Rodape() {
  return ( 
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a 
          href="https://www.linkedin.com/in/daniel-costa010"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a 
          href="https://github.com/danielcosta010"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a 
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>

      </div>
      <p>Desenvolvido por Daniel Costa, curso react Alura</p>
    </footer>
  );
}

export default Rodape;