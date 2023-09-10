export default function Friend({ friend }) {
  const { name, email } = friend;
  const friendDivBorder = {
    border: "2px solid pink",
    marginBottom: "2px",
    borderRadius: "5px",
    padding: "10px",
  };
  return (
    <div style={friendDivBorder}>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
