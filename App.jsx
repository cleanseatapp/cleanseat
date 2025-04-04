import { useState } from 'react';

const mockRestaurants = [
  { name: 'Sunset Diner', location: 'Bayou La Batre', highchair: true, booster: false, notes: 'Highchairs were clean, but no boosters.' },
  { name: 'Crabby’s Seafood', location: 'Mobile', highchair: false, booster: true, notes: 'Booster seat was sticky. No highchairs seen.' },
  { name: 'Bayfront Grill', location: 'Bayou La Batre', highchair: true, booster: true, notes: 'Both were spotless!' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(mockRestaurants);

  const handleSearch = () => {
    const filtered = mockRestaurants.filter(r =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>CleanSeat</h1>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          placeholder="Search by restaurant or city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flexGrow: 1, padding: '0.5rem', fontSize: '1rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>Search</button>
      </div>

      {results.length > 0 ? results.map((r, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{r.name}</h2>
          <p style={{ fontSize: '0.875rem', color: '#555' }}>{r.location}</p>
          <div style={{ marginTop: '0.5rem' }}>
            <p>Highchairs: {r.highchair ? '✅' : '❌'}</p>
            <p>Booster Seats: {r.booster ? '✅' : '❌'}</p>
            <p style={{ fontStyle: 'italic', fontSize: '0.875rem', marginTop: '0.25rem' }}>"{r.notes}"</p>
          </div>
        </div>
      )) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default App;