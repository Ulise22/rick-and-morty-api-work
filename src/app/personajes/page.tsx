import Image from 'next/image'
import Link from 'next/link'

const pageNumber = 1
async function getData () {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)

  if (!res.ok) {
    throw new Error('Fallaste al hacer el fetch')
  }

  return res.json()
}

export default async function Personajes () {
  const data = await getData()
  const characters = data.results
  return (
    <main className='w-full flex gap-10 items-center flex-col'>
      <h1> {data.info.pages} </h1>
      {characters.map((char : object) => {
        return (
          <section key={char.id}>
            <Link className='bg-black text-6xl w-auto mb-6 text-white ' href='personajes/[id]' as={`/personajes/${char.id}`}>{char.name}</Link>
            <Image className='w-auto h-auto' src={char.image} alt='image extracted from the Rick and Morty API' width={500} height={500} />
          </section>
        )
      })}
    </main>
  )
}
