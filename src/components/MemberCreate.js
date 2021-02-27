import React from 'react';
import PropTypes from 'prop-types';

class MemberCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           name : ''
           , phone : '' 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick () {
        console.log('handleClick', this.props);
        const memberData = {
            name : this.state.name
            , phone : this.state.phone
        }

        this.props.onCreate(memberData);
        this.setState({
            name : ''
            , phone : ''
        })
    }   

    render(){
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                    <input type="text" name="phone" placeholder="phone" onChange={this.handleChange}/>
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

MemberCreate.propTypes ={
    onCreate : PropTypes.func
}

MemberCreate.defaultProps = {
    onCreate : () => {console.error('onCreate not defined')}
}

export default MemberCreate;