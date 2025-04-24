import { useState } from 'react';

const TAXA_DOLAR = 5.00; // Cotação fixa em 14/04/2025

export default function ConversorDollar() {
  const [valorDolar, setValorDolar] = useState('');
  const [valorReal, setValorReal] = useState('');

  const handleDolarChange = (e) => {
    const dolar = e.target.value;
    setValorDolar(dolar);
    setValorReal(dolar ? (dolar * TAXA_DOLAR).toFixed(2) : '');
  };

  const handleRealChange = (e) => {
    const real = e.target.value;
    setValorReal(real);
    setValorDolar(real ? (real / TAXA_DOLAR).toFixed(2) : '');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conversor de Dólar</h1>
      <div>
        <label className="block mb-2">Dólar (USD):</label>
        <input
          type="number"
          placeholder="USD"
          value={valorDolar}
          onChange={handleDolarChange}
          className="border p-2 mb-4 w-full"
        />
        <label className="block mb-2">Real (BRL):</label>
        <input
          type="number"
          placeholder="BRL"
          value={valorReal}
          onChange={handleRealChange}
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
}
