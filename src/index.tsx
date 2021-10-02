import React, { Component } from 'react'

export interface EditableElementProps {
  name: string
}

export default class EditableElement extends Component<EditableElementProps> {
  render() {
    const { name } = this.props;
    return (
      <div>
        Hello {name}, say hello to TypeScript
      </div>
    )
  }
}
