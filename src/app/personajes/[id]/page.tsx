import Image from 'next/image'
import Link from 'next/link'

function getCharacter (id : number) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
}

export default async function DentroDelPersonajes ({ params } : { params: {id: number} }) {
  const personaje = await getCharacter(params.id)
  return (
    <>
      <h1> {personaje.name} </h1>
      <Image className='w-auto h-auto' src={personaje.image} alt='' width={351} height={123} />
      <h2> {personaje.gender} </h2>

      <Link className='text-blue-500' href='/personajes'>Atrás</Link>
    </>
  )
}
