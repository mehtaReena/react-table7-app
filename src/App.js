

import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import data from './data.json'

import "./App.css";
import LeftPanel from "./LeftPanel";

function App() {


  console.log(data)

  const columns = [
    {
      Header: "  ",
      },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "T",
      accessor: "T",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "End Date",
      accessor: "endDate",
      Cell: ({ cell: { value } }) =>
        value || "-",
    },
    {
      Header: "Year",
      accessor: "year",
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Quater",
      accessor: "quatar",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      Header: "Session",
      accessor: "session",
      // disable the filter for particular column

      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Class Code",
      accessor: "classCode",

      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Style",
      accessor: "style",
      Filter: SelectColumnFilter,
      Cell: ({ cell: { value } }) => value || "-",
    },
  ];

  return (
    <div className="App">
      <LeftPanel />

      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;