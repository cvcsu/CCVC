import React from 'react';
import './Roster.css'; // Assuming you have a CSS file for styling

// Data structure for the roster
const boardMembers = [
    {
      id: 2,
      name: 'Ethan Seefried',
        role: 'President',
      email: 'ethan.seefried@colostate.edu',
      photoUrl: '/roster/ethan.jpg',
      personalUrl: '',
      speciality: 'Dataset Curation'
    },
    {
        id: 3,
        name: 'Jack Fitzgerald',
        role: 'Vice President & Treasurer',
        email: 'jack.fitzgerald@colostate.edu',
        photoUrl: '/roster/jack.jpg',
        personalUrl: '',
        speciality: 'Utilizing CV and ML in Remote Sensing Applications'
    },
    {
      id: 4,
      name: 'Caleb Christian',
      role: 'Treasurer',
      email: 'caleb@colostate.edu',
      photoUrl: '/roster/caleb.jpg',
      personalUrl: '',
      speciality: 'Utilizing CV and ML in Remote Sensing Applications'
    },
    {
        id: 4,
        name: 'Mariah Bradford',
        role: 'Secretary',
        email: 'mbrad@rams.colostate.edu',
        photoUrl: '/roster/mariah.jpg',
        personalUrl: 'https://bbykitty.github.io',
        speciality: 'Human-centered AI and Multimodal Learning'
    },
    {
      id: 5,
      name: 'Videep Venkatesha',
      role: 'Communication Coordinator ',
      email: 'videep.venkatesha@colostate.edu',
      photoUrl: '/roster/videep.jpg',
      personalUrl: '',
      speciality: 'NLP and Cognitive Modeling'
    },
    {
      id: 1,
      name: 'Changsoo Jung',
      role: 'Mentor',
      email: 'Changsoo.Jung@colostate.edu',
      photoUrl: '/roster/changsoo.jpg',
      personalUrl: 'https://changsoojung.buzz',
      speciality: 'Modeling CV Architecture'
    },
];
const advisors = [
    {
        id: 1,
        name: 'Nathaniel Blanchard',
        role: 'Advisor',
        email: 'Nathaniel.Blanchard@colostate.edu',
        photoUrl: '/roster/nathaniel.jpg',
        personalUrl: ''
    },
];
  

const Roster = () => {
  return (
    <div className="container">
      <h3 className='sectionheader'>Board Members</h3>
      <div className="roster-container">
        {boardMembers.map(member => (
          <div key={member.id} className="card">
            <img src={`${process.env.PUBLIC_URL}${member.photoUrl}`} alt={member.name} className="card-img"/>
            <div className="card-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
              <p><a href={member.personalUrl} target="_blank" rel="noopener noreferrer">{member.personalUrl}</a></p>
              <p><span>Speciality:</span> {member.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className='sectionheader'>Advisor</h3>
      <div className="roster-container">
        {advisors.map(advisor => (
          <div key={advisor.id} className="card">
            <img src={`${process.env.PUBLIC_URL}${advisor.photoUrl}`} alt={advisor.name} className="card-img"/>
            <div className="card-info">
              <h3>{advisor.name}</h3>
              <h4>{advisor.role}</h4>
              <p><a href={`mailto:${advisor.email}`}>{advisor.email}</a></p>
              <p><a href={advisor.personalUrl} target="_blank" rel="noopener noreferrer">{advisor.personalUrl}</a></p>
            </div>
          </div>
        ))}
        </div>
    </div>
    
  );
}

export default Roster;
