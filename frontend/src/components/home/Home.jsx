import { useEffect, useState, useRef } from "react";
import BoardTile from "./BoardTile";
import BoardTileAdd from "./BoardTileAdd";
import "./home.css";

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Get board tiles
    fetch("http://127.0.0.1:8000/board/")
      .then((response) => response.json())
      .then(setBoards);
  }, [boards]);

  return (
    <section className="home">
      <div className="boards_container">
        {boards.map((board) => (
          <BoardTile board={board} />
        ))}
        <BoardTileAdd />
      </div>
    </section>
  );
};

export default Home;
