import React, {Component} from 'react';
import ListItem from './ListItem.jsx'
import NewListItem from './NewListItem.jsx'

class NewListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {
                title: "",
                user_id: this.props.userId,
                description: ""
            },
            items: [{description: ""},{description:""},{description:""}]
        }
        this.handleDescription = this.handleDescription.bind(this)
        this.handleListItem = this.handleListItem.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleAddNewListItem = this.handleAddNewListItem.bind(this)
        this.handleItemUpdate = this.handleItemUpdate.bind(this)
    }
    submitForm(event) {
        event.preventDefault()
        fetch(`/api/v1/lists`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({list: this.state.list}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(list => {
                const promises = this.state.items.map(item => this.submitItems(item, list.id))
                .catch(err => console.log(err))
                return Promise.all(promises)
                .catch(err => console.log(err))
            }).then(result => this.props.toggleShowNewList)
    }

    submitItems(itemObject, listId) {
        const item = {
            description: itemObject.description,
            list_id: listId,
            completed: false
        }
        fetch(`/api/v1/items`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({item: item}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => console.log(err))
    }

    handleDescription(e){
        this.setState({list: {description: e.target.value}})
    }
    handleTitle(e) {
        this.setState({list: {title: e.target.value}})
    }
    handleAddNewListItem(){
        this.setState({items: this.state.items.concat([{description: ""}])})
    }
    handleItemUpdate(e, idx) {
        const newItems = this.state.items.map((ele, sidx)=> {
            if (idx !== sidx) return ele 
            return {description: e.target.value}
        })
        this.setState({items: newItems})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.items !== nextState.items
    }
    render() {
        return (
            <div className="new-list-form">
                <form onSubmit={this.submitForm}>
                    <div className="list-content">
                        <label>Title:
                            <input type="text" name="title" onChange={this.handleTitle}/></label>
                        <label>Description:
                            <input type="text" name="description" onChange={this.handleDescription}/></label>
                    </div>
                    <div className="list-items">
                        <label>To do items:</label>
                        {this.state.items.map((ele, idx)=> {
                            <ListItem index={idx} handleItemUpdate={this.handleItemUpdate}/>
                        })}
                        <NewListItem onClick={this.handleAddNewListItem}/>
                    </div>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default NewListForm;