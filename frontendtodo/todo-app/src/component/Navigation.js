import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg";

class Navigation extends Component {
    render() {
        return (
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <a className='navbar-brand' href='http://localhost:3000/'>
                        <img src={logo} width='30' height='30' alt='CodingTheSmartWay.com'></img>
                    </a>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='navbar-item'><NavLink exact className='navbar-brand' to='/'>Home</NavLink></li>
                            <li className='navbar-item'><NavLink exact className='navbar-brand' to='/CreateTodo'>Create TodoList</NavLink></li>
                            {/*<li className='navbar-item'><NavLink exact className='nav-link' to='/EditTodo'>Update Todo List</NavLink></li>*/}
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>
        );
    }
}

export default Navigation;