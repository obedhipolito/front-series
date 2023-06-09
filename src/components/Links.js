import React from 'react';
import '../styles/index.css'

const Link = (props) => {
  const { link } = props;
  return (
    <div className='card mt-3' style={{ width: "24rem"}}>
      <div className='card-body'>
        <h3 className="card-title">{link.nombre}</h3>
        <h5 className="card-subtitle mb-2 text-body-secondary"><b> {link.plataforma} </b></h5>
        <p className="card-text">
          <b>idioma: </b> {link.idioma}
        </p> 
        <p className="card-text">
           <b>categoria: </b> {link.categoria}
        </p> 
        <p className="card-text">
            <b>clasificacion: </b> {link.clasificacion}
        </p>
        <p className="card-text">
          <b>Capitulos: </b> {link.capitulos}
        </p>
        <p className="card-text">
          <b>Temporadas: </b> {link.temporadas}
        </p>
        <p className="card-text">
          <b>Duracion: </b> {link.duracion}
        </p>
        <p className="card-text">
          <b>Director: </b> {link.director}
        </p>
        <p className="card-text">
          <b>Protagonista: </b> {link.protagonista}
        </p>
        <p className="card-text">
          <b>Reseña: </b> {link.resena}
        </p>
      </div>
    </div>
  );
};

export default Link;