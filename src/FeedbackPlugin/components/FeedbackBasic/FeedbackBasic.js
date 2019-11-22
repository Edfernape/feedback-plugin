/* props available:

theme = red|yellow|blue|green|orange|purple|dark|light
openerPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left
openerSize = small|medium|large
showOpener = true|false

openerSetForm method
toggleShowOpener method
closerClicked method

local states:
divSize
divPlacement
closerPlacement
openerStyles
animation
openerDivStyles
*/

import React from 'react';
import './FeedbackBasic.css';

export default class FeedbackBasic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: this.setTheme(this.props.theme),
            openerSize: this.setOpenerSize(this.props.openerSize),
            divSize: this.setDivSize(this.props.openerSize),
            divPlacement: this.setDivPlacement(this.props.openerPlacement),
            closerPlacement: this.setCloserPlacement(this.props.openerPlacement),
            openerStyles: {},
            openerDivStyles: {},
            animation: this.setAnimation(this.props.openerPlacement)
        }
        this.openerClicked = this.openerClicked.bind(this);
        this.closerClicked = this.closerClicked.bind(this);
    }

    componentDidMount(){
        // configure all styles based on props
        const theme = this.state.theme;
        const openerSize = this.state.openerSize;
        const styles1 = {...theme, ...openerSize};
        const divPlacement = this.state.divPlacement;
        const divSize = this.state.divSize;
        const styles2 = {...divPlacement, ...divSize};
        this.setState({openerStyles: styles1, openerDivStyles: styles2});
    }

    /* constructor's functions to set opener's state */
    setTheme(theme){
        switch(theme){
            case 'red':
                return({backgroundColor: '#e42217', color: 'whitesmoke'});
            case 'yellow':
                return({backgroundColor: 'yellow', color: 'black'});
            case 'blue':
                return({backgroundColor: 'dodgerblue', color: 'whitesmoke'});
            case 'green':
                return({backgroundColor: '#87f717', color: 'black'});
            case 'orange':
                return({backgroundColor: '#f88017', color: 'whitesmoke'});
            case 'purple':
                return({backgroundColor: 'purple', color: 'whitesmoke'});
            case 'dark':
                return({backgroundColor: '#34282c', color: 'whitesmoke'});
            case 'light':
                return({backgroundColor: '#fefcff', color: '#34282c'});
        }
    }

    setOpenerSize(size){
        switch(size){
            case 'small':
                return({fontSize: "small"});
            case 'medium':
                return({fontSize: "medium"});
            case 'large':
                return({fontSize: "larger"});
            default:
                return({fontSize: "medium"});
        }
    }

    setDivSize(size){
        switch(size){
            case 'small':
                return({width: "90px", height: "30px"});
            case 'medium':
                return({width: "120px", height: "40px"});
            case 'large':
                return({width: "150px", height: "50px"});
            default:
                return({width: "120px", height: "40px"});
        }
    }

    setDivPlacement(placement){
        switch(placement){
            case 'top':
                return({top: "1%", left: "50%", transform: "translate(-50%)"});
            case 'top-right':
                return({top: "1%", right: "1%"});
            case 'right':
                return({top:"50%", right: "1%", transform: "translateY(-50%)"});
            case 'bottom-right':
                return({bottom: "1%", right: "1%"});
            case 'bottom':
                return({bottom: "1%", left: "50%", transform: "translate(-50%)"});
            case 'bottom-left':
                return({bottom: "1%", left: "1%"});
            case 'left':
                return({top: "50%", left: "1%", transform: "translateY(-50%)"});
            case 'top-left':
                return({top: "1%", left: "1%"});
        }
    }

    setCloserPlacement(placement){
        switch(placement){
            case 'top':
                return({top: "108%", left: "50%", transform: "translateX(-50%)"});
            case 'top-right':
                return({top: "50%", right: "108%", transform: "translateY(-50%)"});
            case 'right':
                return({top: "50%", right: "108%", transform: "translateY(-50%)"});
            case 'bottom-right':
                return({top: "50%", right: "108%", transform: "translateY(-50%)"});
            case 'bottom':
                return({bottom: "108%", left: "50%", transform: "translateX(-50%)"});
            case 'bottom-left':
                return({top: "50%", left: "108%", transform: "translateY(-50%)"});
            case 'left':
                return({top: "50%", left: "108%", transform: "translateY(-50%)"});
            case 'top-left':
                return({top: "50%", left: "108%", transform: "translateY(-50%)"});
        }
    }

    setAnimation(placement){
        switch(placement){
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
        }
    }
    
    /* onClick functions */
    openerClicked(){
        this.props.toggleShowOpener();
        this.props.openerSetForm(6);
    }

    closerClicked(){
        this.props.closerClicked();
    }

    /* functions used upon rendering */
    checkShowOpener(){
        if(this.props.showOpener){
            return("1s "+this.state.animation+"appear"+" both");
        }else{
            return("1s "+this.state.animation+"disappear"+" both");
        }
    }

    checkShowOpener2(){
        if(this.props.showOpener){
            return false;
        }else{
            return true;
        }
    }

    addAnimations(str){
        const style1 = this.state.openerDivStyles;
        const style2 = {animation: str};
        const style3 = {...style1, ...style2};
        return style3;
    }

    render(){
        var str = this.checkShowOpener();
        var disabled = this.checkShowOpener2();
        var finalStyle = this.addAnimations(str);

        return(
            <div style={finalStyle} className="openerDiv">
                <button type="button" disabled={disabled} style={this.state.closerPlacement} onClick={this.closerClicked} className="closer">&#10006;</button>
                <button disabled={disabled} type="button" style={this.state.openerStyles} className="opener" onClick={this.openerClicked}>
                    Feedback
                </button>
            </div>
        );
    }
}