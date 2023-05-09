import ReactPaginate from "react-paginate";
import "./App.css";
// import Access from "./components/Access";
import Card from "./components/Card";
// import Lock from "./components/Lock";
// import Name from "./components/Name";
// import Status from "./components/Status";
import Table from "./components/Table";

function App() {
  // const data = DummyData;
  const handlePageClick = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="main_table">
        <Table />
        <Card />
      </div>
      {/* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={6}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        breakLabel="..."
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
}

export default App;
