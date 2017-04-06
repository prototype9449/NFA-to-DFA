import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changeStateLine, changeSymbolLine, changeStartLine, changeEndLine} from '../redux/transition'

class StateLine extends Component {
  handleStateChange = (e) => {
    this.props.onStateLineChange(e.target.value)
  }

  handleSymbolChange = (e) => {
    this.props.onSymbolLineChange(e.target.value)
  }

  handleStartStateChange = (e) => {
    this.props.onStartStateChange(e.target.value)
  }

  handleEndStateChange = (e) => {
    this.props.onEndStateChange(e.target.value)
  }

  render() {
    const {stateLine, symbolLine} = this.props

    return <div>
      <div>States: <input type="text" value={stateLine} onChange={this.handleStateChange}/></div>
      <div>Start state - <input type="text" onChange={this.handleStartStateChange}/></div>
      <div>End state - <input type="text" onChange={this.handleEndStateChange}/></div>
      <div>Symbols: <input type="text" value={symbolLine} onChange={this.handleSymbolChange}/></div>
    </div>
  }
}

function mapStateToProps({a}) {
  return {
    stateLine: a.stateLine,
    symbolLine: a.symbolLine
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onStateLineChange: (x) => dispatch(changeStateLine(x)),
    onSymbolLineChange: (x) => dispatch(changeSymbolLine(x)),
    onStartStateChange: (x) => dispatch(changeStartLine(x)),
    onEndStateChange: (x) => dispatch(changeEndLine(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateLine)
