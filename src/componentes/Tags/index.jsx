import React from 'react';
import styles from './Tags.module.scss'
//import fotos from '../Galeria/fotos.json'

function Tags({ tags, filtraFoto, setItens, fotos }) {
  return ( 
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => {
          return <li key={tags} onClick={() => filtraFoto(tag)}>{tag}</li>
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}

export default Tags;