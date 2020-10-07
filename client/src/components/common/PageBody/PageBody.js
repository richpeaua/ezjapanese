import React from 'react'

// libs

// styles
import './PageBody.css'

// components

function PageBody(props) {
  return (
    <div className="page-body">
      {props.children}
    </div>
  )
}

export default PageBody