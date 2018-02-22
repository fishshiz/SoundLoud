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

  
