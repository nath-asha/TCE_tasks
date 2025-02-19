import React, { useState, useEffect } from 'react';
import Leaderboard from './page/Leaderboard';
import './App.css';

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [sortedLeaderboardData, setSortedLeaderboardData] = useState([]);
  const [toppers, setToppers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {  
      setLoading(true); 
      setError(null); 

      try {
        const response = await fetch('/scores.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLeaderboardData(data);
        sortLeaderboard(data);
      } catch (err) {
        console.error('Error fetching leaderboard data:', err);
        setError(err.message); 
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (sortedLeaderboardData.length > 0) {
      setToppers(sortedLeaderboardData.slice(0, 3));
    }
  }, [sortedLeaderboardData]);

  const sortLeaderboard = (data) => {
    const sortedData = [...data].sort((a, b) => b.score - a.score);
    setSortedLeaderboardData(sortedData);
  };


  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <Leaderboard leaderboardData={sortedLeaderboardData} toppers={toppers} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import Leaderboard from './page/Leaderboard';
// import './App.css';

// function App() {
//     const [leaderboardData, setLeaderboardData] = useState([]);
//     const [sortedLeaderboardData, setSortedLeaderboardData] = useState([]);
//     const [toppers, setToppers] = useState([]);

//     useEffect(() => {
//         fetch('/scores.json')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setLeaderboardData(data);
//                 sortLeaderboard(data);
//             })
//             .catch(error => console.error('Error fetching leaderboard data:', error));
//     }, []);

//     useEffect(() => {
//         if (sortedLeaderboardData.length > 0) {
//             setToppers(sortedLeaderboardData.slice(0, 3));
//         }
//     }, [sortedLeaderboardData]);

//     const sortLeaderboard = (data) => {
//         const sortedData = [...data].sort((a, b) => b.score - a.score);
//         setSortedLeaderboardData(sortedData);
//     };


//     return (
//         <div className="App">
//             <h1>Leaderboard</h1>
//             <Leaderboard leaderboardData={sortedLeaderboardData} toppers={toppers} />
//         </div>
//     );
// }

// export default App;