import Header from "../../components/Header";
import { Container } from "../../components/container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPropertySale = () => {
  return (
    <>
      <Header />
      <Container>
      <Link to={'/admin/properties/'}>
        <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
      </Link>
        <div className="flex justify-center mt-5">
          <div className="bg-white p-8 shadow-lg rounded-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Registrar Nueva Venta
            </h2>
            <form onSubmit={''} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <select
                  name="propiedad"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Propiedad</option>
                  <option value="propiedad1">Propiedad 1</option>
                  <option value="propiedad2">Propiedad 2</option>
                  <option value="propiedad3">Propiedad 3</option>
                </select>

                <select
                  name="cliente"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Cliente</option>
                  <option value="cliente1">Cliente 1</option>
                  <option value="cliente2">Cliente 2</option>
                  <option value="cliente3">Cliente 3</option>
                </select>

                <input
                  type="date"
                  name="fecha"
                  value={''}
                  onChange={''}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <input
                  type="number"
                  name="monto"
                  placeholder="Monto Total"
                  value={''}
                  onChange={''}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  Registrar Venta
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewPropertySale;