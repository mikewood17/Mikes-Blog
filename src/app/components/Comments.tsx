import { WEBSITE_URL } from "config";

export default async function Comments({ slug }: { slug: string }) {
  const commentsRes = await fetch(`${WEBSITE_URL}/comments/${slug}`, { next: { revalidate: 2 } });
  const { comments } = await commentsRes.json();
  console.log("comments", comments);
  console.log("commentsRes", commentsRes);
  return (
    <div className="formZone">
      <div className="formContainer">
        <div className="formHeaderContainer">
          <h2>Comments</h2>
          <h3>We Would Love To Hear From You! Please Leave A Comment</h3>
        </div>
        <form className="formMain" action={`/api/comments/${slug}`} method="POST">
          <div className="formInputs">
            <div className="formSection">
              <label htmlFor="username">Name</label>
              <input type="text" name="username" className="formControl" />
            </div>
            <div className="formSection">
              <label htmlFor="comment">Comment</label>
              <textarea name="comment" cols={30} rows={10} className="formControl" />
            </div>
          </div>
          <button type="submit">Submit Comment</button>
        </form>
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
