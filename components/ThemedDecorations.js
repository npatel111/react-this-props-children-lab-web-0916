const app = "I don't do much.";
const React = require('react');
//
// import React from 'react';
// import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp= React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      })
    })
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}

module.exports= ThemedDecorations;



//     const childrenWithExtraProp = React.Children.map(this.props.children, child => {
//       return React.cloneElement(child, {
//         isPlaying: child.props.title === currentPlayingTitle
//       });
//     });
//
//     return (
//       <div className="movie-browser">
//         {childrenWithExtraProp}
//       </div>
//     );
//   }
// }
