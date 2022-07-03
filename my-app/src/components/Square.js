import React from 'react'


function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square


// The Square component renders a single <button>
// class Square extends React.Component {
//     /*
//     In JavaScript classes, you need to always call super 
//     when defining the constructor of a subclass. 
//     All React component classes that have a constructor 
//     should start with a super(props) call.
//      */
//     //No longer keeps track of the game’s state
//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         value:null,
//     //     };
//     // }

//     render() {
//       return (
//         <button 
//         className="square"
//         onClick={ () => { this.props.onClick() }}>

//          {/* show “ the prop passed ” from a parent Board 
//              component to a child Square component. */}

//           {this.props.value}
//         </button>
//       );
//     }
//   }
