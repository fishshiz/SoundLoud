![](app/assets/images/soundloud-sq.png)

# Soundloud

Soundloud is a music showcasing site, inspired by Soundcloud, which allows users to share their music with the world. On Soundloud, everyone has the oppurtunity to upload albums, leave comments and stream each other's work.

You can check out the live version [here.](https://soundloud.herokuapp.com/#/)

## Technology Overview

I built Soundloud in just under two weeks; it was my first ever attempt at a full stack web application, and I learned a lot from the experience. I used used PostgreSQL, ActiveRecord and Ruby on Rails to manage the backend, and Jbuilder to transform my backend data into JSON. In order to manage state and the frontend, I used React/Redux, as well as SASS for frontend styling. Finally, for image and audio hosting, I used the AWS S3 service and the Paperclip gem from ThoughtBot.

## Hand-rolled Audio Player

I decided to take a stab at handrolling my own customized audio player for this project. It ended up being a fun and interesting JavaScript and React challenge. I still use a HTML5 audio tag in my skeleton, after hiding it with CSS, I started work on my custom player.

### Dynamic Progression Bar

![Player Demo](https://media.giphy.com/media/fo2bcN75NGgpaRm8Kx/giphy.gif)

The main part of any audio player is the progress bar. Ideally, I wanted the user to be able to click on different regions of the bar to jump to different sections of the current track. This was handled by over-laying two rectangular divs on top of on another, and playing with the flexBasis CSS property of the growing div. On componentDidMount() of the player's react lifecycle, I added event listeners timeupdates on the embedded audio track. This then triggered my handleProgress() method, where I adjust the flexBasis of my progress bar.

```
handleProgress() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const progressBar = player.querySelector(".progress__filled");

    const percent = audio.currentTime / audio.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }
```
  
I added a onClick listener to my underlying div to handle scrubbing. Because all track navigation is handled through just the player component, I was able to keep all information about current track location in local state.

```
scrub(e) {
    e.preventDefault();
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const progress = player.querySelector(".progress");
    const scrubTime =
        e.nativeEvent.offsetX / progress.offsetWidth * audio.duration;
    audio.currentTime = scrubTime;
}
```

### Responsive Volume Control

![Volume Demo](https://media.giphy.com/media/cIS2Ljr9t8y1SVyTka/giphy.gif)

With my volume control, I wanted to display different sound level icons depending on the current volume of the track. I additionally wanted the icon to serve as a mute button. I achieved this by storing mute and mid Boolean values in my player's local state, and then storing a volume number value in state. By storing both a mute boolean and a volume integer value in local state, the audio player can remember the last volume level that it was playing at if it is ever switched to mute, thus it can toggle back to the previous volume when unmuted. The mid boolean value is stored in order to render a 'mid-level' volume icon.

```
changeVolume() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volumee = player.querySelector(".player__slider");
    audio.volume = volumee.value;
    if (volumee.value == 0) {
        this.setState({ mute: true, mid: false, volume: volumee.value });
    } else if (volumee.value > 0 && volumee.value < 0.7) {
        this.setState({ mute: false, mid: true, volume: volumee.value });
    } else {
        this.setState({ mute: false, mid: false, volume: volumee.value });
    }
}
```

## Search Bar

![Search Demo](https://media.giphy.com/media/1oLeDpwimRgA9MLjXY/giphy.gif)

The search bar triggers an ActiveRecord query upon every new keystroke, returning the top three artist and track instances most closely matching the input string. These search methods are stored directly in my artist and track models, and called by a separate search controller. 

```
// artist.rb
def self.top_three(query)
    param = '%' + query.downcase + '%'
    Artist.where('lower(name) LIKE ?', param).limit(3)
end

// track.rb
def self.top_three(query)
    param = '%' + query.downcase + '%'
    Track.where('lower(title) LIKE ?', param).limit(3)
end

// search_controller.rb
def index
    @artists = Artist.top_three(search_params[:query])
    @tracks = Track.top_three(search_params[:query])
    render :index
end
```

I added arrow-key functionality to my search results by storing a currently selected index in local state, appending a "selected" class onto that list item, and updating that index appropriately depending on keyCode values.

## Track Ranking by Play-count and Comment-count

![Ranking Demo](https://media.giphy.com/media/67PrfMDnVHhT1ZTz7P/giphy.gif)

The main page promotes the top eight tracks from the database with the highest play counts and comment counts. For the play count, I added a playcount column to my track model which simply increments via a PATCH request on every play. Because comments were already a model in my schema with a belongs-to association with tracks, I was able to use a Rails counter cache to keep track of comment counts among tracks. Upon the mounting of the featured page component, the component makes a AJAX request for either the most played or most discussed tracks. The request is directed to one of two different routes and hits either a "featured" controller or a "most-discussed" controller. The track model has two more query methods attached to it "In addition to the searchbar query method", and depending on the controller, a specific ActiveRecord query is inacted.

```
  def self.featured
    Track.includes(:artist).order('play_count DESC').limit(8)
  end

  def self.most_discussed
    Track.includes(:artist).order('comment_count DESC').limit(8)
  end
```

## Future Implementations

I continue to work on this project off and on, and am looking forward to continue implementing new features. Potential future implementations include customizeable playlists, track likes, and artist follows.