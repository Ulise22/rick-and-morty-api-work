import Link from 'next/link'

function getData (id: number) {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(res => res.json())
}

export default async function Cap ({ params } :{params : {id : number}}) {
  const chapter = await getData(params.id)
  return (
    <main>
      <h1>Episodio</h1>
      <h2> {chapter.name} </h2>
      <Link className='bg-green-400 mt-6 rounded-md p-2 text-orange-400' href='/episodios'>Atrás</Link>
    </main>
  )
}
