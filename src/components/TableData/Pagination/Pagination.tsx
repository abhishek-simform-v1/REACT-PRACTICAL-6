import { memo } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../../../hooks/hooks";
import { getUserName } from "../../../slice/Slice";
import style from "./UserList.module.css";
const Pagination = () => {
  const dispatch = useAppDispatch();
  const handlePageClick = (data: { selected: number }) => {
    dispatch(getUserName(data.selected + 1));
  };

  return (
    <ReactPaginate
      previousLabel={<ArrowLeft />}
      nextLabel={<ArrowRight />}
      className={style.pagination}
      pageClassName={style.page}
      breakLabel="  . . . . .  "
      previousClassName={style.indicators}
      nextClassName={style.indicators}
      activeClassName={style.activepage}
      pageCount={10}
      initialPage={0}
      disableInitialCallback={false}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      renderOnZeroPageCount={null}
      onPageChange={handlePageClick}
    />
  );
};

export default memo(Pagination);
