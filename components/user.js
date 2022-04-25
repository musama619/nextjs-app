function User({ users }) {
  return (
    <>
      <span>Id: {users.id}</span>
      <br />
      <span>Name: {users.name}</span>
      <br />
      <span>Email: {users.email}</span>
      <br />
      <br />
    </>
  );
}

export default User;
