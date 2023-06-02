import Link from 'next/link'

const pageNumber = 1

function getData () {
  return fetch(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)
    .then(res => res.json())
}

export default async function Episodes () {
  const data = await getData()
  const episodes = data.results
  return (
    <main>
      <h1>Episodios</h1>

      {episodes.map(ep => {
        return (
          <section key={ep.id}>
            <h2> {ep.name} </h2>
            <Link className='text-green-500' href='/episodios/[id]' as={`/episodios/${ep.id}`}>Ver</Link>
          </section>
        )
      })}
    </main>
  )
}
