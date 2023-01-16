import React, {Component} from 'react';

class TodoBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{value: 'Here is empty', id: 1}, {value: 'Here too', id: 2}, {value: 'And here', id: 3}],
            note: '',
            currentId: 4,
        }
    }

    deleteItem = (id) => () => {
        this.setState(({
            data: this.state.data.filter(item => item.id !== id)
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.note.length < 3) return;
        this.setState(prevState => ({
            data: [
                {value: this.state.note, id: this.state.currentId},
                ...prevState.data,
            ],
            currentId: this.state.currentId + 1,
            note: '',
        }))

    }

    onValueChange = (e) => {
        this.setState({
            note: e.target.value
        })
    }


    render() {

        const renderList = this.state.data.map((item) => (
            <div key={item.id}>
                <div className="row m-3">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={this.deleteItem(item.id)}>Delete
                        </button>
                    </div>
                    <div className="col">{item.value}</div>
                </div>
                <hr/>
            </div>
        ))
        return (
            <div>
                <div className="m-3">
                    <form className="d-flex"
                          onSubmit={this.onSubmit}>
                        <div className="me-3">
                            <input type="text" value={this.state.note} required="" className="form-control"
                                   placeholder="I am going..."
                                   onChange={this.onValueChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {renderList}
            </div>
        );
    }
}

export default TodoBox;