function Achievement({ text }) {
  if (!text) return null;

  return (
    <div className="achievement">
      {text}
    </div>
  );
}

export default Achievement;