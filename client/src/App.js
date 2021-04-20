import "./App.css";
import { useQuery, gql } from "@apollo/client";

const PEOPLE_RESULTS = gql`
  query GetPeopleResults {
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PEOPLE_RESULTS);
  console.log("bling bling...", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const stars = data.results.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.height}</td>
        <td>{item.mass}</td>
        <td>{item.gender}</td>
        <td>{item.homeworld}</td>
      </tr>
    );
  });
  return (
    <>
      <div>
        <h5>Star Wars</h5>
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th scope="col">Name</th>
                <th scope="col">height</th>
                <th scope="col">Mass</th>
                <th scope="col">Gender</th>
                <th scope="col">Homeworld</th>
              </tr>
            </thead>
            <tbody>{stars}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
