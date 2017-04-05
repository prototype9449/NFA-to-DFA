import React from 'react'

require('normalize.css/normalize.css')
import '../styles/main'

import StateLine from './state-line'
import Transitions from './transitions'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <StateLine/>
        <Transitions/>
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
