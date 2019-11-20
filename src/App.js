import React, { Component } from "react";
import "./bootstrap.min.css";

import Header from "./components/Header";
import NuevaTarea from "./components/NuevaTarea";
import ListadoTareas from "./components/ListadoTareas";

class App extends Component {
  state = {
    tareas: []
  };

  //! Cuando la aplicacion se carga
  componentDidMount() {
    const tareasLS = localStorage.getItem("tareas");
    if (tareasLS) {
      this.setState({ tareas: JSON.parse(tareasLS) });
    }
  }

  //! Cuando eliminamos o agregamos una nueva tarea
  componentDidUpdate() {
    localStorage.setItem("tareas", JSON.stringify(this.state.tareas));
  }

  crearNuevaTarea = datos => {
    //console.log(datos);
    //copiar el state actual
    const tareas = [...this.state.tareas, datos];

    // agregar el nuevo state
    this.setState({
      tareas
    });
  };

  //! Elimina las tareas del state

  eliminarTarea = id => {
    // console.log(id);
    //! tomar una copia del state
    const tareasActuales = [...this.state.tareas];
    const tareas = tareasActuales.filter(tarea => tarea.id !== id);

    this.setState({ tareas });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de WorkItems del Equipo FCyT." />
        <NuevaTarea crearNuevaTarea={this.crearNuevaTarea} />

        <ListadoTareas
          tareas={this.state.tareas}
          eliminarTarea={this.eliminarTarea}
        />
      </div>
    );
  }
}

export default App;
