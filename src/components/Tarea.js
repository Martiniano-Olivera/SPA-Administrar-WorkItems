import React from "react";

const Tarea = ({ tarea, eliminarTarea }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{tarea.nombreTarea}</h3>
      <p className="card-text">
        <span>Nombre del empleado</span> {tarea.nombreEmpleado}
      </p>
      <p className="card-text">
        <span>Rango del empleado</span> {tarea.rangoEmpleado}
      </p>
      <p>
        <span>Fecha</span> {tarea.fecha}
      </p>
      <p>
        <span>Hora</span> {tarea.hora}
      </p>
      <p>
        <span></span> {tarea.tipoTarea}
      </p>

      <button className="btn btn-danger" onClick={() => eliminarTarea(tarea.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Tarea;
