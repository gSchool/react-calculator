import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div id="app">
      <div id="calculator">
        <div id="screen-container">
          <input id="screen" />
        </div>

        <div id="button-container">
          <div class="buttons">
            <span className="operator" id="cancel">
              C
            </span>
            <span className="operator">/</span>
            <span className="operator">x</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span className="operator">-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span className="operator">+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="operator" id="calc">
              =
            </span>
            <div className="l-row">
              <span id="zero">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
