import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS} from './constants'
import { checkWinner } from './logics/board'
import { WinnerModal } from './components/WinnerModal'

function App() {
  const [board, setBoard] = useState(()=>{
    const boardfromStorage= window.localStorage.getItem("board")
    return boardfromStorage? JSON.parse(boardfromStorage): Array(9).fill(null)})
  
  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage? turnFromStorage :TURNS.X})
  const [winner, setWinner] = useState(null)

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }

  const checkEndGame = (newBoard)=>{
    return newBoard.every((square) => square !== null)
  }

  const updateBoard=(index) =>{
    if (board[index]|| winner) return
    
    const newBoard = [...board]
    newBoard[index]= turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X? TURNS.O:TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)
    const newWinner=checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>
              Empezar de nuevo
       </button>
      <section className="game">
        {
          board.map((_,index)=>{
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          }

          )
        }
      </section>
      <section className="turn">
        <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal winner={winner} resetGame1={resetGame}/>
     
    </main>
  )
}

export default App
