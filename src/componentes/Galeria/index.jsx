import React from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards';


function Galeria() {
  return ( 
    <section className={styles.galeria}>
      <h2 className={styles.galeria__titulo}>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles}/>
    </section>
  );
}

export default Galeria;