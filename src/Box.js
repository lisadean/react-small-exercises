import React from 'react';

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
      </div>
    );
  }

}

export default Box;