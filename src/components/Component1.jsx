import React, {Component} from 'react';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            current: 0,
            currentId: 0,
        }
    }

    minusCurrent = () => {
        this.setState((state) => ({
            current: state.current - 1,
            currentId: state.currentId + 1,
        }))
        this.setState((state) => ({
            data: [
                {value: state.current, id: state.currentId},
                ...state.data,
            ]
        }))
    }
    plusCurrent = () => {
        this.setState(() => ({
            current: this.state.current + 1,
            currentId: this.state.currentId + 1,
        }))
        this.setState((state) => ({
            data: [
                {value: state.current, id: state.currentId},
                ...state.data,
            ]
        }))
    }

    // minusCurrent = () => {
    //     this.setState(prevState => ({
    //         current: this.state.current - 1,
    //         currentId: this.state.currentId + 1,
    //         data: [
    //             {value: this.state.current - 1, id: this.state.currentId},
    //             ...prevState.data,
    //         ]
    //     }))
    // }
    // plusCurrent = () => {
    //     this.setState(prevState => ({
    //         current: this.state.current + 1,
    //         currentId: this.state.currentId + 1,
    //         data: [
    //             {value: this.state.current + 1, id: this.state.currentId},
    //             ...prevState.data,
    //         ]
    //     }))
    // }

    onHandle = (type) => () => {
        if (type === "plus") return this.plusCurrent();
        if (type === "minus") return this.minusCurrent();
        return ''
    }
    deleteItem = (id) => () => {
        this.setState(({
            data: this.state.data.filter(item => item.id !== id)
        }))
    }

    render() {
        const {data} = this.state
        const renderList = data.map((item) => (
            <button type="button" className="list-group-item list-group-item-action"
                    key={item.id}
                    onClick={this.deleteItem(item.id)}>
                {item.value}
            </button>
        ))

        return (
            <div>
                <div className="mb-5">
                    <div className="btn-group font-monospace mr-4 mt-4 " role="group">
                        <button type="button" className="btn btn-outline-success" onClick={this.onHandle('plus')}>+
                        </button>
                        <button type="button" className="btn btn-outline-danger" onClick={this.onHandle('minus')}>-
                        </button>
                    </div>
                    <div className="list-group component__space">
                        {renderList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Component1;