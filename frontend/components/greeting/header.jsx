import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from './greeting_container';
import Modal from 'react-modal';


class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false, link_url: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length === 0){
      this.state.link_url = "";
      this.closeModal();
    }
  }

  openModal () {
    this.setState({open: true});
  }

  closeModal () {
    this.setState({open: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const link = this.state.link_url;
    console.log(this.props);
    this.props.createVideo(link);
  }

  form(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>New Video</h3>
        <input type="text"
          className="link-url"
          placeholder="Link Url"
          value={this.state.link_url}
          onChange={this.update("link_url")}
          />
        <input type="submit" value="Add Video"></input>
      </form>
    )
  }

  render() {
    return (
      <header className="container clearfix header">
        <div className="float-left nav-left">
          <ul>
            <li><Link to="/" className="header-link"><h1>Vimgur</h1></Link></li>
            <li><button onClick={this.openModal}>New Video</button></li>
          </ul>
        </div>
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          className="link-modal"
          >
          <i onClick={this.closeModal} className="fa fa-times link-close float-right" aria-hidden="true"></i>
          {this.form()}
        </Modal>
        <GreetingContainer />
      </header>
    )
  }
}

export default Header;
