import React from 'react';
//import Navbar from './component/Navbar';
//import QuoteList from './component/QuoteList.js';
//import QuoteForm from './component/QuoteForm.js';
import axios from 'axios';
import QuoteCard from './component/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { simpson : null}
    this.apiCall = this.apiCall.bind(this)
  }

  apiCall() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => { this.setState({simpson: data[0]});
  });
  }
  
  render() { 
    return (
      <div  className="App">
          <button type="button" onClick = {this.apiCall}>Random Quote</button>
          {this.state.simpson != null && <QuoteCard {...this.state.simpson}/>}
        
      </div>
    );
    }
  
}

//<div>
          //<Navbar/>
        //</div>
        //<div>
          //<QuoteForm/>
        //</div>
        //<div>
          //<QuoteList/>
        //</div>

export default App;
