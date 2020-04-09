import React from 'react'

const Hello = () =>{
    // With JSX
    // return(
    //     <div>
    //         <h1> Hey Smile Gupta</h1>
    //     </div>
    // )

    // Without JSX
    return React.createElement('div', null , React.createElement('h1', null, 'Hey Smile Gupta'))  
}
export default Hello