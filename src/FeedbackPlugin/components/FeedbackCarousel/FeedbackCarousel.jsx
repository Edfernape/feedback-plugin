import React from 'react';
import PropTypes from 'prop-types';
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
  static setTheme(theme) {
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

  static setSize(size) {
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

  static setPlacement(placement) {
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

  static setAnimation(placement) {
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

  static setCloserPlacement(placement) {
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

  static getCarouselMessage(page) {
    return carouselMessage[page];
  }

  static getButtonMessage(page) {
    return buttonMessage[page];
  }

  static resolveCategory(page) {
    switch (page) {
      case 1:
        return 4;
      case 2:
        return 3;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 5;
      default:
        return 4;
    }
  }

  constructor(props) {
    super(props);
    const { theme, openerSize, openerPlacement } = this.props;
    this.state = {
      theme: FeedbackCarousel.setTheme(theme),
      carouselSize: FeedbackCarousel.setSize(openerSize),
      carouselPlacement: FeedbackCarousel.setPlacement(
        openerPlacement,
      ),
      carouselStyles: {},
      animation: FeedbackCarousel.setAnimation(openerPlacement),
      scroller: null,
      carouselPage: 1,
      closerPlacement: FeedbackCarousel.setCloserPlacement(
        openerPlacement,
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
    const { theme, carouselSize, carouselPlacement } = this.state;
    const style = { ...theme, ...carouselSize, ...carouselPlacement };
    const scroller = setInterval(this.scroll, 5000);
    this.setState({ carouselStyles: style, scroller });
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
    const { carouselPage } = this.state;
    for (let i = 1; i < 6; i += 1) {
      if (i === carouselPage) {
        document.getElementById(`b${i}`).className = 'dotActive';
      } else {
        document.getElementById(`b${i}`).className = 'dot';
      }
    }
  }

  componentWillUnmount() {
    const { scroller } = this.state;
    clearInterval(scroller);
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

  closerClicked() {
    const { closerClicked } = this.props;
    closerClicked();
  }

  carouselClicked() {
    const { toggleShowOpener, openerSetForm } = this.props;
    const { carouselPage } = this.state;
    toggleShowOpener();
    openerSetForm(FeedbackCarousel.resolveCategory(carouselPage));
  }

  b1clicked() {
    const { scroller } = this.state;
    clearInterval(scroller);
    const scroller2 = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 1, scroller: scroller2 });
  }

  b2clicked() {
    const { scroller } = this.state;
    clearInterval(scroller);
    const scroller2 = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 2, scroller: scroller2 });
  }

  b3clicked() {
    const { scroller } = this.state;
    clearInterval(scroller);
    const scroller2 = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 3, scroller: scroller2 });
  }

  b4clicked() {
    const { scroller } = this.state;
    clearInterval(scroller);
    const scroller2 = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 4, scroller: scroller2 });
  }

  b5clicked() {
    const { scroller } = this.state;
    clearInterval(scroller);
    const scroller2 = setInterval(this.scroll, 5000);
    this.setState({ carouselPage: 5, scroller: scroller2 });
  }

  scroll() {
    const { carouselPage } = this.state;
    const oldPage = carouselPage;
    let newPage = oldPage + 1;
    if (newPage > 5) {
      newPage = 1;
    }
    this.setState({ carouselPage: newPage });
  }

  checkShowCarousel() {
    const { animation } = this.state;
    const { showOpener } = this.props;
    if (!showOpener) {
      return `1s carousel${animation}disappear both`;
    }
    return `1s carousel${animation}appear both`;
  }

  addAnimations(str) {
    const { carouselStyles } = this.state;
    const animationStyle = { animation: str };
    const style1 = carouselStyles;
    const final = { ...animationStyle, ...style1 };
    return final;
  }

  render() {
    const {
      carouselPage,
      closerPlacement,
      carouselStyles,
    } = this.state;
    const str1 = FeedbackCarousel.getCarouselMessage(carouselPage);
    const str2 = FeedbackCarousel.getButtonMessage(carouselPage);
    const str = this.checkShowCarousel();
    const finalStyle = this.addAnimations(str);

    return (
      <div style={finalStyle} className="carousel">
        <button
          type="button"
          style={closerPlacement}
          onClick={this.closerClicked}
          className="carouselCloser"
        >
          &#10006;
        </button>
        <div>
          {str1}
          <button
            style={{ fontSize: carouselStyles.fontSize }}
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

FeedbackCarousel.propTypes = {
  theme: PropTypes.string.isRequired,
  openerSize: PropTypes.string.isRequired,
  openerPlacement: PropTypes.string.isRequired,
  closerClicked: PropTypes.func.isRequired,
  showOpener: PropTypes.bool.isRequired,
  toggleShowOpener: PropTypes.func.isRequired,
  openerSetForm: PropTypes.func.isRequired,
};
