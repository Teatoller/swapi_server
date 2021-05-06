/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
import {Spinner} from "../../../../../Spinner/Spinner";
import {PeopleFunc} from "./PeopleFunc/PeopleFunc";

export const PeopleQueryFunc = ({
  loading,
  data,
  search,
  handleDetailView,
}) => (
    <>
      {loading ? <Spinner />: <PeopleFunc data={data} 
      search={search} handleDetailView={handleDetailView} />}
    </>
  );
  PeopleQueryFunc.propTypes = {
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    handleDetailView: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
export default PeopleQueryFunc;
