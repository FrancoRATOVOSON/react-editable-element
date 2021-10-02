import { Component } from 'react';
export interface EditableElementProps {
    name: string;
}
export default class EditableElement extends Component<EditableElementProps> {
    render(): JSX.Element;
}
