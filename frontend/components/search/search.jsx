import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import _ from 'lodash';
import VideoGrid from '../videos/video_grid';

const customStyles = {
  overlay : {
      backgroundColor   : 'rgba(0, 0, 0, 0.9)',
      padding: '30px'
  }
};

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {open: false, search: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({open: true});
  }

  closeModal () {
    this.setState({open: false, search:""});
    this.searchResults();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
      this.props.searchQuery(e.target.value);
    };
  }

  form(){
    return(
      <form>
        <input type="text"
          className="search-input"
          placeholder="Search"
          value={this.state.search}
          onInput={this.update("search")}
          autoFocus
          />
      </form>
    )
  }

  searchResults() {
    let search = this.props.search;
    if (_.isEmpty(search) || this.state.search == "") {
      return <h3>No videos found</h3>
    }
    return(
      <div className="search-results">
        {Object.keys(search).map(id => {
          let video = search[id];
          let divStyle = {
            backgroundImage: 'url(' + video.thumbnail + ')'
          }
          return (
            <div key={id} className="search-video">
              <Link to={`/videos/${video.id}`} onClick={this.closeModal}>
                <div className="search-image" style={divStyle}></div>
              </Link>
              <h4>{ video.title }</h4>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return(
      <div>
        <li onClick={this.openModal}>
          <a href="#">Search <i className="fa fa-search" aria-hidden="true"></i></a>
        </li>
          <Modal
            isOpen={this.state.open}
            onRequestClose={this.closeModal}
            style={customStyles}
            className="search-modal"
            >
            <i onClick={this.closeModal}
              className="fa fa-times link-close float-right"
              aria-hidden="true"></i>
            {this.form()}
            {this.searchResults()}
          </Modal>
      </div>
    )
  }

}

export default Search;
