import { useState } from "react";
import "./App.css";
import Access from "./components/Access";
import Card from "./components/Card";
import { DummyData } from "./components/DummyData";
import Lock from "./components/Lock";
import Name from "./components/Name";
import Status from "./components/Status";
interface DummyDataInter {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  removable: string | boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
function App() {
  const data = DummyData;
  const [showCard, setShowCard] = useState(false);
  const [currentUser, setCurrentUser] = useState<DummyDataInter>();

  const handleMouseEnter = (currentData: DummyDataInter) => {
    setShowCard(true);
    setCurrentUser(currentData);
  };
  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <div className="main_table">
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
                onMouseEnter={() => handleMouseEnter(data)}
                onMouseLeave={() => handleMouseLeave()}
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
      {showCard ? <Card hoverData={currentUser!} /> : <></>}
    </div>
  );
}

export default App;
