import React, { useState } from "react";
import "./TicTac.css";
const TicTac = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setcells] = useState(Array(9).fill(""));
  const[winner , setWinner]=useState()
  const checkwinner = (squres) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [2, 4, 6],
        [0, 4, 8],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squres[pattern[0]] === "" ||
          squres[pattern[1]] === "" ||
          squres[pattern[2]] === ""
        ) {
        } else if (
          squres[pattern[0]] === squres[pattern[1]] &&
          squres[pattern[1]] === squres[pattern[2]]
        ) {
          setWinner(squres[pattern[0]])
        }
      });
    }
  };

  const handclick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked...");
      return;
    }

    let squres = [...cells];
    if (turn === "X") {
      squres[num] = "X";
      setTurn("O");
    } else {
      squres[num] = "O";
      setTurn("X");
    }
    checkwinner(squres)
    setcells(squres);
    // console.log(squres);
  };
  const handleRestart = () =>{
    setWinner(null)
    setcells(Array(9).fill(""))
 }

  const Cell = ({ num }) => {
    return <td onClick={() => handclick(num)}> {cells[num]} </td>;
  };
  return (
    <div className="container">
      <table >
        Turn : {turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>

          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>

          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the  winner</p>
          <button onClick={()=> handleRestart()}> Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTac;
