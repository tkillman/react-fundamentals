import React from 'react';
import update from 'react-addons-update';
import Member from './Member';
import MemberDetail from './MemberDetail';
import MemberCreate from './MemberCreate';


class ListMember extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            memberListData : [
                {name : "김동규1", phone : "010-8449-0001"}
                , {name : "김동규2", phone : "010-8449-0002"}
                , {name : "김동규3", phone : "010-8449-0003"}
            ]
            , selectedKey : -1
            , searchKeyWord : ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //데이터
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleCreate(memberData){
        this.setState({
            memberListData:update(this.state.memberListData, {$push:[memberData]})
        })
    }

    handleRemove () {
        
        if (this.state.selectedKey == -1) return;

        this.setState({
            memberListData : update(this.state.memberListData, {$splice:[[this.state.selectedKey, 1]]})
            , selectedKey : -1
        })
    }

    handleEdit (name, phone) {
        
        this.setState({
            memberListData : update(this.state.memberListData,
                {
                    [this.state.selectedKey]:{
                        name:{$set:name}
                        , phone:{$set:phone}
                    }
                })
        })
    }

    handleClick (key) {
        this.setState({
            selectedKey : key
        });
    }

    handleChange (e) {
        this.setState({
            searchKeyWord : e.target.value
        })
    }

    render() {
        let fileName = "ListMember.js";
        
        const memberArr = (memberList) => {
            const searchKeyWord = this.state.searchKeyWord;

            memberList = memberList.filter(memberData => memberData.name.indexOf(searchKeyWord) > -1);
            
            return memberList.length == 0 ? "no Data" : memberList.map((memberData,i) => <Member memberData={memberData} key={i} onClick={() => this.handleClick(i)}/>);
        }

        return (
            <div>
                <h3>fileName : {fileName}</h3>
                <h3>title : {this.props.title}</h3>
                <div><input type="text" name="searchKeyWord" onChange={this.handleChange} placeholder="name"/></div>
                <div>{memberArr(this.state.memberListData)}</div>
                <MemberDetail isSelected={this.state.selectedKey == -1 ? false : true} memberData={this.state.memberListData[this.state.selectedKey]} onRemove={this.handleRemove} onEdit={this.handleEdit}/>
                <MemberCreate onCreate={this.handleCreate}/>
            </div>
        )
    }
}

export default ListMember;