import React from 'react'

export default class FilterContainerComponent extends React.Component {
    // state = {
    //     greased: false
    // }

    // handleGreased = () => {
    //     this.setState({
    //         greased: !this.state.greased
    //     })
    // }

    render(){
        return <div>
            <div>
                <label>Greased?</label>
                <input onChange={this.props.handleGreased} type="checkbox" checked={this.props.greased}/>
            </div>

            <div>
                <label>Sort By Name?</label>
                <input onChange={this.props.handleSortName} type="checkbox" checked={this.props.sortByName}/>
            </div>
        </div>
    }
}