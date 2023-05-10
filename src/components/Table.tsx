import {
  DummyDataInter,
  handleMouseEnter,
  handleMouseLeave,
  initType,
} from "../slice/Slice";
import Access from "./TableData/AccessComponent/Access";
import Lock from "./TableData/LocIcon/Lock";
import Name from "./TableData/Name-component/Name";
import Status from "./TableData/statusComponent/Status";
import SkeletonCard from "../skeleton/Skeleton";
import { memo } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Pagination from "./TableData/Pagination/Pagination";
const Table = () => {
  const data: DummyDataInter[] = useAppSelector(
    (state: { hover: { data: DummyDataInter[] } }) => state.hover.data
  );

  const state = useAppSelector(
    (state: { hover: { panding: Boolean } }) => state.hover.panding
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {!state ? (
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Access</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                <td
                  onMouseEnter={() => dispatch(handleMouseEnter(data))}
                  onMouseLeave={() => dispatch(handleMouseLeave())}
                >
                  <Name
                    first_name={data.first_name}
                    last_name={data.last_name}
                    avatar={data.avatar}
                    email={data.email}
                  />
                </td>

                <td>
                  {index === 0 ? (
                    <Status status={true} />
                  ) : (
                    <Status status={data.active} />
                  )}
                </td>
                <td>
                  {index === 0 ? (
                    <Access owner={true} />
                  ) : (
                    <Access owner={data.owner} />
                  )}
                </td>
                <td>
                  {index === 0 ? (
                    <Lock removable={false} />
                  ) : (
                    <Lock removable={data.removable} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <SkeletonCard />
      )}
      <Pagination />
    </>
  );
};

export default memo(Table);
