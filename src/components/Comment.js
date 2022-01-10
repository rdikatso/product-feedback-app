import React from 'react'
import { CommentReply } from './CommentReply'

export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="heading">
                <img src={comment.user.image} alt="profile"></img>
                <p>
                    <span>{comment.user.name}</span>
                    <span>{comment.user.username}</span>
                </p>
                <p>Reply</p>
            </div>
            <p>{comment.content}</p>
            {comment.replies ? comment.replies.map(reply => <CommentReply key={reply.user.name} comment={reply}/>) : null }
        </div>
    )
}
