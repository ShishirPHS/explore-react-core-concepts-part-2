export default function Post({ post }) {
  console.log(post);
  const { userId, title, body } = post;
  return (
    <div className="border">
      <h5>
        <strong>User Id:</strong> {userId}
      </h5>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <small>
          <strong>Post Body:</strong> {body}
        </small>
      </p>
    </div>
  );
}
