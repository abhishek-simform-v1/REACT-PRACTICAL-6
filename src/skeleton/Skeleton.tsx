import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Access</th>
          </tr>
        </thead>
        <tbody>
          {Array(8)
            .fill(6)
            .map((index) => (
              <tr key={index}>
                <td>
                  <div className="avatar_name">
                    <div className="avatar">
                      <Skeleton borderRadius={`50%`} height={40} width={40} />
                    </div>
                    <div className="name_email">
                      <div className="first_name_last_name">
                        <p>
                          <Skeleton height={15} width={70} />
                          <Skeleton height={15} width={70} />
                        </p>
                      </div>
                      <p>
                        <Skeleton height={15} width={181} />
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="activetab">
                    <Skeleton height={40} width={100} />
                  </div>
                </td>
                <td>
                  <div className="activetab">
                    <Skeleton height={40} width={100} />
                  </div>
                </td>
                <td>
                  <div className="activetab">
                    <Skeleton height={40} width={40} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default SkeletonCard;
