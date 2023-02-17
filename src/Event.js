import React from "react";

class Eventreact extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "syafiq",
    };
  }

  kirimpesan(nama) {
    alert("kirim pesan kepada " + nama);
  }

  ubahtulisan(e) {
    e.target.innerHTML = "Kirim Pesan";
  }

  ubahlagi(e) {
    e.target.innerHTML = "Click Me";
  }

  sapa(e) {
    this.setState({ nama: e.target.value });
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => alert("Hallo Syafiq")}>Click Me</button> */}
        {/* <button onClick={this.kirimpesan.bind(this, "syafiq")}>
          Kirim Pesan
        </button>
        <button onClick={(e) => this.kirimpesan("syafiq", e)}>
          Kirim Pesan
        </button> */}
        {/* <button
          onClick={this.kirimpesan.bind(this, "Emha")}
          onMouseEnter={(e) => this.ubahtulisan(e)}
          onMouseOut={this.ubahlagi.bind(this)}
        >
          Click Me
        </button> */}
        <h1>Hallo : {this.state.nama}</h1>
        <input type={"text"} onChange={this.sapa.bind(this)}></input>
      </div>
    );
  }
}

export default Eventreact;
