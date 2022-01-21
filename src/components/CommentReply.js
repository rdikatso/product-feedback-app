import React from 'react'

export const CommentReply = ({comment}) => {
    return (
        <div className="comment-reply">
             <div className="comment-reply-heading">
                <img src={comment.user.image} alt="profile"></img>
                <p>
                    <span>{comment.user.name}</span>
                    <span>{comment.user.username}</span>
                </p>
                <p>Reply</p>
            </div>
            <p><span>{comment.replyingTo}</span>{comment.content}</p>
        </div>
    )
}
