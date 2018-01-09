import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentArtist;
    console.log(this.state)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.formImage = this.formImage.bind(this);
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

  formImage() {
    if (this.state.imageUrl) {
      return (
        <img className="upload-display image__rounded image__full" src={this.state.imageUrl} />
      );
    } else {
      return (
        <img className="upload-display image__rounded image__full" src={this.state.image_url} />
      );
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
        <form className="artist-form" onSubmit={this.handleSubmit}>
          <div className="form-content">
            <div className="profileSettings">
              <h2 className="artist-form-title sc-truncate">Update your Page</h2>
                <div className="profileSettings__form">
                  <div className="sc-media">
                    <div className="profileSettings__avatar sc-media-image">
                      <div className="editImage">
                        <div className="editImage__select">
                          <div className="image m-profile-settings image__lightOutline alwaysShowEditButton customImage sc-artwork sc-artwork-placeholder-0 image__rounded m-loaded">
                            { this.formImage() }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profileSettings__baseFields sc-media-content">
                      <div className="profileSettings__cell m-fullWidth">
                        <label className="textfield__label">
                          Upload Photo:
                        </label>
                          </div>
                        <input type="file" onChange={this.updateFile}/>
                        <div className="profileSettings__cell m-fullWidth">
                        <div className="textfield profileSettings__description">
                        <label className="textfield__label">
                          Bio
                          </label>
                          <div className="textfield__inputWrapper">
                        <textarea
                          className="textfield__input sc-input sc-input-medium"
                          placeholder="Tell the world a little bit about yourself. The shorter the better."
                          value={this.state.bio}
                          onChange={this.update('bio')} />
                          </div>
                        </div>
                        </div>
                        <button onClick={this.handleSubmit}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
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
