import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  tarea: {
    empleado: "",
    rango: "",
    fecha: "",
    hora: "",
    tipoTarea: ""
  },
  error: false
};

class NuevaTarea extends Component {
  state = {
    ...stateInicial
  };

  handleChange = e => {
    // colocar lo que el usuario escribe en el state
    this.setState({
      tarea: {
        ...this.state.tarea,
        [e.target.name]: e.target.value
      }
    });
  };
  // cuando el usuario envia el formulario
  handleSubmit = e => {
    e.preventDefault();

    //extraer los valores del state
    const { empleado, rango, fecha, hora, tipoTarea } = this.state.tarea;

    //validar que todos los campos esten llenos
    if (
      empleado === "" ||
      rango === "" ||
      fecha === "" ||
      hora === "" ||
      tipoTarea === ""
    ) {
      this.setState({
        error: true
      });

      // detener la ejecucion
      return;
    }

    // generar objeto cons los datos
    const nuevaTarea = {
      ...this.state.tarea
    };
    nuevaTarea.id = uuid();

    // agragar el tarea al state de App
    this.props.crearNuevaTarea(nuevaTarea);

    //colocar en el state el stateInicial
    this.setState({
      ...stateInicial
    });
  };

  render() {
    /// extrar valor del state
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llene el formulario para asignar tareas a los integrantes del
            equipo.{" "}
          </h2>{" "}
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios{" "}
            </div>
          ) : null}{" "}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre de empleado{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre empleado"
                  name="empleado"
                  onChange={this.handleChange}
                  value={this.state.tarea.empleado}
                />{" "}
              </div>{" "}
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Tipo de desarrollador.{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rango del empleado."
                  name="rango"
                  onChange={this.handleChange}
                  value={this.state.tarea.rango}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                {" "}
                Fecha{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.tarea.fecha}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label"> Hora </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.tarea.hora}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Ingrese descripción sobre la tarea:{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Breve descripción de la tarea"
                  name="tipoTarea"
                  onChange={this.handleChange}
                  value={this.state.tarea.tipoTarea}
                />{" "}
              </div>{" "}
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva tarea"
            />
          </form>{" "}
          {/*form-group */}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default NuevaTarea;
