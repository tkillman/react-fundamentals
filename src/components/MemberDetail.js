import React from 'react';

class MemberDetail extends React.Component {

    render() {
        const detailMemberData = (
            <div>상세정보 : {this.props.memberData.name} , {this.props.memberData.phone} </div>
        );

        const noneData = (<div>no selected</div>);

        return (
            <div>
                {this.props.isSelected ? detailMemberData : noneData}
            </div>
        )
    }
}

MemberDetail.defaultProps = {
    memberData : {
        name : ''
        , phone : ''
    }
};

export default MemberDetail;