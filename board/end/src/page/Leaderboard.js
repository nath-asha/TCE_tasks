import React from 'react';
import '../App.css'; 

function Leaderboard({ leaderboardData, toppers }) {
  return (
    <div className="leaderboard-container">
      <h2>Top 3 Participants</h2>
      <div className="toppers-container">
        {toppers.map((participant, index) => (
          <div key={participant.name} className="topper-card"> 
            <h3>{participant.name}</h3>
            <p>Score: {participant.score}</p>
            <a href={participant.github_url} target="_blank" rel="noopener noreferrer">
              <img src="logo.png" alt="GitHub Logo" className="github-logo" /> 
            </a>
          </div>
        ))}
      </div>

      {/* <h2>Leaderboard</h2> */}
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>GitHub</th> 
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((participant, index) => (
            <tr key={participant.name}> 
              <td>{index + 1}</td>
              <td>{participant.name}</td>
              <td>
                <a href={participant.github_url} target="_blank" rel="noopener noreferrer">
                  <img src="logo.png" alt="GitHub Logo" className="github-logo" /> {/* Add className for styling */}
                </a>
              </td>
              <td>{participant.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;

// import React from 'react';

// function Leaderboard({ leaderboardData, toppers }) {
//     return (
//         <div>
//             <h2>Top 3 Participants</h2>
//             {/* <div>
//             <h2>Top 3 Performers</h2>
//             <div className="toppers-container">
//                 {toppers.map((participant, index) => (
//                     <div key={index} className="topper-card"> 
//                         <h3>{participant.name}</h3>
//                         <p>Score: {participant.score}</p>
//                         <a href={participant.github_url} target="_blank" rel="noopener noreferrer">
//                             <img src='logo.png' alt='github logo' />
//                         </a>
//                     </div>
//                 ))}
//             </div> */}


//             <h2>Leaderboard</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Rank</th>
//                         <th>Name</th>
//                         <th>GitHub Link</th>
//                         <th>Score</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {leaderboardData.map((participant, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{participant.name}</td>
//                             <td>
//                                 <a href={participant.github_url} target="_blank" rel="noopener noreferrer">
//                                     <img src='logo.png' alt='github logo' />
//                                 </a>
//                             </td>
//                             <td>{participant.score}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Leaderboard;

