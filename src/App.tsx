import { lazy, Suspense } from "react";
import "./App.css";
import Table from "./components/Table";
// import Card from "./components/TableData/Card/Card";
import Pagination from "./components/TableData/Pagination/Pagination";
import SkeletonCard from "./skeleton/Skeleton";
const Card = lazy(() => import("./components/TableData/Card/Card"));
function App() {
  const mode_title = import.meta.env.VITE_APP_PROJECT_TITLE;

  return (
    <>
      <div className="main_table">
        <Suspense fallback={<SkeletonCard />}>
          {/* <Artists /> */}
          <Table />
        </Suspense>
        <Pagination />
        <Card />
      </div>
      <h2 className="mode_title">{mode_title}</h2>
    </>
  );
}

export default App;
