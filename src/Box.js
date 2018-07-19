import React from 'react';

function printMessage() {
  console.log('Hello from the box!');
}

class Box extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
      <div className="box">
        {this.props.message}
        <button onClick={printMessage}>Click me!</button>
      </div>
    );
  }

}

export default Box;