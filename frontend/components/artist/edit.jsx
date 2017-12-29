import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentArtist;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
      this.props.fetchArtist(this.props.currentArtist.id);
  }


  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };

    if(file) {
      reader.readAsDataURL(file);
    }
  }

    handleSubmit(e) {
      e.preventDefault();
      const { bio, imageFile } = this.state;
      let formData = new FormData();
      
      formData.append("artist[bio]", bio);
      if (imageFile) {
          formData.append("artist[image]", imageFile);
      }

      this.props.updateArtist(formData, this.props.currentArtist.id).then(() => this.props.history.push(`/artists/${this.state.id}`));
    }

    form() {
      return (

          <form className="artist-form"
            onSubmit={this.handleSubmit}>
              <div className="form-side">
                <h2>Update your Page</h2>
                
                <label>
                  Upload Photo:
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <label>
                  Bio
                  <textarea
                    value={this.state.bio}
                    onChange={this.update('bio')} />
                </label>
                
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            <div className="upload-cont">
              <img className="upload-display" src={this.state.imageUrl} />
              <i id="upload-icon" className="fa fa-camera-retro fa-3x" aria-hidden="true"></i>
            </div>
          </form>

      );
    
  }

    render() {
        return (
          <div>
            {this.form()}
          </div>
        );
    }
}

export default Edit;
