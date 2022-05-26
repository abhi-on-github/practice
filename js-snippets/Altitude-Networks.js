import React, {Component} from 'react'
import { render } from 'react-dom'

/*
[{
  name: "Frank B"
  hits: [1,2,3,2,1]
},
{
  name: "John H"
  hits: [4,5,3,2,7]
},
{
  name: "Leo E"
  hits: [3,1,3,1,2]
},
{
  name: "Nyah C"
  hits: [4,6,2,6,7]
}]
*/ 

class App extends Component {
	constructor(props){
    super(props);
    this.data = [{
        name: "Frank B",
        hits: [1,2,3,2,1]
      },
      {
        name: "John H",
        hits: [4,5,3,2,7]
      },
      {
        name: "Leo E",
        hits: [3,1,3,1,2]
      },
      {
        name: "Nyah C",
        hits: [4,6,2,6,7]
      }];
  
    this.state = {
      data: []
    }
  }
	
  componentDidMount() {
    fetch("url")
      .then(response => response.json())
      .then(data => this.setState({data: this.data}))
      .catch(error => console.log(error))
  }
  
  render () {
    return (  
      <div>
        {
          this.state.data.map(player => {
            <div>
              {player.name}
              {player.hits.length && 
                  <PlayerHitsAvg 
                    hits={player.hits}
                  />}        
              </div>
          })
        }
      </div>   
		);
  }

}

const PlayerHitsAvg = props => {
  const avgSum =  props.hits.reduce((acc, hit) => acc+hit ,0);
  return (
    <div>{avgSum/props.hits.length}</div>
  )
}

const rootElement = document.getElementById('react-root')
render(<App />, rootElement)