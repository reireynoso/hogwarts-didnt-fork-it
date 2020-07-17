import React from 'react'

class HogTile extends React.Component {

    state = {
        mainInfo: true,
        hidden: false
    }

    handleClick = () => {
        this.setState({
            mainInfo: !this.state.mainInfo
        })
    }

    hideHog = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    determineStyle = () => {
        if(this.state.hidden){
            return {
                display: "none"
            }
        }
        return {
            display: "block"
        }
    }
    
    render(){
        // console.log(this.props.hog)
        // console.log(this.props.hog.name.toLowerCase().split(" ").join("_"))
        const underScore = this.props.hog.name.toLowerCase().split(" ").join("_")
        // let pigImage = require(`../hog-imgs/${underScore}.jpg`)
        let pigImage = `/hog-imgs/${underScore}.jpg`
        return <div className="ui card">

            <div style={this.determineStyle()}>
            {
                this.state.mainInfo ?
                <div onClick={this.handleClick} className="main-info">
                        <h1>{this.props.hog.name}</h1>
                        <img src={pigImage}/>
                </div>
                :
                <div onClick={this.handleClick} className="other-info">
                    <p>Weight: {this.props.hog.weight}</p>
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased: {this.props.hog.greased}</p>
                    <p>Medal: {this.props.hog["highest medal achieved"]}</p>
                </div>
            }
            </div>

            {/* <div className="main-info">
                <h1>{this.props.hog.name}</h1>
                <img src={pigImage}/>
            </div>

            <div className="other-info">
                <p>Weight: {this.props.hog.weight}</p>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased}</p>
                <p>Medal: {this.props.hog["highest medal achieved"]}</p>
            </div> */}

            <button onClick={this.hideHog}>{this.state.hidden ? "Show" : "Hide"}  this Hog</button>

        </div>
    }
}

export default HogTile