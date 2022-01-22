import React from 'react'
import '../css/CommentReply.css'

export const CommentReply = ({comment}) => {
    return (
        <div className="comment-reply">
            <div className="border"></div>
            <div className="comment-reply-heading">
                <div className="profile">
                    <img src={comment.user.image} alt="profile"></img>
                    <div>
                        <p>{comment.user.name}</p>
                        <p>{`@${comment.user.username}`}</p>
                    </div>
                </div>
                <p className="reply">Reply</p>
            </div>
            <p><span>{`@${comment.replyingTo}`} </span>{comment.content}</p>
        </div>
    )
}
