import React from 'react';

class Member extends React.Component {

    render () {
        return (
            <div onClick={this.props.onClick}>
                {this.props.memberData.name}
                 //// {this.props.memberData.phone}
            </div>
        )
    }
}

Member.defaultProps = {
    memberData : {
        name : ''
        , phone : ''
    }
};
export default Member;