// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = (e) => {
        this.setState({
            mood: 'sad'
        })
    }

    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}