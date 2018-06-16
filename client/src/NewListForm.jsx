import React, {Component} from 'react';

class NewListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {
                title: "",
                user_id: this.props.userId,
                description: ""
            },
            items: []
        }
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

    submitItems(itemInfo, listId) {
        const item = {
            description: itemInfo,
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
    render() {
        return (
            <div className="new-list-form">
                <form >
                    <div className="list-content">
                        <label>Title:
                            <input type="text" name="title" onChange={this.handleUsername}/></label>
                        <label>Description:
                            <input type="text" name="description" onChange={this.handleDescription}/></label>
                    </div>
                    <div className="list-items">
                    
                    </div>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default NewListForm;