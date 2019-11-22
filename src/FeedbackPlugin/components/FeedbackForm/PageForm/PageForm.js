/*  props available:
childSetPage method
setCat method
formCategory */

import React from 'react';
import './PageForm.css';

let data = {
    1:{
        heading: "General Feedback Form",
        pointers: "",
        ask: "Please indicate how urgent/important you would consider your feedback:",
        desc: "urgent/important"
    },
    2:{
        heading: "Usability Issue Reporting Form",
        pointers: "",
        ask: "Please indicate the severity of this issue:",
        desc: "severe"
    },
    3:{
        heading: "Bug Reporting Form",
        pointers:"",
        ask: "Please indicate the severity of this bug:",
        desc: "severe"
    },
    4:{
        heading: "Vulnerability Reporting Form",
        pointers: "",
        ask: "Please indicate the severity of this vulnerability:",
        desc: "severe"
    },
    5:{
        heading: "Feature Suggestion Form",
        pointers: "",
        ask: "Please rate how helpful or necessary you think this feature would be:",
        desc: "helpful/necessary"
    }
}

export default class PageForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formCategory: this.props.formCategory,
            title: "",
            mainText: "",
            rating: 3
        }
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

    componentDidMount(){
        document.getElementById("p2back").addEventListener("click", this.p2back);
        document.getElementById("p2form").addEventListener("submit", this.p2submit);
        document.getElementById("rate1").addEventListener("click", this.rate1clicked);
        document.getElementById("rate2").addEventListener("click", this.rate2clicked);
        document.getElementById("rate3").addEventListener("click", this.rate3clicked);
        document.getElementById("rate4").addEventListener("click", this.rate4clicked);
        document.getElementById("rate5").addEventListener("click", this.rate5clicked);
    }

    componentWillUnmount(){
        document.getElementById("p2back").removeEventListener("click", this.p2back);
        document.getElementById("p2form").removeEventListener("submit", this.p2submit);
        document.getElementById("rate1").removeEventListener("click", this.rate1clicked);
        document.getElementById("rate2").removeEventListener("click", this.rate2clicked);
        document.getElementById("rate3").removeEventListener("click", this.rate3clicked);
        document.getElementById("rate4").removeEventListener("click", this.rate4clicked);
        document.getElementById("rate5").removeEventListener("click", this.rate5clicked);
    }

    titleChange(e){
        this.setState({title: e.target.value});
    }

    mainTextChange(e){
        this.setState({mainText: e.target.value});
    }

    rate1clicked(){
        this.setState({rating: 1});
    }

    rate2clicked(){
        this.setState({rating: 2});
    }

    rate3clicked(){
        this.setState({rating: 3});
    }

    rate4clicked(){
        this.setState({rating: 4});
    }

    rate5clicked(){
        this.setState({rating: 5});
    }

    p2back(){
        this.props.childSetPage(1);
    }

    p2submit(){
        event.preventDefault();

        //using fetch to post
        fetch("http://localhost:3000/post-feedback", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            category: this.state.formCategory,
            title: this.state.title,
            mainText: this.state.mainText,
            rating: this.state.rating,
            multiplier: this.getMultiplier(this.state.formCategory)
        })})
        .then((response) => {
            if(!response.ok){
                console.log("Response: ");
                console.log(response);
                console.log("POST feedback response not ok.");
                // console.log("Headers: "+response.headers);
            }else{
                console.log("Response: ");
                console.log(response);
                // return response.json();
                return JSON.stringify(response);
            }
        }).then((json) => {
            console.log("JSON: ");
            console.log(json);
        }).catch((error) => {console.log("Error posting feedback: "+ error)});

        this.props.childSetPage(3);
    }

    getMultiplier(cat){
        switch(cat){
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 4;
            case 4:
                return 6;
            case 5:
                return 1;
        }
    }

    render(){
        return(
            <form id="p2form" className="p2">
                <h3 style={{margin: "15px 0px"}}>{data[this.state.formCategory].heading}</h3>
                <input value={this.state.title} className="p2f1" maxLength="150" type="text" placeholder="Enter a suitable title here." onChange={this.titleChange} required autoFocus />
                <textarea value={this.state.mainText} maxLength="1000" wrap="hard" rows="8" required className="p2f2" placeholder="Enter your response here." onChange={this.mainTextChange} />
                <h5 className="p2f3">{data[this.state.formCategory].ask}</h5>
                <div id="rateDiv" style={{display:"flex", flexDirection:"row-reverse", margin: "5px 10px"}} className="p2rating">
                    <input id="rate5" name="rating" type="radio" value="5" /><label title={"Extremely "+data[this.state.formCategory].desc} htmlFor="rate5">&#x2605;</label>
                    <input id="rate4" name="rating" type="radio" value="4" /><label title={"Very "+data[this.state.formCategory].desc} htmlFor="rate4">&#x2605;</label>
                    <input id="rate3" name="rating" type="radio" value="3"  defaultChecked/><label title={"Quite "+data[this.state.formCategory].desc} htmlFor="rate3">&#x2605;</label>
                    <input id="rate2" name="rating" type="radio" value="2" /><label title={"Fairly "+data[this.state.formCategory].desc} htmlFor="rate2">&#x2605;</label>
                    <input id="rate1" name="rating" type="radio" value="1" /><label title={"Somewhat "+data[this.state.formCategory].desc} htmlFor="rate1">&#x2605;</label>
                </div>
                <input className="p2submit" type="submit" value="Submit"/>
                <button id="p2back" className="p2back" type="button">Back</button>
            </form>
        );
    }
}