import React from 'react';
import Header from '../components/Header'; 
import Searchbox from '../components/Searchbox'; 
import ResultsContainer from './ResultsContainer';
import NameCard from './NameCard';
import './App.css';
// import '../components/Header.css';


const name= require('@rstacruz/startup-name-generator');


class App extends React.Component {
    constructor(){
        super();

    
        this.state = {
            headerText: 'Gateway',
            headerExpanded: true,
            suggestedNames:[],



        };
    }
    handleInputChange =(inputText) => {
        // name(inputText);
        this.setState({headerExpanded: !inputText, 
            suggestedNames: inputText ? name(inputText) : []})
    
    };
    render() {
        
        return(
            <div> 
                <Header 
                headerExpanded={this.state.headerExpanded}
                headTitle={this.state.headerText}/>
                <Searchbox onInputChange ={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}
export default App;

