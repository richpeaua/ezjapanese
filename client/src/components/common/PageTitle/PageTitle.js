import React from 'react'

// libs

// styles
import "./PageTitle.css"

// components

function PageTitle(props) {
  return (
    <div className="page-title-block">
      <h2 className="page-title">{props.pageTitle}</h2>
    </div>
  )
}

export default PageTitle