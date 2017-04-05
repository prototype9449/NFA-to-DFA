import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changeStateLine, changeSymbolLine} from '../redux/transition'

class StateLine extends Component {
  handleStateChange = (e) => {
    this.props.onStateLineChange(e.target.value)
  }

  handleSymbolChange = (e) => {
    this.props.onSymbolLineChange(e.target.value)
  }

  render() {
    const {stateLine, symbolLine} = this.props

    return <div>
      <div>States: <input type="text" value={stateLine} onChange={this.handleStateChange}/></div>
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
    onSymbolLineChange: (x) => dispatch(changeSymbolLine(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateLine)
