import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://redesigned-palm-tree-97v99jpjjr4f75vg-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Leaderboard</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  {leaderboard[0] && Object.keys(leaderboard[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(leaderboard) && leaderboard.map((entry, idx) => (
                  <tr key={idx}>
                    {leaderboard[0] && Object.keys(leaderboard[0]).map((key) => (
                      <td key={key}>{String(entry[key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
