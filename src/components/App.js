import React from 'react';
import Counter from './Counter';
import ListMember from './ListMember';


class App extends React.Component {
    render(){
        return (
            <div> 
                <h1>hello world!!</h1>
                <Counter title="카운터"/>
                <ListMember title="멤버리스트"/>
            </div>
        )
    }
}

export default App;