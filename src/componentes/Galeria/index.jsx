import React, { useState } from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards';


function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(valor => valor.tag))]

  const filtraFoto = (tag) => {
    const fotosFiltradas = fotos.filter(foto => foto.tag === tag)

    setItens(fotosFiltradas)
  }
  return ( 
    <section className={styles.galeria}>
      <h2 className={styles.galeria__titulo}>Navegue pela galeria</h2>
      <Tags 
        tags={tags} 
        filtraFoto={filtraFoto} 
        setItens={setItens} 
        fotos={fotos}
      />
      <Cards 
        itens={itens} 
        styles={styles}
      />
    </section>
  );
}

export default Galeria;