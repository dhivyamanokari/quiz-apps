import React from 'react'
import Question from '../Components/Question/Question';
import Options from '../Components/Options/Options';
import "./Quiz.css";
import End from '../Components/End/End';
import Score from '../Components/Score/Score';
class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Questions : {
                1 : 'React is mainly used  for buliding _____________________',
                2 : '______________ can be done while multiple elements needs to be returned from a component',
                3 : 'What is used to pass data to a component from outside ?',
                4 : 'The arbitary inputs of components are called___________',
                5 : 'Ref is used for reffering an element or component returned by__________'

            },
            Options : {
                1 : {
                    1 : 'Database',
                    2 : 'Connectivity',
                    3 : 'User interface',
                    4 : 'Design platform'
                },
                2 : {
                    1 : 'Abstraction',
                    2 : 'Packing',
                    3 : 'Insulation',
                    4 : 'wrapping'
                },
                3 : {
                    1 : 'setstate',
                    2 : 'render with arguments',
                    3 : 'prototype',
                    4 : 'props'
                
                },
                4 : {
                    1 : 'keys',
                    2 : 'props',
                    3 : 'Elements',
                    4 : 'Ref'
                
                },
                5 : {
                    1 : 'react()',
                    2 : 'render ()',
                    3 : 'reduce()',
                    4 : 'refer()'
                  },
                 },
            correctOptions : {
                1:'3',
                2:'4',
                3:'4',
                4:'2',
                5:'2',
                },
            correctOption : 0,
            clickedOption : 0,
            step : 1,
            score : 0,
            result : 0,
            viewresult : 0
        }
    }
    checkOption = opt  => {
     if(opt === this.state.correctOptions[this.state.step]){
        this.setState({
            score : this.state.score+1,
            correctOption : this.state.correctOptions[this.state.step],
            clickedOption : opt,
            result : 1
        })
     } else {
        this.setState({
            correctOption : 0 ,
            clickedOption : opt,
            result : 1
        })
     }
    }
    Next = (step) => {
        this.setState({
            step : step+1,
            correctOption : 0,
            clickedOption : 0,
            result :0
        });
    }
    handleClick = () => {
        this.setState({
            viewresult : 1
        })
    }
    render(){
        return (
            <div>
        {
            this.state.step  <= Object.keys(this.state.Questions).length ? 
            <div className="QuizApp">
            <Question q = {this.state.Questions[this.state.step]} qno = {this.state.step} total = {Object.keys(this.state.Questions).length}/>
            <Options opt = {this.state.Options[this.state.step]}   clickevent = {this.checkOption} correctOption = {this.state.correctOption} 
            clickedOption = {this.state.clickedOption} result = {this.state.result}/>
            <button className="Next" disabled = {this.state.clickedOption ? false : true} onClick = {() => this.Next(this.state.step)}>
                 Next &gt;</button>
          
            </div> :
            this.state.viewresult ?
        
                (
                 <Score  score = {this.state.score} total = {Object.keys(this.state.Questions).length}/>
                )
            
             : (
                <End click = { () => this.handleClick()} />
            )
            
            
       }
            </div>
        );
    };
};
export default Quiz;