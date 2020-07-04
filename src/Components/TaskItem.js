import React, { Component } from "react";
class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStatus: false
        }
    }
    handleClick = (e) => {
        this.setState({
            toggleStatus: !this.state.toggleStatus
        })
    }
    render() {
        const { data } = this.props;
        const { toggleStatus } = this.state;
        return (
            <>
                <li>
                    <div className={toggleStatus ? "success" : "notSuccess"}>
                        <input type="checkbox" onClick={this.handleClick}
                            className={toggleStatus ? "text-success check-box" : "text-dark check-box"}
                        />
                        <label className={toggleStatus ? "text-success" : "text-dark"}>
                            {data.title}
                        </label>
                    </div>
                </li>
            </>
        )
    }
}
export default TaskItem;