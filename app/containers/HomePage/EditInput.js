import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    width: 100%;
    font-size: 16px;
    color: rgb(51, 51, 51);
    border-radius: 2px;
    border: none;
    box-shadow: rgb(218, 218, 218) 0px 0px 0px 1px inset;
    height: 24px;
    text-align: center;
`

const Lable = styled.span`
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    display: block;
    color: rgb(150,150,150);
    margin-top: 10px;
`

class EditInput extends Component {
    render() {
        return (
            <Wrapper>
                <Input value={this.props.value}/>
                <Lable>
                    {this.props.name}
                </Lable>
            </Wrapper>
        )
    }
}

export default EditInput