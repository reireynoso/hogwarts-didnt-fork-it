import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {
   
    renderHogs = () => {
        // console.log(this.props.sortByName)
        if(this.props.greased){
            const greasedPigs = this.props.hogs.filter(hog => hog.greased)
            return this.handleSorting(greasedPigs).map((hog) => <HogTile key={hog.name} hog={hog} />) 
        }
        
        return this.handleSorting(this.props.hogs).map((hog) => <HogTile key={hog.name} hog={hog}/>)
    }

    handleSorting = (hogs) => {
        if(this.props.sortByName){
            return [...hogs].sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        }
        return hogs
    }
    
    render(){
        // console.log(this.props.hogs)
        return <div>
            {this.renderHogs()}
        </div>
    }
}

export default HogContainer