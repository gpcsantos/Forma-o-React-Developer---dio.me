import React, { useEffect, useState } from 'react';

// COMPONENTES DE CLASSE
// class App extends Component {
//   state = {
//     usarios: ['Palbo', 'José', 'Manoel'],
//   };
//   render() {
//     const { usuarios } = this.state;
//     return (
//       <div className='App'>
//         <h1>Hello</h1>
//         {usuarios.map(item => (
//           <p>{item}</p>
//         ))}
//       </div>
//     );
//   }
// }

// COMPONENTE FUNCIONAL
const App = () => {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Palbo', 'José', 'Manoel']);
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };
  useEffect(() => {
    setCount(usuarios.length);
  }, [usuarios]);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <div>
        <p>Count: {count}</p>
        <input
          type='text'
          value={usuario}
          onChange={event => setUsuario(event.target.value)}
        />
        <button onClick={handleAddUser}>Adiciona</button>
      </div>
      <hr />
      {usuarios.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default App;
