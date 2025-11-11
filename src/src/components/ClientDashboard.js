import React from 'react';
import ProductsTab from './client/tabs/ProductsTab';

export default function ClientDashboard({ user }) {
  const business = { id: 1 }; // Simulado

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Factufacil POS</h1>
      <ProductsTab business={business} />
    </div>
  );
}
