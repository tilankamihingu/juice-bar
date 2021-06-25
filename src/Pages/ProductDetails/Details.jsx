import React, { Component } from 'react'

export class Details extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Details
