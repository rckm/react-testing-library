import React, { useState } from 'react';

import './App.css';

const getUser = () => Promise.resolve({ id: 1, name: 'Eric' });

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      id="search"
      type="text"
      placeholder="search text..."
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const App = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const handleChange = React.useCallback(
    ({ target }) => {
      setSearch(target.value);
    },
    [setSearch]
  );

  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <img className="img" src="" alt="search" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};

export default App;
