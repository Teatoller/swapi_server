import React from "react";
import PropTypes from "prop-types";
import Footer from "../../common/Footer/Footer";
import {HomeNav} from "../../common/HomeNav/HomeNav";
import {SwapiMenu} from "./SwapiMenu/SwapiMenu";
import {Pagination} from "../../common/Pagination/Pagination";
import {PeopleQuery} from "./PeopleQuery/PeopleQuery";

export const HomeView = ({
  setPeoplePage,
  setPersonName,
  search,
  setSearch,
  loading,
  error,
  data,
  props,
  peoplePage,
}) => (
    <>
      <HomeNav />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4 className="text-secondary mt-1 mb-0">Star Wars People</h4>
            <SwapiMenu setSearch={setSearch} setPersonName={setPersonName} />
            <PeopleQuery
              props={props}
              error={error}
              loading={loading}
              data={data}
              search={search}
            />
          </div>
        </div>
        <Pagination
          data={data}
          setPeoplePage={setPeoplePage}
          peoplePage={peoplePage}
        />
      </div>
      <Footer />
    </>
  );
  HomeView.propTypes = {
    loading: PropTypes.bool.isRequired,
    setPeoplePage: PropTypes.func.isRequired,
    setPersonName: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.bool.isRequired,
    peoplePage: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    props: PropTypes.shape().isRequired
  };
export default HomeView;
