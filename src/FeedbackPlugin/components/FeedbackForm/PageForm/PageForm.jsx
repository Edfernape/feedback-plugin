import React from 'react';
import PropTypes from 'prop-types';
import './PageForm.css';

const data = {
  4: {
    heading: 'General Feedback Form',
    pointers: '',
    ask:
      'Please indicate how urgent/important you would consider your feedback:',
    desc: 'urgent/important',
  },
  3: {
    heading: 'Usability Issue Reporting Form',
    pointers: '',
    ask: 'Please indicate the severity of this issue:',
    desc: 'severe',
  },
  2: {
    heading: 'Bug Reporting Form',
    pointers: '',
    ask: 'Please indicate the severity of this bug:',
    desc: 'severe',
  },
  1: {
    heading: 'Vulnerability Reporting Form',
    pointers: '',
    ask: 'Please indicate the severity of this vulnerability:',
    desc: 'severe',
  },
  5: {
    heading: 'Feature Suggestion Form',
    pointers: '',
    ask:
      'Please rate how helpful or necessary you think this feature would be:',
    desc: 'helpful/necessary',
  },
};

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);
    const { formCategory, postUrl } = this.props;
    this.state = {
      formCategory,
      title: '',
      mainText: '',
      rating: 3,
      postUrl,
    };
    this.p2back = this.p2back.bind(this);
    this.p2submit = this.p2submit.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.mainTextChange = this.mainTextChange.bind(this);
    this.rate1clicked = this.rate1clicked.bind(this);
    this.rate2clicked = this.rate2clicked.bind(this);
    this.rate3clicked = this.rate3clicked.bind(this);
    this.rate4clicked = this.rate4clicked.bind(this);
    this.rate5clicked = this.rate5clicked.bind(this);
  }

  componentDidMount() {
    document
      .getElementById('p2back')
      .addEventListener('click', this.p2back);
    document
      .getElementById('p2submit')
      .addEventListener('click', this.p2submit);
    document
      .getElementById('rate1')
      .addEventListener('click', this.rate1clicked);
    document
      .getElementById('rate2')
      .addEventListener('click', this.rate2clicked);
    document
      .getElementById('rate3')
      .addEventListener('click', this.rate3clicked);
    document
      .getElementById('rate4')
      .addEventListener('click', this.rate4clicked);
    document
      .getElementById('rate5')
      .addEventListener('click', this.rate5clicked);
  }

  componentWillUnmount() {
    document
      .getElementById('p2back')
      .removeEventListener('click', this.p2back);
    document
      .getElementById('p2submit')
      .removeEventListener('click', this.p2submit);
    document
      .getElementById('rate1')
      .removeEventListener('click', this.rate1clicked);
    document
      .getElementById('rate2')
      .removeEventListener('click', this.rate2clicked);
    document
      .getElementById('rate3')
      .removeEventListener('click', this.rate3clicked);
    document
      .getElementById('rate4')
      .removeEventListener('click', this.rate4clicked);
    document
      .getElementById('rate5')
      .removeEventListener('click', this.rate5clicked);
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  mainTextChange(e) {
    this.setState({ mainText: e.target.value });
  }

  rate1clicked() {
    this.setState({ rating: 1 });
  }

  rate2clicked() {
    this.setState({ rating: 2 });
  }

  rate3clicked() {
    this.setState({ rating: 3 });
  }

  rate4clicked() {
    this.setState({ rating: 4 });
  }

  rate5clicked() {
    this.setState({ rating: 5 });
  }

  p2back() {
    const { childSetPage } = this.props;
    childSetPage(1);
  }

  p2submit() {
    const {
      formCategory,
      title,
      mainText,
      rating,
      postUrl,
    } = this.state;
    const { childSetPage } = this.props;

    fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: formCategory,
        title,
        mainText,
        rating,
      }),
    });
    // .then(response => {
    //   if (!response.ok) {
    //     console.log('server response not ok.');
    //   }
    //   console.log('Response: ');
    //   console.log(response);
    //   return response.json();
    // })
    // .then(json => {
    //   console.log('JSON: ');
    //   console.log(json);
    // })
    // .catch(error => {
    //   console.log('Error: ');
    //   console.log(error);
    // });

    childSetPage(3);
  }

  render() {
    const { formCategory, mainText, title } = this.state;
    return (
      <form id="p2form" className="p2">
        <h3 style={{ margin: '15px 0px' }}>
          {data[formCategory].heading}
        </h3>
        <input
          style={{
            color: 'black',
          }}
          value={title}
          className="p2f1"
          maxLength="150"
          type="text"
          placeholder="Enter a suitable title here."
          onChange={this.titleChange}
          required
        />
        <textarea
          style={{
            color: 'black',
            fontSize: 'medium',
          }}
          value={mainText}
          maxLength="1000"
          wrap="hard"
          rows="8"
          required
          className="p2f2"
          placeholder="Enter your response here."
          onChange={this.mainTextChange}
        />
        <h5 className="p2f3">{data[formCategory].ask}</h5>
        <div
          id="rateDiv"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            margin: '5px 10px',
          }}
          className="p2rating"
        >
          <input id="rate5" name="rating" type="radio" value="5" />
          <label
            title={`Extremely ${data[formCategory].desc}`}
            htmlFor="rate5"
          >
            &#x2605;
          </label>
          <input id="rate4" name="rating" type="radio" value="4" />
          <label
            title={`Very ${data[formCategory].desc}`}
            htmlFor="rate4"
          >
            &#x2605;
          </label>
          <input
            id="rate3"
            name="rating"
            type="radio"
            value="3"
            defaultChecked
          />
          <label
            title={`Quite ${data[formCategory].desc}`}
            htmlFor="rate3"
          >
            &#x2605;
          </label>
          <input id="rate2" name="rating" type="radio" value="2" />
          <label
            title={`Fairly ${data[formCategory].desc}`}
            htmlFor="rate2"
          >
            &#x2605;
          </label>
          <input id="rate1" name="rating" type="radio" value="1" />
          <label
            title={`Somewhat ${data[formCategory].desc}`}
            htmlFor="rate1"
          >
            &#x2605;
          </label>
        </div>
        <input
          id="p2submit"
          className="p2submit"
          type="button"
          value="Submit"
        />
        <button id="p2back" className="p2back" type="button">
          Back
        </button>
      </form>
    );
  }
}

PageForm.propTypes = {
  formCategory: PropTypes.number.isRequired,
  childSetPage: PropTypes.func.isRequired,
  postUrl: PropTypes.string.isRequired,
};
