import React, { Component } from 'react'

// styles
import './Vocab.css'

// components
import Header from '../../common/Header/Header'
import PageBody from '../../common/PageBody/PageBody'
import PageTitle from '../../common/PageTitle/PageTitle'
import PoSVocab from './PoSVocab/PoSVocab'

class Vocab extends Component {
  render () {
    return (
      <div>
        <Header />
        <PageBody>
          <PageTitle pageTitle="Vocabulary"/>
          <PoSVocab />
        </PageBody>
      </div>     
    )
  }
}

export default Vocab