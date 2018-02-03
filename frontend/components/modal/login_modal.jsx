import React from "react";

export default class LoginModal extends React.Component {
  render() {
    const { openModal } = this.props;

    return (
      <div id="content" className="l-container l-content">
        <div className="l-front">
          <div className="l-fron-hero l-inner-fullwidth">
            <div className="frontHero">
              <div className="frontHero__container">
                <h1 className="frontHero__logo frontHero__logo__txt">
                  SoundLoud
                </h1>
                <div className="frontHero__signin">
                  <button
                    className="g-opacity-transition frontHero__loginButton g-button-transparent-inverted sc-button sc-button-medium loginButton"
                    onClick={() => openModal("signin")}
                  >
                    Sign In
                  </button>
                  <button
                    className="g-opacity-transition frontHero__createAccountButton sc-button sc-button-medium signupButton sc-button-cta"
                    onClick={() => openModal("signup")}
                  >
                    Create Account
                  </button>
                </div>
                <div className="frontHero__content">
                  <h2 className="frontHero__title">Connect on SoundLoud</h2>
                  <p className="frontHero__tagline sc-type-large">
                    Discover, stream, and share a constantly expanding mix of
                    music from emerging and major artists around the world.
                  </p>
                  <div className="frontHero__cta">
                    <button
                      className="g-opacity-transition frontHero__ctaButton sc-button sc-button-cta sc-button sc-button-medium signupButton"
                      onClick={() => openModal("signup")}
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
