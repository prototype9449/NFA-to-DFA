import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changeTransitionLine, addTransition} from '../redux/transition'

class Transitions extends Component {
  handleChange = (index) => (e) => {
    this.props.onChange(e.target.value, index)
  }

  handleClick = () => {
    this.props.onAdd()
  }

  render() {
    const {transitions} = this.props

    return <div>
      <div>Transitions</div>
      <div onClick={this.handleClick}>Add</div>
      {transitions.map((x,i) => {
        return <div key={i}>
          <input type="text" value={x.value} onChange={this.handleChange(i)}/>
        </div>
      })}
      <div>
      </div>
    </div>
  }
}

function mapStateToProps({a}) {
  return {transitions: a.transitions}
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (value, index) => dispatch(changeTransitionLine({index, value})),
    onAdd: () => dispatch(addTransition(''))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transitions)
