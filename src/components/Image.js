// function Image() {
//   return (
//     <div>
//       <img src="src/random-img.png" alt="random" />
//     </div>
//   );
// }

import Card from "./CardComponent";

// export default Image;

function Image() {
  return (
    <div className="Card">
      <Card
        image="src/random-img.png"
        title="This is a title"
        description="This is title's description"
      />
    </div>
  );
}

export default Image;
