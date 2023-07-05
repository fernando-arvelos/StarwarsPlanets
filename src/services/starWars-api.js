function removeResidents(results) {
  return results.map((result) => {
    delete result.residents;
    return result;
  });
}

export default async function getPlanets() {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  return removeResidents(data.results);
}
