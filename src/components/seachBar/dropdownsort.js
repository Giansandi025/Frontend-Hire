import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdownsort.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const DropdownSort = (
  sortByName,
  sortBySkill,
  sortByLocation,
  sortByFreelance,
  sortByFulltime
) => {
  return (
    <div className={`dropdown ${styles["dropdown-wrapper"]}`}>
      <Link
        className={`btn dropdown-toggle ${styles.toggler}`}
        to="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <label className={styles.label}>Kategori</label>
      </Link>

      <ul
        className={`dropdown-menu ${styles.menu}`}
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <Link to={sortByName} className={styles.options}>
            Sortir berdasarkan nama
          </Link>
        </li>
        <li>
          <Link to={sortBySkill} className={styles.options}>
            Sortir berdasarkan Skill
          </Link>
        </li>
        <li>
          <Link to={sortByLocation} className={styles.options}>
            Sortir berdasarkan Lokasi
          </Link>
        </li>
        <li>
          <Link to={sortByFreelance} className={styles.options}>
            Sortir berdasarkan freelance
          </Link>
        </li>
        <li>
          <Link to={sortByFulltime} className={styles.options}>
            Sortir berdasarkan fulltime
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownSort;
