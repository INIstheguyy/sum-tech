import { React, useState, useEffect } from "react";
import styles from "../Styles/Table.module.css";


function Table({
  data = [],
  tableHeaders = [],
  heading,
  action = () => {},
  loading = false,
  searchFunction = null,
  itemsPerPage = 10,
}) {
  const [_data, _setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");



  useEffect(() => {
    if (data) {
      _setData(data);
    }
  }, [data]);
  useEffect(() => {
    if (!searchFunction) {
      if (searchQuery) {
        _setData(
          data.filter((item) => {
            return (
              Object.values(item).findIndex((str) => {
                if (str) {
                  return str.toString().includes(searchQuery);
                } else {
                  return false;
                }
              }) !== -1
            );
          })
        );
      
      } else {
        _setData(data);
      }
    } else {
      (async () => await searchFunction(searchQuery))();
    }
  }, [data, searchFunction, searchQuery]);



  return (
    <div className={styles.table_wrapper}>
      <div className={styles.table_content}>
        <div className={styles.table_header}>
          <p className={styles.table_heading}>{heading}</p>
          <div className={styles.header_menu}>
            <div className={styles.search_wrapper}>
              <input
                className={styles.menu_search}
                type="search"
                name="search"
                value={searchQuery}
                id=""
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
                placeholder="Search"
              />
            </div>
           
          </div>
        </div>
        {!loading ? (
          <div className={styles}>
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  {tableHeaders &&
                    tableHeaders.map((header) => (
                      <th key={header.key}>{header.value}</th>
                    ))}
                </tr>
              </thead>

              {_data !== null && _data !== undefined && _data.length > 0 ? (
                <tbody>
                  {_data.map((element, index) => {


                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {tableHeaders !== null &&
                          tableHeaders !== undefined &&
                          tableHeaders.map((header, thIndex) => (
                            <td key={thIndex}>{element[header.key]}</td>
                          ))}
                        <td>{action(index)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={tableHeaders.length + 2}>No data available</td>
                  </tr>
                </tbody>
              )}
            </table>
           
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Table;
