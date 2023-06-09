import React from 'react';
import { Link } from 'react-router-dom';


const MoreService = () => {
  return (
    <div>
      <Link to="/question">Preguntas y respuestas</Link>
      <div className="ml1">|</div>
      <Link to="/gramatic">correccion de Texto</Link>
      <div className="ml1">|</div>
      <Link to="/translate">Traductor</Link>
    </div>
  );
};

export default MoreService;