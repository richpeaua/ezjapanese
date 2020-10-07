import React, { Component } from 'react'

// libs
//import axios from 'axios'

// styles

// components

class PoSVocab extends Component {
  state = {

    partsOfSpeech : [
      "verb",
      "noun",
      "pronoun",
      "adjective",
      "adverb",
      "interjection",
      "conjunction"
    ],

    vocabWords: [
      {
        word: "Konichiwa",
        definition: "Hello; Good morning",
        partOfSpeech: 5
      },
      {
        word: "Oishi",
        definition: "Delicious", 
        partOfSpeech: 3
      },
      {
        word: "Kuruma",
        definition: "Car",
        partOfSpeech: 1
      },
      {
        word: "Ringo",
        definition: "Apple",
        partOfSpeech: 1
      },
      {
        word: "Bai wa",
        definition: "If you/ If this happens",
        partOfSpeech: 6
      },
      {
        word: "Taberu",
        definition: "To eat",
        partOfSpeech: 0
      }

    ]
  }

  titleCase = (str)  => {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  render() {
    return (
      <div className="pos-vocab-block">
        {this.state.partsOfSpeech.map(
          pos => (
            <div>
              <h2>{this.titleCase(pos)}</h2>
            </div>
          ) 
        )}
      </div>
    )
  }
}

export default PoSVocab;