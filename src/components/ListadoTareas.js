import React from "react";
import Tarea from "./Tarea.js";

const ListadoTareas = ({ tareas, eliminarTarea }) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">Administra las tareas aqui</h2>
      <div className="lista-tareas">
        {tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
        ))}
      </div>
    </div>
  </div>
);

export default ListadoTareas;
