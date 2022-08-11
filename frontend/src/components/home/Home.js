import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import BoardTile from "./BoardTile";
import BoardTileAdd from "./BoardTileAdd";
import "./home.css";

const Home = () => {
  const [status, setStatus] = useState("");
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/board/")
      .then((response) => response.json())
      .then(setBoards)
      .then(() => setStatus("Success"))
      .catch(() => setStatus("Error"));
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <section className="home">
      <div className="boards_container">
        {status === "Error" && <div>There was an error</div>}
        {status === "Success" &&
          boards.map((board) => {
            <>
              <BoardTile board={board} />
              <BoardTileAdd />
            </>;
          })}
      </div>
    </section>
  );
};

export default Home;
