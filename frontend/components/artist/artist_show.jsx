import React from "react";
import { Link } from "react-router-dom";
import TrackIndexContainer from "../track/track_index_container";
import TrackIndexItem from "../track/track_index_item";
import PlaylistIndexContainer from "../playlist/playlist_index_container";

class artistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "playlists"
    };
    this.conditionalEditButton = this.conditionalEditButton.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.artistId !== newProps.artistId) {
      this.props.fetchArtist(newProps.artistId);
    }
  }

  componentWillUnmount() {
    this.props.clearArtists();
  }
  toggleList(e) {
    e.preventDefault();
    let element = e.currentTarget;
    let other = Array.from(element.classList).includes("tracks")
      ? document.querySelector(".playlists")
      : document.querySelector(".tracks");
    other.classList.remove("selectedTab");
    element.classList.add("selectedTab");
    let list;
    if (this.state.list === "tracks" && other.innerHTML == "Playlists") {
      list = "playlists";
    } else if (this.state.list === "playlists" && other.innerHTML == "Tracks") {
      list = "tracks";
    } else {
      return null;
    }
    this.setState({
      list
    });
  }

  conditionalEditButton() {
    if (this.props.currentArtist.id === this.props.artistId) {
      return (
        <Link className="edit__link" to="/edit">
          <button className="image__button">
            <i className="fa fa-pencil" aria-hidden="true" />
          </button>
        </Link>
      );
    }
  }

  renderContent() {
    if (!this.props.artist) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else {
      let content =
        this.state.list !== "tracks" ? (
          <TrackIndexContainer artistId={this.props.artist.id} />
        ) : (
          <PlaylistIndexContainer artist={this.props.artist} />
        );
      return (
        <div className="l-container l-content">
          <div className="l-user-hero">
            <div className="profileHeader">
              <div className="profileHeader__info">
                <div className="profileHeaderInfo sc-media">
                  <div className="profileHeaderInfo__avatar sc-media-image">
                    <div className="image m-user image__noOutline customImage interactive sc-artwork sc-artwork-placeholder-1 image__rounded m-loaded">
                      <img
                        src={this.props.artist.image_url}
                        className="show_avatar sc-artwork sc-artwork-placeholder-1 image__rounded image__full g-opacity-transition"
                      />
                    </div>
                  </div>
                  <div className="artist__show__name profileHeaderInfo__content sc-media-content">
                    <h3 className="profileHeaderInfo__userName g-type-shrinkwrap-block g-type-shrinkwrap-large-primary">
                      {this.props.artist.name}
                    </h3>
                    <h3 className="show__bio"> {this.props.artist.bio} </h3>
                    <div className="profileHeader__edit">
                      {this.conditionalEditButton()}
                    </div>
                    <div className="artistTabs">
                      <h2
                        className="artistTab tracks"
                        onClick={this.toggleList}
                      >
                        Playlists
                      </h2>
                      <h2
                        className="artistTab playlists selectedTab"
                        onClick={this.toggleList}
                      >
                        Tracks
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="userStream__list">{content}</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default artistPage;
