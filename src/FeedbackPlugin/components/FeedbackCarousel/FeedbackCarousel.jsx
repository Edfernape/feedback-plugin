/* props available:

theme = red|yellow|blue|green|orange|purple|dark|light
openerPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left
openerSize: small|medium|large
showOpener: true|false

openerSetForm method
toggleShowOpener method
closerClicked method

local states:
carouselStyles
animation
scroller
carouselPage
closerPlacement
*/

import React from 'react';
import './FeedbackCarousel.css';

const carouselMessage = {
  1: 'See something you like/dislike?',
  2: 'Encountered a problem?',
  3: 'Experienced a bug?',
  4: 'Spotted a vulnerability?',
  5: 'Know a feature we could use?',
};

const buttonMessage = {
  1: 'Let Us Know',
  2: 'Report Usability Issue',
  3: 'Report a Bug',
  4: 'Tell Us',
  5: 'Suggest a Feature',
};

export default class FeedbackCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.setTheme(this.props.theme),
      carouselSize: this.setSize(this.props.openerSize),
      carouselPlacement: this.setPlacement(
        this.props.openerPlacement,
      ),
      carouselStyles: {},
      animation: this.setAnimation(this.props.openerPlacement),
      scroller: null,
      carouselPage: 1,
      closerPlacement: this.setCloserPlacement(
        this.props.openerPlacement,
      ),
    };
    this.scroll = this.scroll.bind(this);
    this.carouselClicked = this.carouselClicked.bind(this);
    this.closerClicked = this.closerClicked.bind(this);
    this.b1clicked = this.b1clicked.bind(this);
    this.b2clicked = this.b2clicked.bind(this);
    this.b3clicked = this.b3clicked.bind(this);
    this.b4clicked = this.b4clicked.bind(this);
    this.b5clicked = this.b5clicked.bind(this);
  }

  componentDidMount() {
    // set styles, "timer" for scroll and event listeners
    const theme = this.state.theme;
    const size = this.state.carouselSize;
    const placement = this.state.carouselPlacement;
    const style = { ...theme, ...size, ...placement };
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselStyles: style, scroller: scroller });
    document
      .getElementById('b1')
      .addEventListener('click', this.b1clicked);
    document
      .getElementById('b2')
      .addEventListener('click', this.b2clicked);
    document
      .getElementById('b3')
      .addEventListener('click', this.b3clicked);
    document
      .getElementById('b4')
      .addEventListener('click', this.b4clicked);
    document
      .getElementById('b5')
      .addEventListener('click', this.b5clicked);
  }

  componentDidUpdate() {
    // update style of dots
    const page = this.state.carouselPage;
    for (let i = 1; i < 6; i += i) {
      if (i === page) {
        document.getElementById(`b ${i}`).className = 'dotActive';
      } else {
        document.getElementById(`b ${i}`).className = 'dot';
      }
    }
  }

  componentWillUnmount() {
    // clear "timer" for scrolling and remove event listeners
    clearInterval(this.state.scroll);
    document
      .getElementById('b1')
      .removeEventListener('click', this.b1clicked);
    document
      .getElementById('b2')
      .removeEventListener('click', this.b2clicked);
    document
      .getElementById('b3')
      .removeEventListener('click', this.b3clicked);
    document
      .getElementById('b4')
      .removeEventListener('click', this.b4clicked);
    document
      .getElementById('b5')
      .removeEventListener('click', this.b5clicked);
  }

  /* functions to set carousel states based on props */
  setTheme(theme) {
    switch (theme) {
      case 'red':
        return { backgroundColor: '#e42217', color: 'whitesmoke' };
      case 'yellow':
        return { backgroundColor: 'yellow', color: 'black' };
      case 'blue':
        return { backgroundColor: 'dodgerblue', color: 'whitesmoke' };
      case 'green':
        return { backgroundColor: '#87f717', color: 'black' };
      case 'orange':
        return { backgroundColor: '#f88017', color: 'whitesmoke' };
      case 'purple':
        return { backgroundColor: 'purple', color: 'whitesmoke' };
      case 'dark':
        return { backgroundColor: '#34282c', color: 'whitesmoke' };
      case 'light':
        return { backgroundColor: '#fefcff', color: '#34282c' };
      default:
        return { backgroundColor: 'dodgerblue', color: 'whitesmoke' };
    }
  }

  setSize(size) {
    switch (size) {
      case 'small':
        return { width: '150px', height: '75px', fontSize: 'small' };
      case 'medium':
        return { width: '175px', height: '88px', fontSize: 'medium' };
      case 'large':
        return { width: '200px', height: '100px', fontSize: 'large' };
      default:
        return { width: '175px', height: '88px', fontSize: 'medium' };
    }
  }

  setPlacement(placement) {
    switch (placement) {
      case 'top':
        return {
          top: '1%',
          left: '50%',
          transform: 'translate(-50%)',
        };
      case 'top-right':
        return { top: '1%', right: '1%' };
      case 'right':
        return {
          top: '50%',
          right: '1%',
          transform: 'translateY(-50%)',
        };
      case 'bottom-right':
        return { bottom: '1%', right: '1%' };
      case 'bottom':
        return {
          bottom: '1%',
          left: '50%',
          transform: 'translate(-50%)',
        };
      case 'bottom-left':
        return { bottom: '1%', left: '1%' };
      case 'left':
        return {
          top: '50%',
          left: '1%',
          transform: 'translateY(-50%)',
        };
      case 'top-left':
        return { top: '1%', left: '1%' };
      default:
        return { bottom: '1%', right: '1%' };
    }
  }

  setAnimation(placement) {
    switch (placement) {
      case 'top':
        return 'T';
      case 'top-right':
        return 'R';
      case 'right':
        return 'R';
      case 'bottom-right':
        return 'R';
      case 'bottom':
        return 'B';
      case 'bottom-left':
        return 'L';
      case 'left':
        return 'L';
      case 'top-left':
        return 'L';
      default:
        return 'R';
    }
  }

  setCloserPlacement(placement) {
    switch (placement) {
      case 'top':
        return {
          top: '108%',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'top-right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'bottom-right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'bottom':
        return {
          bottom: '108%',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'bottom-left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      case 'left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      case 'top-left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      default:
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
    }
  }

  /* functions called upon rendering */
  getCarouselMessage(page) {
    return carouselMessage[page];
  }

  getButtonMessage(page) {
    return buttonMessage[page];
  }

  /* onClick functions */
  closerClicked() {
    this.props.closerClicked();
  }

  carouselClicked() {
    this.props.toggleShowOpener();
    this.props.openerSetForm(this.state.carouselPage);
  }

  b1clicked() {
    clearInterval(this.state.scroller);
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 1, scroller: scroller });
  }

  b2clicked() {
    clearInterval(this.state.scroller);
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 2, scroller: scroller });
  }

  b3clicked() {
    clearInterval(this.state.scroller);
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 3, scroller: scroller });
  }

  b4clicked() {
    clearInterval(this.state.scroller);
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 4, scroller: scroller });
  }

  b5clicked() {
    clearInterval(this.state.scroller);
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 5, scroller: scroller });
  }

  /* function to scroll through carousel */
  scroll() {
    const oldPage = this.state.carouselPage;
    let newPage = oldPage + 1;
    if (newPage > 5) {
      newPage = 1;
    }
    this.setState({ carouselPage: newPage });
  }

  checkShowCarousel() {
    if (!this.props.showOpener) {
      return `1s carousel ${this.state.animation} disappear both`;
    }
    return `1s carousel ${this.state.animation} appear both`;
  }

  addAnimations(str) {
    const animationStyle = { animation: str };
    const style1 = this.state.carouselStyles;
    const final = { ...animationStyle, ...style1 };
    return final;
  }

  render() {
    const str1 = this.getCarouselMessage(this.state.carouselPage);
    const str2 = this.getButtonMessage(this.state.carouselPage);
    const str = this.checkShowCarousel();
    const finalStyle = this.addAnimations(str);

    return (
      <div style={finalStyle} className="carousel">
        <button
          type="button"
          style={this.state.closerPlacement}
          onClick={this.closerClicked}
          className="carouselCloser"
        >
          &#10006;
        </button>
        <div>
          {str1}
          <button
            style={{ fontSize: this.state.carouselStyles.fontSize }}
            className="carouselBtn"
            type="button"
            onClick={this.carouselClicked}
          >
            {str2}
          </button>
        </div>
        <div className="dotContainer">
          <span id="b1" className="dot" />
          <span id="b2" className="dot" />
          <span id="b3" className="dot" />
          <span id="b4" className="dot" />
          <span id="b5" className="dot" />
        </div>
      </div>
    );
  }
}
