import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export default function ProductsTab({ business }) {
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Productos</h2>
        <button className="bg-yellow-500 text-white p-2 rounded-full">
          <Plus size={20} />
        </button>
      </div>
      <div className="text-center py-8 text-gray-500">
        No hay productos. ¡Agrega el primero!
      </div>
    </div>
  );
}
