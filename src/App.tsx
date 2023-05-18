import "./App.css";

import Table from "./components/Table";
import Card from "./components/TableData/Card/Card";
import Pagination from "./components/TableData/Pagination/Pagination";

function App() {
  return (
    <div className="main_table">
      <Table />
      <Pagination />

      <Card />
    </div>
  );
}

export default App;
