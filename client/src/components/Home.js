import "../css/style.css";
import { useQuery, gql } from "@apollo/client";
import HomeNav from "./Navbar/HomeNav";

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

const Home = (props) => {
  const { loading, error, data } = useQuery(PEOPLE_RESULTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleDetailView = (e) => {
    const { history } = props;

    e.preventDefault();
    const attribute = e.currentTarget;
    const starName = attribute.getAttribute("starName");
    localStorage.setItem("starName", starName);

    history.push("/stardetail");
  };

  const stars = data.results.map((item, index) => {
    return (
      <tr key={item.id}>
        <td className="peopledata text-center">{index + 1}</td>
        <td className="peopledata text-center">{item.name}</td>
        <td className="peopledata text-center">{item.height}</td>
        <td className="peopledata text-center">{item.mass}</td>
        <td className="peopledata text-center">{item.gender}</td>
        <td className="peopledata text-center">{item.homeworld}</td>
        <td className="peopledata text-center">
          <button
            className="btn btn-sm btn-primary"
            type="button"
            starName={item.name}
            coLocation={item.location}
            onClick={handleDetailView}
          >
            View
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <HomeNav />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5 className="text-secondary h6">Star Wars</h5>
            <div className="table-responsive">
              <table className="table table-sm table-md table-striped table-hover table-bordered text-secondary">
                <thead>
                  <tr>
                    <th>#</th>
                    <th scope="col">Name</th>
                    <th scope="col">height</th>
                    <th scope="col">Mass</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Homeworld</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{stars}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
