'use client'

import React from 'react';
import useClickCounter from './useClickCounter'; // Certifique-se de que o caminho e o nome estejam corretos

function ContadorDeCliques() {
  const [count, increment] = useClickCounter(); // Usa o hook para gerenciar o contador

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Clique aqui</button>
    </div>
  );
}

export default ContadorDeCliques;
