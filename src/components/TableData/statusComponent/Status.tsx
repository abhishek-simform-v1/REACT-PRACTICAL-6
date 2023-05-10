import { memo } from "react";

type props = {
  status: boolean;
};
const Status = ({ status }: props) => {
  return (
    <>
      {status ? (
        <p className="activetab">Active</p>
      ) : (
        <select className="select_menus">
          <option value="inactive">inactive</option>
          <option value="inactive">active</option>
        </select>
      )}
    </>
  );
};

export default memo(Status);
