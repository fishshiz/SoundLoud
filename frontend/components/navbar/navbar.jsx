import React from 'react';

export default ({ currentArtist, logout }) => {
  const artistPath = currentArtist ? currentArtist.id : '/';
  const display =  (
    <header role="banner" className="header sc-selection-disabled fixed g-dark g-z-index-header show">
        <div className="header__inner l-container l-fullwidth">
            <div className="header__left">
                <div className="header__logo left">
                    <a href="/" title="Home" className="header__logoLink sc-border-box sc-ir">SoundLoud</a>
                </div>
                <nav className="left header__navWrapper" role="navigation">
                    <ul className="header__navMenu header__mainMenu left sc-list-nostyle">
                        <li><a className="header__mainMenu-loggedInHome header__mainMenu-stream selected" href="/stream">Home</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__middle">
                <div className="header__search" role="search">
                    <form className="headerSearch">
                        <input className="headerSearch__input sc-input g-all-transitions-300" placeholder="Search" type="search" />
                        <button className="headerSearch__submit submit sc-ir" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="header__right sc-clearfix">
                <div className="header__soundInput left">
                    <a href="/upload" className="uploadButton header__link">
                        <span className="uploadButton__title">Upload</span>
                    </a>
                </div>
                <div className="header__soundInput left">
                    <button className="logoutButton__title" onClick={logout}>logout</button>
                </div>
                <div className="header__userNav">
                    <div className="userNav sc-clearfix">
                        <a href="/edan" className="userNav__button userNav__usernameButton">
                            <div className="userNav__item">
                                <div className="userNav__username sc-truncate">Edan</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </header>
  );

  return (
      <div>
        {display}
      </div>
  );
};