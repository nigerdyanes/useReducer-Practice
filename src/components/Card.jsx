const Card = ({ data, onDelete }) => {
  return (
    <div className="Card">
      <span>{data.name}</span>
      <br />
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
};

export default Card;
