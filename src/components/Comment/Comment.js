import React from 'react';

const Comment = (props) => {
    const{name,email,body} = props.comment;
    return (
        <div style={{border: '1px solid purple'}}>
            <p>Name of commenter: {name}</p>
            <p>Email of commenter: {email}</p>
            <p>Full comment: {body}</p>
        </div>
    );
};

export default Comment;