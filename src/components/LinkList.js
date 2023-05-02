import React from 'react';
import Link from './Links';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query {
  producciones {
    id
    nombre
    temporadas
    capitulos
    duracion
    clasificacion
    categoria
    idioma
    plataforma
    director
    protagonista

  }
}
`
;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

/*const LinkList = () => {
  const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];*/

  return (
    <div>
      {data && (
        <>
          {data.producciones.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;