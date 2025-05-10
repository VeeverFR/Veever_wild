export default function Logout() {
  const handleLogout = () => {
    fetch(`${import.meta.env.VITE_API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        window.location.href = "/login";
      });
  };

  return (
    <>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </>
  );
}
