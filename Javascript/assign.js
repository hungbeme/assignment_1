// CREATE A CALCULATOR 

const calculate = (A , B , C) => {
      if ( C === "ADDITION" && calculate !== null)  {
        console.log(  "Result = " , A + B, )
      } else if( C === "subtraction" && calculate !== null){
        console.log(  "Result = " , A - B);
      } else if ( C === "MULTIPLY" && calculate !== null) {
        console.log (  "Result = " , A * B );
      } else if ( C === "DIVISION" && calculate !== null) {
        console.log (  "Result = " , A / B);
      } else (
        console.log ("INPUTS ERROR")
      )
}

calculate (5 , 3 , "ADDITION");
calculate (5, 5, "MULTIPLY");
calculate (5 , 5 , "subtraction");
calculate (10 , 2 , "DIVISION");
calculate (null, 4, "wefbe" );
calculate (100 , 10 , "MULTIPLY");

