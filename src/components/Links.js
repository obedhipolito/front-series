import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        ({link.nombre})
        ({link.idioma})
        ({link.categoria})
        ({link.clasificacion})
        ({link.temporadas})
        ({link.capitulos})
        ({link.plataforma})
        ({link.duracion})
        ({link.director})
        ({link.protagonista})
      </div>
    </div>
  );
};

export default Link;