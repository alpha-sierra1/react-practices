// function Image() {
//   return (
//     <img
//       className="randomimg"
//       src="src/random-img.png"
//       alt="random img"
//       width={100}
//       height={100}
//     />
//   );
// }

/* function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default Card; */

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
