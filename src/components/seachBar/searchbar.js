import React from "react";
import DropdownSort from "./dropdownsort";
import { Link } from "react-router-dom";
import styles from "./searchbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import searchImg from "./search.png";

const Searchbar = ({
  onChange,
  onChangeSortBy,
  onClick,
  value,
  sortByName,
  sortBySkill,
  sortByLocation,
  sortByFreelance,
  sortByFulltime,
}) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        borderRadius: "10px",
        marginTop: "50px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        background: "white",
      }}
    >
      <input
        type="search"
        className={styles.search}
        placeholder="Search for any skill"
        onChange={onChange}
      />
      <div className={styles.searchImg}>
        <img src={searchImg} alt="search" style={{ width: "40px" }} />
      </div>
      <div className={styles.vl}></div>
      {/* <DropdownSort
        sortByName={sortByName}
        sortBySkill={sortBySkill}
        sortByLocation={sortByLocation}
        sortByFreelance={sortByFreelance}
        sortByFulltime={sortByFulltime}
      /> */}

      <select
        className="btn btn-transparent "
        defaultValue={"DEFAULT"}
        value={
          value
          // data.sortState
        }
        onChange={
          onChangeSortBy
          // (e) => setSortState(e.target.value)
        }
      >
        <option value="DEFAULT">Kategori</option>
        <option value="ascending">Sortir berdasarkan nama</option>
        <option value="">Sortir berdasarkan Skill</option>
        <option value="">Sortir berdasarkan Lokasi</option>
        <option value="">Sortir berdasarkan Freelance</option>
        <option value="">Sortir berdasarkan Fulltime</option>
      </select>

      <button
        type="submit"
        className={styles["search-button"]}
        onClick={onClick}
        value=""
        title="Search"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
