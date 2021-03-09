import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const{id,title,body} = props.post;
    const history = useHistory();
    const showComment= id =>{
        const url=`posts/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3><strong>id: {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={()=>showComment(id)}>Show Comment</button>

        </div>
    );
};

export default Post;