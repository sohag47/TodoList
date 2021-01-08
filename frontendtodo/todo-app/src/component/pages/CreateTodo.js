import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class CreateTodo extends Component {
    constructor() {
        super();
        this.state = {
            todo_description: "",
            todo_responsible: "",
            todo_priority: "",
            todo_completed: false
        }
    }
    onChangeTodoDescription = (e) => {
        this.setState({ todo_description: e.target.value });
    }
    onChangeTodoResponsible = (e) => {
        this.setState({ todo_responsible: e.target.value });
    }
    onChangeTodoPriority = (e) => {
        this.setState({ todo_priority: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:8082/api/todolistapi', newTodo)
            .then(res => {
                this.setState({
                    todo_description: '',
                    todo_responsible: '',
                    todo_priority: '',
                    todo_completed: false
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in Create Todolist");
            })
    };
    render() {
        return (
            <div style={{ marginTop: 10 }} >
                <h3>Create New Todo</h3>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group mt-10'>
                        <label>Description:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Responsibile:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className='form-group'>
                        <div className='form-check form-check-inline'>
                            <input
                                type='radio'
                                name='priorityOptions'
                                id='priorityLow'
                                className='form-check-input'
                                value='Low'
                                checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className='form-check-label'>Low</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                type='radio'
                                name='priorityOptions'
                                id='priorityMedium'
                                className='form-check-input'
                                value='Medium'
                                checked={this.state.todo_priority === 'Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className='form-check-label'>Medium</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                type='radio'
                                name='priorityOptions'
                                id='priorityHigh'
                                className='form-check-input'
                                value='High'
                                checked={this.state.todo_priority === 'High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className='form-check-label'>High</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <input
                            type='submit'
                            className='btn btn-primary'
                            value='Create Todo'
                        />
                    </div>
                </form>
            </div >
        );
    }
}

export default CreateTodo;