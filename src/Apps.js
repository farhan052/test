import { useState } from "react"
import './App.css'



function Square({value, onSquareClick}){
//    function onSquareClick(){
//         console.log('hello')
//     }
  
return(
    <button className="square" onClick={onSquareClick}>
        {value}
    </button>
)
}
export default function Board(){
    
    const [square, setSquare] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true)
    function handleClick(i){
     let nextSquare = square.slice("")
    //  if(calculateWinner(square) || square(i)){
    //     return;
    //  }
    // console.log(square[i],i)
     if(nextSquare[i]==null){

         if(xIsNext){
             
             nextSquare[i] ='X'
            }else{
                nextSquare[i]='O'
            }
            setxIsNext(!xIsNext)
            setSquare(nextSquare)
        }
        
    }
    // const winner = calculateWinner(square)
    let status;
    // if(winner){
    //    status ='Winner :'+ winner
    // }else{
        status = 'next Move'+ (xIsNext ? 'X':'O')
    // }
    return<>
    <div>
        <Square value={square[0]} onSquareClick={() =>handleClick(0)}/>
        <Square value={square[1]} onSquareClick={() =>handleClick(1)}/>
        <Square value={square[2]} onSquareClick={() =>handleClick(2)}/>
    </div>
    <div>
        <Square value={square[3]} onSquareClick={() =>handleClick(3)}/>
        <Square value={square[4]} onSquareClick={() =>handleClick(4)}/>
        <Square value={square[5]} onSquareClick={() =>handleClick(5)}/>
    </div>
    <div>
        <Square value={square[6]} onSquareClick={() =>handleClick(6)}/>
        <Square value={square[7]} onSquareClick={() =>handleClick(7)}/>
        <Square value={square[8]} onSquareClick={() =>handleClick(8)}/>
    </div>
    <div>{status}</div>
    </>
}
function calculateWinner(square){
    const lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    let i;
    for( i=0; i<lines.length; i++){
        const [a,b,c] = lines[i]
 if(square[a] && square[a]=== square[b] && square[a]===square[c])
 return square[a]
    }
    return null
}