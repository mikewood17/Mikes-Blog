import { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";
import { currentUser } from "@clerk/nextjs";
import { handleSubmitFormAction } from "../actions/commentAction";

export default async function Comments({ slug }: { slug: string }) {
  const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 0 } });
  const { comments } = await commentsRes.json();

  const user = await currentUser();
  console.log("this is the user", user?.username);
  return (
    <div className="formZone">
      <div className="formContainer">
        <div className="formHeaderContainer">
          <h2>Comments</h2>
          <h3>We Would Love To Hear From You! Please Leave A Comment</h3>
        </div>
        {/* @ts-ignore */}
        <CommentForm slug={slug} username={user?.username} saveCommentAction={handleSubmitFormAction} />
      </div>

      {comments && (
        <ul className="commentList">
          {comments.map((comment: any) => {
            return (
              <li className="commentItem" key={comment.uuid}>
                <h3 className="commentAuthor">{comment.username} says...</h3>
                <p className="commentContent">{comment.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
