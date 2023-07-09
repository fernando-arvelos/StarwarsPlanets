export default async function getPlanets() {
  const url = 'https://swapi.dev/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  data.results.map((planet) => (delete planet.residents));
  return data;
}
