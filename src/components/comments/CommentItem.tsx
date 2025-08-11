import { Comment } from "@/types/comments";
import Image from "next/image";
import React from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

interface CommentItemProps {
  comment: Comment;
  isReplying: boolean;
  onReplyClick: () => void;
  onReplySubmit: (content: string) => void;
  isSubmitting: boolean;
}

const CommentItem = ({
  comment,
  isReplying,
  onReplyClick,
  onReplySubmit,
  isSubmitting,
}: CommentItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-4">
        <Image
          src={
            comment.authorImageUrl ||
            "https://randomuser.me/api/portraits/men/50.jpg"
          }
          width={50}
          height={50}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p>{comment.content}</p>
          <div className="text-sm text-gray-600">
            <strong>{comment.author}</strong>
            {comment.createdAt && (
              <> . {new Date(comment.createdAt).toLocaleString()}</>
            )}
          </div>
          <button
            onClick={onReplyClick}
            className="text-sm text-blue-500 hover:underline mt-1 cursor-pointer"
          >
            {isReplying ? "Cancel" : "Reply"}
          </button>
        </div>
      </div>
      
      {(comment.replyText?.length ?? 0) > 0 && (
        <ReplyList replies={comment.replyText ?? []} />
      )}

      {isReplying && (
        <ReplyForm
          onSubmit={onReplySubmit}
          isSubmitting={isSubmitting}
          placeholder={`Replying to ${comment.author}....`}
        />
      )}
    </div>
  );
};

export default CommentItem;
