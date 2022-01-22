import React from 'react'
import { CommentReply } from './CommentReply'
import '../css/Comment.css'

export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <div className="profile">
                    <img src={comment.user.image} alt="Avatar" className="avatar"></img>
                    <div>
                        <p>{comment.user.name}</p>
                        <p>{`@${comment.user.username}`}</p>
                    </div>
                </div>
                <p className="reply">Reply</p>
            </div>
            <p>{comment.content}</p>
            {comment.replies ? comment.replies.map(reply => <CommentReply key={reply.user.name} comment={reply}/>) : null }
        </div>
    )
}
