import "./css/style.css";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import { NavBar } from "./components/NavBar.js";
import SwapiRouter from "./routes/SwapiRouter.js";

// const PEOPLE_RESULTS = gql`
//   query GetPeopleResults {
//     results {
//       name
//       height
//       mass
//       gender
//       homeworld
//     }
//   }
// `;

// export const App = (props) => {
//   const { loading, error, data } = useQuery(PEOPLE_RESULTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   const stars = data.results.map((item, index) => {
//     return (
//       <tr key={item.id}>
//         <td className="peopledata text-center">{index + 1}</td>
//         <td className="peopledata text-center">{item.name}</td>
//         <td className="peopledata text-center">{item.height}</td>
//         <td className="peopledata text-center">{item.mass}</td>
//         <td className="peopledata text-center">{item.gender}</td>
//         <td className="peopledata text-center">{item.homeworld}</td>
//       </tr>
//     );
//   });
//   return (
//     <Router>
//       <div>
//         <NavBar/>
//         <Home stars={stars}/>

//         <SwapiRouter />
//       </div>
//     </Router>
//   );
// };
// export default App;

// export const Home = (props) => {
//   return (
//     <>
//   <h2>Home</h2>
//   <div className="container">
//         <div className="row">
//           <div className="col-sm">
//             <h5 className="text-secondary h6">Star Wars</h5>
//             <div className="table-responsive">
//               <table className="table table-sm table-md table-striped table-hover table-bordered text-secondary">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">height</th>
//                     <th scope="col">Mass</th>
//                     <th scope="col">Gender</th>
//                     <th scope="col">Homeworld</th>
//                   </tr>
//                 </thead>
//                 <tbody>{props.stars}</tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//   </>
//   );
// };

// export const About = () => {
//   return <h2>About</h2>;
// };

// export const Users = () => {
//   return <h2>Users</h2>;
// };

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

function App(props) {
  const { loading, error, data } = useQuery(PEOPLE_RESULTS);
  console.log("......", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleStarProfile = (e) => {
    const { history } = props;

    e.preventDefault();
    const attribute = e.currentTarget;
    const starid = attribute.getAttribute("starid");
    localStorage.setItem("starid", starid);
    const starName = attribute.getAttribute("starName");
    localStorage.setItem("starName", starName);

    history.push("/about");
    // setLoading(false);
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
        <td className="fadmindepotdata text-center">
          <button
            className="btn btn-sm btn-success"
            type="button"
            starid={item.id}
            starName={item.name}
            onClick={handleStarProfile}
          >
            View
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      {/* <div className="container">
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
                  </tr>
                </thead>
                <tbody>{stars}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <NavBar />
      <Home stars={stars} />
      <SwapiRouter />
    </>
  );
}

export default App;

export const Home = (props) => {
  console.log("ting ting..", props);
  return (
    <>
      <h2>Home</h2>
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
                  </tr>
                </thead>
                <tbody>{props.stars}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const About = () => {
  return (
    <>
      <h2>About</h2>
      <h6>Star Profile</h6>
      <p>Lorem....</p>
    </>
  );
};

export const Users = () => {
  return <h2>Users</h2>;
};
