import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      if (event.target.value.length <= MAX_LENGTH)
      this.setState({ character: event.target.value })
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <div>
          <form
            className="QuoteForm"
          >
            <label htmlFor="character">Character:</label>
            <input
              value = {this.state.character}
              id="character"
              name="character"
              type="text"
              onChange={this.handleChange}

            />
          </form>
          <p className="QuoteForm">{this.state.character}</p>
        </div>
      );
    }
  }

  export default QuoteForm;