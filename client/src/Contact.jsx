import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      insta: '',
      fav: '',
      message: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/send',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }
  render() {
    return (
      <div className="contain">
        <div className="wrapper">
          <div className="contacts">
            <h3>Our contacts</h3>

            <ul>
              <li>San Joe St.</li>
              <li>00-1212121-11</li>
              <li>mail@mail.com</li>
            </ul>
          </div>

          <div className="form">
            <h3>Send us a message</h3>
            <form action="">
              {/* <p>
        <label for="">Your name</label>
        <input type="text">
      </p> */}
              {/* <p>
        <label for="">Skype</label>
        <input type="text">
      </p> */}
              {/* <p>
        <label for="">Email Address</label>
        <input type="text">
      </p> */}
              {/* <p>
        <label for="">Topic</label>
        <input type="text">
      </p> */}
              <p>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="insta"
                  id="insta"
                  value={this.state.insta}
                  onChange={this.onEmailChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="favorite color"
                  id="fav"
                  value={this.state.fav}
                  onChange={this.onEmailChange.bind(this)}
                />
              </p>

              <p className="full-width">
                <textarea
                  placeholder="Message"
                  rows="5"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                />
              </p>
              {/* <p className="full-width">
                <label for="">Write your message</label>
                <textarea name="" id="" cols="30" rows="7"></textarea>
              </p> */}
              <p className="full-width">
                <button>Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

{
  /* <div className="contactContainer">
<form
  id="contact-form"
  onSubmit={this.handleSubmit.bind(this)}
  method="POST"
>
  <div className="form-group">
    <input
      placeholder="Name"
      type="text"
      className="feedback-input"
      id="name"
      value={this.state.name}
      onChange={this.onNameChange.bind(this)}
    />
  </div>
  <div className="form-group">
    <input
      placeholder="Email"
      type="email"
      className="feedback-input"
      id="email"
      aria-describedby="emailHelp"
      value={this.state.email}
      onChange={this.onEmailChange.bind(this)}
    />
  </div>
  <div className="form-group">
    <textarea
      placeholder="Message"
      className="feedback-input"
      rows="5"
      id="message"
      value={this.state.message}
      onChange={this.onMessageChange.bind(this)}
    />
  </div>
  <button type="submit" className="btn btn-animations">
    Submit
  </button>
</form>
</div> */
}
