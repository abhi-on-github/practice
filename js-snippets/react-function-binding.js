// class HelloWorld extends Component {  
//     handleChange = name => event=> {
//         this.setState({
//             [name]: event.target.value
//         })
//     }
//     //Caching handlers
//     handleChange = name => {    
//         if (!this.handlers[name]) {      
//             this.handlers[name] = event => {        
//                 this.setState({ [name]: event.target.value });      
//             };    
//         }    
//         return this.handlers[name];    
//     }   
//     render() {    
//         return (      
//             <input onChange={this.handleChange('name')}/>      
//             <input onChange={this.handleChange('description')}/>    
//         )  
//     }
// }


//Practice:
class Test{

  state = {
      name: "",
      description: ""
  };

  handlers = {};

  getOnChangeHandler = key => {
      if(!this.handlers[key]){
          this.handlers[key] = event => {
              this.setState({key: event.target.value});
          }
      }
      return this.handlers[key];
      
  }


  render(){
      return (
          <div>
              <input type="text" value={this.state.name} onChange={this.getOnChangeHandler(name)} />
              <input type="text" value={this.state.description} onChange={this.getOnChangeHandler(description)} />
          </div>
      )
  }


}