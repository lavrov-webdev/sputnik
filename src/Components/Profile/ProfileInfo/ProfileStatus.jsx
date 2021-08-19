import React, { Component } from "react";

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    statusText: this.props.statusText
  };

  componentDidUpdate(prevProps) {
    if (prevProps.statusText !== this.props.statusText) {
      this.setState({
        statusText: this.props.statusText
      })
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.statusText)
  };

  onStatusChange = (e) => {
    this.setState({
      statusText: e.currentTarget.value
    })
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div className="mb-4">
            <input autoFocus onBlur={this.deactivateEditMode} onChange={e => this.onStatusChange(e)} value={this.state.statusText} />
          </div>
        ) : (
          <div
            onDoubleClick={this.activateEditMode}
            className="fw-light mb-4"
          >
            {this.state.statusText || 'No status'}
          </div>
        )}
      </>
    );
  }
}
