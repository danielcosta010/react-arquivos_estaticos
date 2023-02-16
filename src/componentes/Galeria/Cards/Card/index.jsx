import React from 'react';
import favorito from './favorito.png'
import open from './open.png'



function Card({ item, style }) {
  return ( 
    <li className={style.galeria__card}>
      <img
        className={style.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={style.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="ícone de coração ou favoritar" />
          <img src={open} alt="icone de expandir" />
        </span>
      </div>
    </li>
  );
}

export default Card;