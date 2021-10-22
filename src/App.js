import { Component } from "react";
import Productos from "./components/Productos";
import Layaout from "./components/Layaout";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Layaout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("no hace nada")}
            productos={this.state.productos}
          />
        </Layaout>
      </div>
    );
  }
}
export default App;
