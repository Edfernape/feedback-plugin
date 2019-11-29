/*  props available:
childSetPage method
formCategory
setCat method */

import React from 'react';
import './PageSelect.css';

export default class PageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formCategory: this.setCategory(this.props.formCategory),
    };
    this.btn1 = this.btn1.bind(this);
    this.btn2 = this.btn2.bind(this);
    this.btn3 = this.btn3.bind(this);
    this.btn4 = this.btn4.bind(this);
    this.btn5 = this.btn5.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    for (let i = 1; i < 6; i += 1) {
      if (i === this.state.formCategory) {
        document.getElementById(`btn${i}`).className =
          'p1btnselected';
      } else {
        document.getElementById(`btn${i}`).className = 'p1btn';
      }
    }
    document
      .getElementById('btn1')
      .addEventListener('click', this.btn1);
    document
      .getElementById('btn2')
      .addEventListener('click', this.btn2);
    document
      .getElementById('btn3')
      .addEventListener('click', this.btn3);
    document
      .getElementById('btn4')
      .addEventListener('click', this.btn4);
    document
      .getElementById('btn5')
      .addEventListener('click', this.btn5);
    document
      .getElementById('p1next')
      .addEventListener('click', this.next);
  }

  componentDidUpdate() {
    for (let i = 1; i < 6; i += 1) {
      if (i === this.state.formCategory) {
        document.getElementById(`btn${i}`).className =
          'p1btnselected';
      } else {
        document.getElementById(`btn${i}`).className = 'p1btn';
      }
    }
  }

  componentWillUnmount() {
    document
      .getElementById('btn1')
      .removeEventListener('click', this.btn1);
    document
      .getElementById('btn2')
      .removeEventListener('click', this.btn2);
    document
      .getElementById('btn3')
      .removeEventListener('click', this.btn3);
    document
      .getElementById('btn4')
      .removeEventListener('click', this.btn4);
    document
      .getElementById('btn5')
      .removeEventListener('click', this.btn5);
  }

  setCategory(cat) {
    if (cat === 6) {
      return 1;
    }
    return cat;
  }

  btn1() {
    this.props.setCat(1);
    this.setState({ formCategory: 1 });
  }

  btn2() {
    this.props.setCat(2);
    this.setState({ formCategory: 2 });
  }

  btn3() {
    this.props.setCat(3);
    this.setState({ formCategory: 3 });
  }

  btn4() {
    this.props.setCat(4);
    this.setState({ formCategory: 4 });
  }

  btn5() {
    this.props.setCat(5);
    this.setState({ formCategory: 5 });
  }

  next() {
    this.props.setCat(this.state.formCategory);
    this.props.childSetPage(2);
  }

  render() {
    return (
      <div className="p1">
        <h2>Please select a category for your feedback.</h2>
        <button id="btn1" className="p1btn" type="button">
          General Feedback
        </button>
        <button id="btn2" className="p1btn" type="button">
          Usability Issue
        </button>
        <button id="btn3" className="p1btn" type="button">
          Bug Report
        </button>
        <button id="btn4" className="p1btn" type="button">
          Vulnerability Report
        </button>
        <button id="btn5" className="p1btn" type="button">
          Feature Suggestion
        </button>
        <button id="p1next" className="p1next" type="button">
          Next
        </button>
      </div>
    );
  }
}
