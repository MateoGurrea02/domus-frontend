import Header from "../components/Header";
import { Container } from "../components/container/Container";
import { useState } from "react";

const NewClient = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex justify-center mt-5">
          <div className="bg-white p-8 shadow-lg rounded-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Registrar Nuevo Cliente
            </h2>
            <form onSubmit={''} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <select
                  name="rol"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Rol</option>
                  <option value="administrador">Administrador</option>
                  <option value="usuario">Usuario</option>
                  <option value="invitado">Invitado</option>
                </select>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  Registrar Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewClient;
