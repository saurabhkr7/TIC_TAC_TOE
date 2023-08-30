import { Block } from "./Block"
import '../App.css';
import { useEffect, useState } from "react";
export var Board = ({ currentPlayer, changePlayer, gameEnd }) => {
    const [mark, setMark] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    const handleOnClick = (e) => {
        if (mark[e] === 0) {
            const newValue = [...mark];
            newValue[e] = currentPlayer === 1 ? 1 : 2;
            setMark(newValue);
            changePlayer()
        } else {
            console.log("Click on blank box.")
        }
    };

    useEffect(() => {
        for (const win of winningCombo) {
            if (mark[win[0]] === 1 && mark[win[1]] === 1 && mark[win[2]] === 1) {
                console.log("Player 1 wins the Game !!!")
            } else if (mark[win[0]] === 2 && mark[win[1]] === 2 && mark[win[2]] === 2) {
                console.log("Player 2 wins the Game !!!")
            }
        }
    }, [mark, winningCombo])

    return (
        <div className="board">
            <div>
                <Block position={0} mark={mark[0]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={1} mark={mark[1]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={2} mark={mark[2]} onClick={(e) => handleOnClick(e)}></Block>
            </div >
            <div>
                <Block position={3} mark={mark[3]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={4} mark={mark[4]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={5} mark={mark[5]} onClick={(e) => handleOnClick(e)}></Block>
            </div >
            <div>
                <Block position={6} mark={mark[6]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={7} mark={mark[7]} onClick={(e) => handleOnClick(e)}></Block>
                <Block position={8} mark={mark[8]} onClick={(e) => handleOnClick(e)}></Block>
            </div >
        </div>
    )
}