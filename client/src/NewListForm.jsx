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
            items: [
                {description:"", completed:false},
                {description:"", completed:false},
                {description:"", completed:false}]
        }
    }
    submitForm = (event)=> {
        event.preventDefault()
        fetch(`/api/users/${this.props.userId}/lists`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({list: this.state.list}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        .then(res => res.json())
        .then(list => {
            const promises = this.state.items
                .filter(ele => ele.description !== "")
                .map(item => this.submitItems(item, list.id))
            return Promise.all(promises)
            .catch(err => console.log(err))
            })
        .then(result => this.props.toggleShowNewList)
    }

    submitItems(itemObject, listId) {
        const item = {
            description: itemObject.description,
            list_id: listId,
            completed: itemObject.completed
        }
        fetch(`/api/users/${this.props.userId}/lists/${listId}`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({item: item}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => console.log(err))
    }

    handleDescription =(e) =>{
        this.setState({list: Object.assign({}, this.state.list, {description: e.target.value})})
    }
    handleTitle=(e) =>{
        this.setState({list: Object.assign({}, this.state.list, {title: e.target.value})})
    }
    handleAddNewListItem=()=>{
        this.setState({items: this.state.items.concat([{description: ""}])})
    }
    handleItemDescription = (e, idx) =>{
        const newItems = this.state.items.map((ele, sidx)=> {
            if (idx !== sidx) return ele 
            return Object.assign({}, ele, {description: e.target.value})
        })
        this.setState({items: newItems})
    }
    handleItemCompleted = (e, idx) => {
        const newItems = this.state.items.map((ele, sidx)=> {
            if (idx !== sidx) return ele 
            return Object.assign({}, ele, {completed: !ele.completed})
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
                        <label>Things that need to be done:</label>
                        {this.state.items.map((ele, idx)=> {
                            return <ListItem key={idx} 
                            index={idx} 
                            handleItemDescription={this.handleItemDescription}
                            handleItemCompleted={this.handleItemCompleted}/>
                        })}
                        <NewListItem handleAddNewListItem={this.handleAddNewListItem}/>
                    </div>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default NewListForm;