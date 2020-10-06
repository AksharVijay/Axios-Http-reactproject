import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'; 
import './Blog.css';
import axios from 'axios';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';


class Blog extends Component {
    state = {
        auth : false
    }
    render () {

        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink to="/posts/" exact 
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#336699',
                                textDecoration :'underline'
                            }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                // pathname: this.props.match.url + '/new-post',
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </header>

                {/* <Route path="/" exact render={() => <div>Home</div>}/>
                <Route path="/"  render={() => <div>Home2</div>}/>
                <Route path="/new-post" exact render={() => <div>Home3</div>}/> */}
            <Switch>
                {this.state.auth  ? <Route path="/new-post" exact component={NewPost}/> : null }
                <Route path="/posts" component={Posts}/>
                <Redirect from= "/" to="/posts" />
                {/* <Route  render= {() => <h1>not found</h1>}/> */}
            </Switch>
            </div>
        );
    }
}

export default Blog;