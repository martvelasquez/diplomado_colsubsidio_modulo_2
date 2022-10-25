      /* function test(arg1, arg2 = 'X'){
          
          for (let i=0; i < arg1; i++){
              let square = ""
              for(let j=0; j < arg1; j++){
                  
                  square = square  + arg2 
                              }
          console.log(square)
          }
                    
         }*/

      function test(arg1, arg2) {
          if (!arg2) {
              for (let i = 0; i < arg1; i++) {
                  let square = ""
                  for (let j = 0; j < arg1; j++) {

                      square = square + 'X'
                  }
                  console.log(square)
              }
          } else {

              for (let i = 0; i < arg1; i++) {
                  let square = ""
                  for (let j = 0; j < arg1; j++) {

                      square = square + arg2

                  }
                  console.log(square)
              }
          }
      }