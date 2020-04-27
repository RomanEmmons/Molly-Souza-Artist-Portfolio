import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      insta: '',
      subject: '',
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

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onInstaChange(event) {
    this.setState({ insta: event.target.value });
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
            {/* <h3>Let's Connect:</h3> */}
            <div>
              <h3>Find me on Insta:</h3>
            </div>
            <a
              href="https://www.instagram.com/mollywiththebrightredhair/?hl=en"
              className="icons2"
            >
              I
            </a>
            <div>
              <h3>Or send me an email:</h3>
            </div>
            <a href="mailto:roman.emmons@gmail.com" className="icons2">
              M
            </a>
            <div>
              <h3>I'm available for commissions!</h3>
            </div>
          </div>
          <div className="form">
            <h3>You can also reach me here:</h3>
            <form action="">
              <p>
                <input
                  placeholder="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="email"
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="subject"
                  id="subject"
                  value={this.state.subject}
                  onChange={this.onSubjectChange.bind(this)}
                />
              </p>
              <p>
                <input
                  placeholder="insta"
                  id="insta"
                  value={this.state.insta}
                  onChange={this.onInstaChange.bind(this)}
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
              <p className="full-width">
                <button onSubmit={this.handleSubmit.bind(this)}>Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
