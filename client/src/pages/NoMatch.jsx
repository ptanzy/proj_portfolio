import React from "react";

function NoMatch() {
  return (
    <div class="container">
      <div class="card medium blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title valign center">404 ERROR <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span></span>
          <p class="flow-text">We are awfully sorry, but the page you are trying to reach cannot currently be found.
           How embarrasing! Please try the page again or navigate back to our homepage. Your patience is appreciated!</p>
        </div>
        <div class="card-action">
          <a href="/search" class valign center>Homepage</a>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;