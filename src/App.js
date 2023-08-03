import "./App.css";
import Sunglasses from "./Sunglasses";

const ajio = [
  {
    ImagePath: "images/Fossil.png",
    Brand: "Fossil",
    Model: "Women Gradient Butterfly Sunglasses-FO013",
    Price: "Rs.2,466",
  },
  {
    ImagePath: "images/John Jacobs.png",
    Brand: "John Jacobs",
    Model: "Sunglasses for Men",
    Price: "Rs.2,850",
  },
  {
    ImagePath: "images/Kalvin Clein.png",
    Brand: "Kalvin Clein",
    Model: "Ck 18720 332 53 S UV Protected Oval Sunglasses",
    Price: "Rs.2,638",
  },
  {
    ImagePath: "images/Moschino.png",
    Brand: "Moschino",
    Model: "MOS079/S Full-Rim Square Sunglasses",
    Price: "Rs.6,386",
  },
  {
    ImagePath: "images/Ray Ban.png",
    Brand: "Ray Ban",
    Model: "ORB4381I Gradient Full Rim Sunglasses",
    Price: "Rs.5,661",
  },
  {
    ImagePath: "images/Ray Ban2.png",
    Brand: "Ray Ban",
    Model: "ORB4251I601/9A56-N Full-Rim Square Sunglasses",
    Price: "Rs.6,831",
  },
  {
    ImagePath: "images/Ted Smith.png",
    Brand: "Ted Smith",
    Model: "TS3016-BLK/GLD UV-Protected Clubmasters",
    Price: "Rs.541",
  },
  {
    ImagePath: "images/Ted Smith2.png",
    Brand: "Ted Smith",
    Model: "TS-3548 UV-Protected Hexagonal Sunglasses",
    Price: "Rs.350",
  },
  {
    ImagePath: "images/Tommy Hilfiger.png",
    Brand: "Tommy Hilfiger",
    Model: "TH Jesse C3 54 S Lens Oversized Sunglasses",
    Price: "Rs.4,155",
  },
];

function App() {
  return (
    <div style={{ margin: "2rem", display: "flex", flexWrap: "wrap" }}>
      {ajio.map((shades) => (
        <Sunglasses
          ImagePath={shades.ImagePath}
          Brand={shades.Brand}
          Model={shades.Model}
          Price={shades.Price}
        />
      ))}
    </div>
  );
}

export default App;
