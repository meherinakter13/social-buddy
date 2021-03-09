import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const{id} = useParams();
    const[postDetails,setPostDetails] = useState({});
    const[comments,setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> res.json())
        .then(data=> setPostDetails(data))
    },[id])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=> res.json())
        .then(data=> setComments(data))
    },[id])
    return (
        <div>
            <h1>This is post Details of id :{id}</h1>
            <p>User posted: {postDetails.id}</p>
            <p>Post title: {postDetails.title}</p>
            <p>Post body: {postDetails.body}</p>
            <p>Number of Comment: {comments.length}</p>
            {
                comments.map(comment =><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;