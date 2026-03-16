function Notification({ message }) {
  if (!message) return null;

  return (
    <div className="notification-popup">
      {message}
    </div>
  );
}

export default Notification;