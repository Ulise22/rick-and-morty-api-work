import Link from 'next/link'

function getData (id: number) {
  return fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then(res => res.json())
}

export default async function Loc ({ params } : {params: {id:number}}) {
  const location = await getData(params.id)
  return (
    <main>
      <h1> {location.name} </h1>

      <Link className='text-red-400 bg-green-300 p-2 rounded-lg mt-4' href='/locaciones'>Atrás</Link>
    </main>
  )
}
