import { useEffect, useState, useRef } from "react";
import BoardTile from "./BoardTile";

const Home = () => {
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    setStatus("Loading");
    fetch("http://127.0.0.1:8000/board/")
      .then((response) => response.json())
      .then(setList)
      .then(() => setStatus("Success"))
      .catch(() => setStatus("Error"));
  }, []);
  
  return (
    <section className="home">
      <div>
        <>
          {status === "Loading" && <div>Loading...</div>}
          {status === "Error" && <div>There was an error</div>}
          {status === "Success" && list.map((todo) => <BoardTile />)}
        </>
      </div>
    </section>
  );
};

export default Home;
