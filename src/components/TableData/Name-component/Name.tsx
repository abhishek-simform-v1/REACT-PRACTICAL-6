import { memo } from "react";

type Props = {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
const Name = ({ email, first_name, last_name, avatar }: Props) => {
  return (
    <div className="avatar_name">
      <img src={avatar} className="avatar" alt="avatar_img" />
      <div className="name_email">
        <div className="first_name_last_name">
          <p>
            {first_name} {last_name}
          </p>
        </div>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default memo(Name);
