import React, { Component } from 'react';

class ControlsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button>Restart</button>
        <button>Hint</button>
        <button>Pause</button>
      </div>
    );
  }
}

export default ControlsContainer;
