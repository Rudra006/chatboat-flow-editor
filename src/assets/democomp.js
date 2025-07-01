// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";
// import Todo from "./components/Todo";
// import { useSelector } from "react-redux";
// import CustomizeSelect from "./components/CustomizeSelect";






// function App() {
//   const cnt = useSelector((state)=>state.customization.initialCounter);
//   const [currentPlayer, setCurrentPlayer] = useState(true);
//   const [winPlayer, setWinPlayer]= useState(false);
//   const [count, setCount]= useState(cnt)

//   const [playerMark, setPlayerMark]= useState({
//     player1:[],
//     player2:[]
//   });

//   useEffect(()=>{
//     setCount(cnt);


//   },[cnt])
//   console.log("count is ", cnt);

// const playerMarked = (index)=>{
//   if(winPlayer) {
//     setPlayerMark({
//       player1:[],
//       player2:[]
//     })
//     setWinPlayer(false)
//     return;
//   }
//   if(![...playerMark.player1, ...playerMark.player2].includes(index)){
//     if(currentPlayer){
//       setPlayerMark({
//         ...playerMark,
//         player1:[...playerMark.player1, index]
//       })
      
//     } 
//     else {
//       setPlayerMark({
//         ...playerMark,
//         player2:[...playerMark.player2, index]
//       })
      
//     }
//     setCurrentPlayer(!currentPlayer);
//   }
 
// }

// const winner= [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
//   [1,4,7],
//   [2,5,8],
//   [3,6,9],
//   [1,5,9],
//   [3,5,7]
// ]
// const checkWinner = (marks) => {
//   return winner.some((combo) => combo.every((cell) => marks.includes(cell)));
// };
// useEffect(() => {
 
//   if (checkWinner(playerMark.player1)) {
//     setWinPlayer("Player 1 Wins!");
//   } else if (checkWinner(playerMark.player2)) {
//     setWinPlayer("Player 2 Wins!");
//   }
// }, [playerMark]);


// console.log("player 1", playerMark)
//   function SingleBox({indexes}){
//     return (<>

//     <div  className="m-20 h-24 w-24">

//     </div>
//     <div className="w-full border border-amber-600 flex justify-center items-center align-middle  h-[33%] bg-sky-300 cursor-pointer " onClick={()=>playerMarked(indexes)}>
//           {playerMark.player1.includes(indexes)&& 'X'}
//           {playerMark.player2.includes(indexes)&& 'O'}

//     </div>
//     </>)
//   }

//   return (
//     <>


//     <div className="h-20 w-20 m-10">
//       the count is {count}
//     </div>
//     {winPlayer && (
//   <Typography variant="h5" className="text-center text-red-600">
//     {winPlayer}
//   </Typography>
// )}
//         {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="h-[50vh] w-1/2 m-6 bg-green-400 p-6  ">
//           <Grid className=" flex" item size={12}> 
//           <SingleBox indexes={1}  />
//           <SingleBox indexes={2} />
//           <SingleBox indexes={3} />
            
//           </Grid>
//           <Grid className=" flex" item size={12}>
//           <SingleBox indexes={4} />
//           <SingleBox indexes={5} />
//           <SingleBox indexes={6} />
//           </Grid>
//           <Grid className=" flex" item size={12}>
//           <SingleBox indexes={7} />
//           <SingleBox indexes={8} />
//           <SingleBox indexes={9} />
//           </Grid>
          
//         </Grid> */}


//         {/* <Todo /> */}
//         <CustomizeSelect/>
      
//     </>
//   );
// }

// export default App;
