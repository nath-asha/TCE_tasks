import React, { useState, useEffect } from 'react';
import Leaderboard from './page/Leaderboard';
import './App.css';

function App() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [sortedLeaderboardData,setSortedLeaderboardData] = useState([])
    const [toppers, setToppers] = useState([])

    useEffect(() => {
        fetch('/scores.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => { setLeaderboardData(data);
                            sortLeaderboard(data);
                            setToppers(data)
    })
            .catch(error => console.error('Error fetching leaderboard data:', error));
    }, []);

    const sortLeaderboard = (data) => {
      const sortedData = [...data].sort((a, b) => b.score - a.score); 
      setSortedLeaderboardData(sortedData);
  };
    
    

    return (
        <div className="App">
            <h1>Leaderboard</h1>
            <Leaderboard leaderboardData={sortedLeaderboardData} />
        </div>
    );
}

export default App;

// function ParticipantForm({ addParticipant }) {
//     const [name, setName] = useState('');
//     const [score, setScore] = useState('');
//     const [git, setGit] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name || !score || !git) return;
//         addParticipant(name, score, git);
//         setName('');
//         setScore('');
//         setGit('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="participant-form">
//             <input type="text" placeholder="Participant Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} required />
//             <input type="text" placeholder="GitHub Link" value={git} onChange={(e) => setGit(e.target.value)} required />
//             <button type="submit">Add Participant</button>
//         </form>
//     );
// }


// function App() {
//   const [participants, setParticipants] = useState([]);
//   const [leaderboardData, setLeaderboardData] = useState([]);
//   const [score, setscore] = useState('');
//   const [git, setgit] = useState('');
//   // const [badge, setbadge] = useState('');

//   const addParticipant = (name, score) => {
//       const newParticipant = {
//           name: name,
//           score: score,
//           git: git
//           // rank : rank,
//           // badge : badge
//       };
//       setParticipants([...participants, newParticipant]);
//   };

//   const updateLeaderboard = () => {
//       const sortedParticipants = [...participants].sort(
//           (a, b) => b.score - a.score);
//       setLeaderboardData(sortedParticipants);
//   };

//   return (
//       <div className="App">
//           <div className="container">
//               <h1 className="title"> score </h1>
//               <div className="steps-container">
//               </div>
//               <ParticipantForm addParticipant={addParticipant}
//                   updateLeaderboard={updateLeaderboard} />
//               <Leaderboard leaderboardData={leaderboardData} />
//           </div>
//       </div>
//   );
// }

// function ParticipantForm({ addParticipant,
//   updateLeaderboard }) {
//   const [name, setName] = useState('');
//   const [score, setScore] = useState(0);
//   const [git, setgit] = useState('');

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       addParticipant(name, score);
//       updateLeaderboard();
//       setName('');
//       setScore('');
//       setgit('');
//   };

//   return (
//       <form onSubmit={handleSubmit} className="participant-form">
//           <input type="text" placeholder="Participant Name"
//               value={name} onChange={
//                   (e) => setName(e.target.value)} required />
//           <input type="number" placeholder="Score"
//               value={score} onChange={
//                   (e) => setScore(e.target.value)} required />
//           <input type="text" placeholder="Github link"
//               value={git} onChange={
//                   (e) => setgit(e.target.value)} required />
//           <button type="submit">
//               Add Participant
//           </button>
//       </form>
//   );
// }

// export default App;