import ReactDom from 'react-dom'
import React from 'react'

import './styles.css'
import EditableElement from '../../lib/esm'

function App() {
  return (
    <div className={'container'}>
      <EditableElement name={`RJ Franco`}/>
    </div>
  )
}

ReactDom.render(<App/>, document.getElementById("root"))
