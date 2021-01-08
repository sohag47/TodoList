import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import all pages
import CreateTodo from '../component/pages/CreateTodo';
import EditTodo from '../component/pages/EditTodo';
import TodoList from '../component/pages/TodoList';

class RouterTodo extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route path='/CreateTodo' component={CreateTodo}></Route>
                    <Route path='/EditTodo/:id' component={EditTodo}></Route>
                </Switch>
            </div>
        );
    }
}

export default RouterTodo;