const pageNumber = 2

function getData () {
  return fetch(`https://rickandmortyapi.com/api/location?page=${pageNumber}`)
    .then(res => res.json())
}

export default async function Locations () {
  const data = await getData()
  const locations = data.results
  return (
    <main>
      <h1>Locaciones</h1>

      {locations.map(loc => {
        return (
          <section key={loc.id}>
            <h2>{loc.name}</h2>
          </section>
        )
      })}
    </main>
  )
}
