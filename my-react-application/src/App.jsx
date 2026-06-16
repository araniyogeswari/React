import Animal from "./Animal.jsx";

function App() {
  let user = true;
  const name = "Birds";
  let num1 = 42;
  let num2 = 18;
  let num = num1 + num2;
  const warn = () =>{
  alert("Warning ⚠️")
  };
  return (
    <>
      {user ? <p>User Logged IN</p> :
       <p>Invalid User</p>}
      <h1 style={{ color: "blue" }}>page of {name}</h1>
      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <img
          src="https://i.pinimg.com/control1/736x/21/0e/88/210e883eb29a4d611722807bbdbc1775.jpg"
          alt="Bird"
          style={{ width: 200 }}
        />
        <div>
          <p className="Avia">HELLO WORLD</p>
          <p>
            Birds are a group of warm-blooded vertebrate animals constituting the class Aves,
            characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
            a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.
            Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the
            2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split
            into {num} orders.Birds are a group of warm-blooded vertebrate animals constituting the class Aves,
            characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
            a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.
            Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the
            2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split
            into {num} orders.Birds are a group of warm-blooded vertebrate animals constituting the class Aves,
            characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
            a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.
            Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the
            2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split
            into {num} orders.Birds are a group of warm-blooded vertebrate animals constituting the class Aves,
            characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
            a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.
            Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the
            2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split
            into {num} orders.
          </p>
        </div>
      </div>
      <button onDoubleClick={warn} style={{width:"fit-content"}}>Danger</button>
      <hr />
      <Animal />
    </>
  );
}

export default App;
