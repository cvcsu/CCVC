import React from 'react';
import './Roster.css'; // Assuming you have a CSS file for styling

// Sample data structure for the roster
const teamMembers = [
    {
      id: 1,
      name: 'Changsoo Jung',
      role: 'President',
      email: 'Changsoo.Jung@colostate.edu',
      photoUrl: '/roster/changsoo.jpg',
      personalUrl: 'changsoojung.buzz'
    },
    {
      id: 2,
      name: 'Ethan Seefried',
        role: 'Vice President',
      email: 'ethan.seefried@colostate.edu',
      photoUrl: '/roster/ethan.jpg',
      personalUrl: 'https://example.com/example'
    },
    {
        id: 3,
        name: 'Jack Fitzgerald',
        role: 'Treasurer',
        email: 'jack.fitzgerald@colostate.edu',
        photoUrl: '/roster/jack.jpg',
        personalUrl: 'https://example.com/example'
    },
    {
        id: 4,
        name: 'Mariah Bradford',
        role: 'Secretary',
        email: 'mbrad@rams.colostate.edu',
        photoUrl: '/roster/mariah.jpg',
        personalUrl: 'https://example.com/example'
    },
    {
        id: 5,
        name: 'Caspian Siebert',
        role: 'Membership Coordinator',
        email: 'caspian.siebert@colostate.edu',
        photoUrl: '/roster/caspian.jpg',
        personalUrl: 'https://example.com/example'
    },
    {
      id: 6,
      name: 'Videep Venkatesha',
      role: 'Communication Coordinator ',
      email: 'videep.venkatesha@colostate.edu',
      photoUrl: '/roster/videep.jpg',
      personalUrl: 'https://example.com/example'
    },
    {
      id: 7,
      name: 'Soumyadip Roy',
      role: 'Mentor Coordinator',
      email: 'Soumyadip.Roy@colostate.edu',
      photoUrl: '/roster/soumyadip.jpg',
      personalUrl: 'https://example.com/example'
    },
    {
      id: 8,
      name: 'Iliana Castillon',
      role: 'Web Coordinator',
      email: 'ilianaca@rams.colostate.edu',
      photoUrl: '/roster/iliana.jpg',
      personalUrl: 'https://example.com/example'
    },
  

    // Add more team members as needed
  ];
  

const Roster = () => {
  return (
    <div className="container">
      <h3 className='sectionheader'>Board Members</h3>
      <div className="roster-container">
        {teamMembers.map(member => (
          <div key={member.id} className="card">
            <img src={`${process.env.PUBLIC_URL}${member.photoUrl}`} alt={member.name} className="card-img"/>
            <div className="card-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
              <p><a href={member.personalUrl} target="_blank" rel="noopener noreferrer">{member.personalUrl}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Roster;
