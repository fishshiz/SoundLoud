import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentArtist;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  }

//   componentDidMount() {
//       this.props.fetchArtist(this.props.currentArtist.id);
//   }


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

  updateAudioFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ audioFile: file});
    };

    if(file) {
      reader.readAsDataURL(file);
    }
  }

    handleSubmit(e) {
      e.preventDefault();
      const { title, audioFile, imageFile, description } = this.state;
      let formData = new FormData();
      
      formData.append("track[title]", title);
      formData.append("track[audio]", audioFile);
      formData.append("track[description]", description);
      formData.append("track[artist_id]", this.props.currentArtist.id);
      if (imageFile) {
          formData.append("track[image]", imageFile);
      }

      this.props.createTrack(formData).then(() => this.props.history.push(`/artists/${this.props.currentArtist.id}`));
    }

    form() {
      return (
        <div className="l-container l-content">
        <div>
            <div className="l-main-upload">
            <div className="uploadMain upsell">
            <div className="uploadMain__chooserContainer sc-border-light g-shadow-light">
            <div className="uploadMain__title"><h2>Upload to SoundLoud</h2></div>
          <form className="track-form"
            onSubmit={this.handleSubmit}>
            <div className="upload-cont">
              <img className="upload-display" src={this.state.imageUrl} />
            </div>
              <div className="form-side"> 
                <label>
                  Upload Photo:
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <label>
                    Upload Audio:
                    <input type="file" onChange={this.updateAudioFile} />
                </label>
                <label className="upload-label">
                  Title
                  <input
                    className="upload-input"
                    value={this.state.title}
                    onChange={this.update('title')} />
                </label> 
                <label className="upload-label">
                  Description
                  <textarea
                    className="upload-input"
                    value={this.state.description}
                    onChange={this.update('description')} />
                </label>
                  
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            
          </form>
          </div>
          </div>
          </div>
          </div>
        </div>
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

export default Upload;
