import React from 'react';

class MemberDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : ''
            ,phone : ''
            ,isEdit : false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggle () {
        console.log(this.props.memberData.name);
        this.setState({
            isEdit : !this.state.isEdit
            , name : this.props.memberData.name
            , phone : this.props.memberData.phone
        })
        
        if (this.state.isEdit) {
            
            if(!this.state.name) return;
            if(!this.state.phone) return;

            this.props.onEdit(this.state.name, this.state.phone);
        }
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        const editData = (
            <div>
                상세정보 : 
                <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="text" name="phone" placeholder="phone" onChange={this.handleChange} value={this.state.phone}/>
            </div>
        )

        const detailMemberData = (
            <div>
                상세정보 : {this.props.memberData.name} , {this.props.memberData.phone} 
            </div>
        );

        const whichModeData = this.state.isEdit ? editData : detailMemberData

        const noneData = (<div>no selected</div>);

        return (
            <div>
                {this.props.isSelected ? whichModeData : noneData}
                <button onClick = {this.handleToggle}>{this.state.isEdit ? 'Ok' : 'Edit'}</button>
                <button onClick = {this.props.onRemove}>Remove</button>
            </div>
        )
    }
}

MemberDetail.defaultProps = {
    memberData : {
        name : ''
        , phone : ''
    },
    onRemove : () => {console.error('onRemove is not defined')}
    ,onEdit : () => {console.error('onEdit is not defined')}
};

export default MemberDetail;