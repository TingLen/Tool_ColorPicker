/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React,{Component} from 'react'
import Saturation from './Saturation'
import Sliders from './Sliders'
import Values from './Values'
import {connect} from 'react-redux'
import {changeValueType} from './state/actions'
import {createStructuredSelector} from 'reselect'
import {makeValueType} from './state/selectors'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 8px;
  box-sizing: initial;
  background: rgb(255, 255, 255);
`

class HomePage extends Component {

  handleChangeType = () => {
    if(this.props.valueType < 2) {
      this.props.changeType(this.props.valueType + 1)
    }
    else{
      this.props.changeType(0)
    }
  }

  render() {
    return (
      <Wrapper>
        <Saturation />
        <Sliders />
        <Values
         valueType={this.props.valueType}
         changeType={this.handleChangeType}/>
    </Wrapper>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  valueType: makeValueType()
})

const mapDispatchToProps = dispatch => {
  return {
    changeType: type => dispatch(changeValueType(type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
