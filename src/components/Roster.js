import React from 'react';
import './Roster.css'; // Assuming you have a CSS file for styling

// Sample data structure for the roster
const teamMembers = [
    {
      id: 1,
      name: 'Changsoo Jung',
      role: 'President',
      email: 'Changsoo.Jung@colostate.edu',
      photoUrl: 'https://via.placeholder.com/150',
      personalUrl: 'changsoojung.buzz'
    },
    {
      id: 2,
      name: 'Jane Smith',
        role: 'Vice President',
      email: 'jane.smith@example.com',
      photoUrl: 'https://via.placeholder.com/150',
      personalUrl: 'https://example.com/janesmith'
    },
    {
        id: 3,
        name: 'Jane Smith',
        role: 'Vice President',
        email: 'jane.smith@example.com',
        photoUrl: 'https://via.placeholder.com/150',
        personalUrl: 'https://example.com/janesmith'
    },
    {
        id: 4,
        name: 'Jane Smith',
        role: 'Vice President',
        email: 'jane.smith@example.com',
        photoUrl: 'https://via.placeholder.com/150',
        personalUrl: 'https://example.com/janesmith'
    },
    {
        id: 5,
        name: 'Jane Smith',
        role: 'Vice President',
        email: 'jane.smith@example.com',
        photoUrl: 'https://via.placeholder.com/150',
        personalUrl: 'https://example.com/janesmith'
    },

    // Add more team members as needed
  ];
  

const Roster = () => {
  return (
    <div className="roster-container">
      {teamMembers.map(member => (
        <div key={member.id} className="card">
          <img src={member.photoUrl} alt={member.name} className="card-img"/>
          <div className="card-info">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
            <p><a href={member.personalUrl} target="_blank" rel="noopener noreferrer">{member.personalUrl}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Roster;
