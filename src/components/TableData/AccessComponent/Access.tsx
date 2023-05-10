type props = {
  owner: boolean;
};
import { memo } from "react";

const Access = ({ owner }: props) => {
  return (
    <>
      {owner ? (
        <p className="ownerTab">owner</p>
      ) : (
        <select className="select_menus">
          <option value="manager">manager</option>
          <option value="read">read</option>
        </select>
      )}
    </>
  );
};

export default memo(Access);
