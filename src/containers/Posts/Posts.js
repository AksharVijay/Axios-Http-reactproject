import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{
    state = {
        posts : [],
        selectedPostId : null,
        error : false
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
                const posts = response.data.slice(0,8);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author :'Akshar'
                    }
                })
                this.setState({posts : updatedPosts});
            // console.log(response);
        })
        .catch(response => {
           // console.log(response);
           this.setState({error:true});
        });

    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId : id})
       // this.props.history.push({pathname: '/posts/' + id});
        //this.props.history.push('/posts/' + id);
    }
    render(){
        let posts = <p style= {{textAlign :'center'}}>Something is wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post =>{
                return (
                    <Link to = {'/posts/' + post.id} key={post.id}>
                    <Post 
                        title ={post.title} 
                        author ={post.author} 
                        clicked ={() => this.postSelectedHandler(post.id)}/> 
                    </Link>
                )
            })
        }

        return(
            <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path= {this.props.match.url + '/:id'} component={FullPost}/>
            </div>

        );
    }
}

export default Posts;