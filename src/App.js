import "./App.css";

function App() {
  const fruit1 = "mangga";
  const fruit2 = "apple";
  const fruit3 = "delima";

  const fruits = ["mangga", "apple", "delima", "nanas", "jeruk", "pisang"];
  // fruits.push("anggur");
  // fruits.pop();
  // fruits.shift();
  // fruits.splice(0, 2);
  // console.log(fruits.includes("anggur"));
  const fruit = fruits.map((f, index) => <li key={index}>{f}</li>);

  const numbers = [1, 3, 5, 9, 2, 10];
  const number = numbers.filter((n) => n <= 2);
  const num = number.map((n) => <li key={n.toString()}>{n}</li>);

  const total = numbers.reduce((value, acc) => value + acc);
  console.log(total);

  return (
    <div>
      <h1>Hallo</h1>
      <ul>{fruit}</ul>
    </div>
  );
}

export default App;
