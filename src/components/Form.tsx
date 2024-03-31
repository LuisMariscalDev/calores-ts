import { useState } from "react";
import { ChangeEvent } from "react";
import { categories } from "../data/categories";

export default function Form() {

  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setActivity({
      ...activity,
      [e.target.id]: e.target.value
    })
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:
        </label>
        <select
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej:. Comida: Ensalada, Pollo. Ejercicio: Mancuernas, Bicicleta "
          onChange={handleChange}
          />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej:. 500"
          min={1}
          onChange={handleChange}
          />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value='Guardar Datos'
        />
    </form>
  );
}
