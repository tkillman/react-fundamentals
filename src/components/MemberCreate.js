import React from 'react';

class MemberCreate extends React.Component {
    render(){
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="phone" placeholder="phone"/>
                </p>
                <button>Create</button>
            </div>
        )
    }
}