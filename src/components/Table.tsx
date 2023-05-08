import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DummyDataInter,
  handleMouseEnter,
  handleMouseLeave,
  initType,
} from '../slice/Slice';
import Access from './Access';
import Lock from './Lock';
import Name from './Name';
import Status from './Status';

const Table = () => {
  const data: DummyDataInter[] = useSelector(
    (state: initType) => state.hover.data
  );
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Access</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
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
              <Status status={data.active} />
            </td>
            <td>
              <Access owner={data.owner} />
            </td>
            <td>
              <Lock removable={data.removable} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
