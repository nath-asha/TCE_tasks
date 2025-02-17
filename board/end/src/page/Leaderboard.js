import React from 'react';

function Leaderboard({ leaderboardData }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>GitHub Link</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((participant, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{participant.name}</td>
                            <td><a href={participant.git} target="_blank" rel="noopener noreferrer"><img src='logo.png' alt='github logo'></img></a></td>
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

// function Leaderboard({ leaderboardData }) {
//     return (
//         <div>
//             <h2>Top Participants</h2>
//             <ul>
//                 {leaderboardData.map((participant, index) => (
//                     <li key={index}>
//                         {participant.name} - {participant.score} 
//                         (<a href={participant.git} target="_blank" rel="noopener noreferrer">GitHub</a>)
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Leaderboard;
