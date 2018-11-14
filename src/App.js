import React, {Component} from 'react';
import Page from './components/Page';
import Page1 from './page/Page1'
import Page2 from './page/Page2'
import './App.css';

class App extends Component {
    state={
        index:0,
        canScroll:false,
        scrollTop:0
    };
    handlerChange=(newIndex)=>{
        this.setState({index:newIndex,canScroll:newIndex>0});
    };
    handlerScroll=(e)=>{
        this.setState({
            scrollTop:e.target.scrollTop
        });
    };
    render() {
        return (
            <div className="App">
                <Page disabled={this.state.canScroll} onScroll={this.handlerScroll} index={this.state.index} onChange={this.handlerChange}>
                    <Page1 />
                    <Page2 top={this.state.scrollTop}/>
                </Page>
            </div>
        );
    }
}

export default App;
