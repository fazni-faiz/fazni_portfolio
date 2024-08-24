import React from 'react';

function Profile() {
  return (
    <section id="profile" style={sectionStyle}>
      <h2>Profile</h2>
      <p>
        As an aspiring Computer Science Undergraduate, I am dedicated to developing my skills 
        in coding, problem-solving, and data analytics. I am a quick learner, a team player, 
        and have experience working with different programming languages and tools.
      </p>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  margin: '10px 0'
};

export default Profile;
