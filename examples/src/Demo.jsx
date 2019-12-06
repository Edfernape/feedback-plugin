import React from 'react';
import FeedbackPlugin from '../../src';

export default class Demo extends React.Component {
  static c0() {
    this.setState({
      theme: document.getElementById('demo-theme').value,
    });
  }

  static c1() {
    this.setState({
      openerType: document.getElementById('demo-openerType').value,
    });
  }

  static c2() {
    this.setState({
      openerPlacement: document.getElementById('demo-openerPlacement')
        .value,
    });
  }

  static c3() {
    this.setState({
      openerSize: document.getElementById('demo-openerSize').value,
    });
  }

  static c4() {
    this.setState({
      formIsPopup: document.getElementById('demo-formIsPopup').value,
    });
  }

  static c5() {
    this.setState({
      formPlacement: document.getElementById('demo-formPlacement')
        .value,
    });
  }

  static c6() {
    this.setState({
      popupWidth: document.getElementById('demo-popupWidth').value,
    });
  }

  static c7() {
    this.setState({
      popupHeight: document.getElementById('demo-popupHeight').value,
    });
  }

  static c8() {
    this.setState({
      popupUrl: document.getElementById('demo-popupUrl').value,
    });
  }

  static c9() {
    this.setState({
      postUrl: document.getElementById('demo-postUrl').value,
    });
  }

  plugin() {
    const {
      theme,
      openerType,
      openerPlacement,
      openerSize,
      formIsPopup,
      formPlacement,
      popupWidth,
      popupHeight,
      popupUrl,
      postUrl,
    } = this.state;

    return (
      <FeedbackPlugin
        theme={theme}
        openerType={openerType}
        openerPlacement={openerPlacement}
        openerSize={openerSize}
        formIsPopup={formIsPopup}
        formPlacement={formPlacement}
        popupWidth={popupWidth}
        popupHeight={popupHeight}
        popupUrl={popupUrl}
        postUrl={postUrl}
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      theme: 'blue',
      openerType: 'basic',
      openerPlacement: 'bottom-right',
      openerSize: 'medium',
      formIsPopup: false,
      formPlacement: 'centre',
      popupWidth: null,
      popupHeight: null,
      popupUrl: '',
      postUrl: '',
    };
    Demo.c0 = Demo.c0.bind(this);
    Demo.c1 = Demo.c1.bind(this);
    Demo.c2 = Demo.c2.bind(this);
    Demo.c3 = Demo.c3.bind(this);
    Demo.c4 = Demo.c4.bind(this);
    Demo.c5 = Demo.c5.bind(this);
    Demo.c6 = Demo.c6.bind(this);
    Demo.c7 = Demo.c7.bind(this);
    Demo.c8 = Demo.c8.bind(this);
    Demo.c9 = Demo.c9.bind(this);
  }

  componentDidMount() {
    document
      .getElementById('demo-theme')
      .addEventListener('change', Demo.c0);
    document
      .getElementById('demo-openerType')
      .addEventListener('change', Demo.c1);
    document
      .getElementById('demo-openerPlacement')
      .addEventListener('change', Demo.c2);
    document
      .getElementById('demo-openerSize')
      .addEventListener('change', Demo.c3);
    document
      .getElementById('demo-formIsPopup')
      .addEventListener('change', Demo.c4);
    document
      .getElementById('demo-formPlacement')
      .addEventListener('change', Demo.c5);
    document
      .getElementById('demo-popupWidth')
      .addEventListener('change', Demo.c6);
    document
      .getElementById('demo-popupHeight')
      .addEventListener('change', Demo.c7);
    document
      .getElementById('demo-popupUrl')
      .addEventListener('change', Demo.c8);
    document
      .getElementById('demo-postUrl')
      .addEventListener('change', Demo.c9);
  }

  componentWillUnmount() {
    document
      .getElementById('demo-theme')
      .removeEventListener('change', Demo.c0);
    document
      .getElementById('demo-openerType')
      .removeEventListener('change', Demo.c1);
    document
      .getElementById('demo-openerPlacement')
      .removeEventListener('change', Demo.c2);
    document
      .getElementById('demo-openerSize')
      .removeEventListener('change', Demo.c3);
    document
      .getElementById('demo-formIsPopup')
      .removeEventListener('change', Demo.c4);
    document
      .getElementById('demo-formPlacement')
      .removeEventListener('change', Demo.c5);
    document
      .getElementById('demo-popupWidth')
      .removeEventListener('change', Demo.c6);
    document
      .getElementById('demo-popupHeight')
      .removeEventListener('change', Demo.c7);
    document
      .getElementById('demo-popupUrl')
      .removeEventListener('change', Demo.c8);
    document
      .getElementById('demo-postUrl')
      .removeEventListener('change', Demo.c9);
  }

  render() {
    const {
      theme,
      openerType,
      openerPlacement,
      openerSize,
      formIsPopup,
      formPlacement,
      popupWidth,
      popupHeight,
      popupUrl,
      postUrl,
    } = this.state;

    const plugin = this.plugin();
    return (
      <div>
        {plugin}
        <div>
          <span>theme: </span>
          <select id="demo-theme" defaultValue="blue">
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <br />
          <span>openerType: </span>
          <select id="demo-openerType" defaultValue="basic">
            <option value="basic">Basic</option>
            <option value="carousel">Carousel</option>
          </select>
          <br />
          <span>openerPlacement: </span>
          <select
            id="demo-openerPlacement"
            defaultValue="bottom-right"
          >
            <option value="top">Top</option>
            <option value="top-right">Top right</option>
            <option value="right">Right</option>
            <option value="bottom-right">Bottom right</option>
            <option value="bottom">Bottom</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="left">Left</option>
            <option value="top-left">Top left</option>
          </select>
          <br />
          <span>openerSize: </span>
          <select id="demo-openerSize" defaultValue="medium">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <br />
          <span>formIsPopup: </span>
          <select id="demo-formIsPopup" defaultValue={false}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          <br />
          <span>formPlacement: </span>
          <select id="demo-formPlacement" defaultValue="centre">
            <option value="top">Top</option>
            <option value="top-right">Top right</option>
            <option value="right">Right</option>
            <option value="bottom-right">Bottom right</option>
            <option value="bottom">Bottom</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="left">Left</option>
            <option value="top-left">Top left</option>
            <option value="centre">Centre</option>
          </select>
          <br />
          <span>popupWidth: </span>
          <input id="demo-popupWidth" type="number" />
          <br />
          <span>popupHeight: </span>
          <input id="demo-popupHeight" type="number" />
          <br />
          <span>popupUrl: </span>
          <input id="demo-popupUrl" type="text" />
          <br />
          <span>postUrl: </span>
          <input id="demo-postUrl" type="text" />
        </div>
        <p>{theme}</p>
        <p>{openerType}</p>
        <p>{openerPlacement}</p>
        <p>{openerSize}</p>
        <p>{formIsPopup}</p>
        <p>{formPlacement}</p>
        <p>{popupWidth}</p>
        <p>{popupHeight}</p>
        <p>{popupUrl}</p>
        <p>{postUrl}</p>
      </div>
    );
  }
}
