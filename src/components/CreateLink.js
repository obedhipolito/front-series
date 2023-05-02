import React, { useState } from 'react';
import  { useMutation, gql} from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!
    $idioma: String!
    $categoria: String!
    $clasificacion: String!
    $temporadas: Int!
    $capitulos: Int!
    $plataforma: String!
    $duracion: Int!
    $director: String!
    $protagonista: String!

  ) {
    createProducciones(nombre: $nombre, idioma: $idioma, categoria: $categoria, clasificacion: $clasificacion, temporadas: $temporadas, capitulos: $capitulos, plataforma: $plataforma, duracion: $duracion, director: $director, protagonista: $protagonista) {
      id
      nombre
      temporadas
    }
  }
  `;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    idioma: '',
    categoria: '',
    clasificacion: '',
    temporadas: 0,
    capitulos: 0,
    plataforma: '',
    duracion: 0,
    director: '',
    protagonista: ''

  });

  const navigate = useNavigate();

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      nombre: formState.nombre,
      idioma: formState.temporadas,
      categoria: formState.categoria,
      clasificacion: formState.clasificacion,
      temporadas: formState.temporadas,
      capitulos: formState.capitulos,
      plataforma: formState.plataforma,
      duracion: formState.duracion,
      director: formState.director,
      protagonista: formState.protagonista
    },
    onCompleted: () => navigate('/')
  });


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre"
          />
          <input
            className="mb2"
            value={formState.idioma}
            onChange={(e) =>
              setFormState({
                ...formState,
                idioma: e.target.value
              })
            }
            type="text"
            placeholder="Idioma"
          />
          <input
            className="mb2"
            value={formState.categoria}
            onChange={(e) =>
              setFormState({
                ...formState,
                categoria: e.target.value
              })
            }
            type="text"
            placeholder="Categoria"
          />
          <input
            className="mb2"
            value={formState.clasificacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                clasificacion: e.target.value
              })
            }
            type="text"
            placeholder="Clasificacion"
          />
          <input
            className="mb2"
            value={formState.temporadas}
            onChange={(e) =>
              setFormState({
                ...formState,
                temporadas: e.target.value
              })
            }
            type="text"
            placeholder="Temporadas"
          />
          <input
            className="mb2"
            value={formState.capitulos}
            onChange={(e) =>
              setFormState({
                ...formState,
                capitulos: e.target.value
              })
            }
            type="text"
            placeholder="Capitulos"
          />
          <input
            className="mb2"
            value={formState.plataforma}
            onChange={(e) =>
              setFormState({
                ...formState,
                plataforma: e.target.value
              })
            }
            type="text"
            placeholder="Plataforma"
          />
          <input
            className="mb2"
            value={formState.duracion}
            onChange={(e) =>
              setFormState({
                ...formState,
                duracion: e.target.value
              })
            }
            type="text"
            placeholder="Duracion"
          />
          <input
            className="mb2"
            value={formState.director}
            onChange={(e) =>
              setFormState({
                ...formState,
                director: e.target.value
              })
            }
            type="text"
            placeholder="Director"
          />
          <input
            className="mb2"
            value={formState.protagonista}
            onChange={(e) =>
              setFormState({
                ...formState,
                protagonista: e.target.value
              })
            }
            type="text"
            placeholder="Protagonista"
          />
        </div>
        <button type="submit">SUBIR</button>
      </form>
    </div>
  );
};

export default CreateLink;