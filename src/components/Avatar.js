import React from 'react';
import '../styles/Editor.css';

const Avatar = ({ hat, shirt, pants, boots, weapon, colour }) => {
  return (
    <div className="avatar-editor display">
      <img
        src={`/assets/avatars/avatar_${colour}`}
        alt='body'
        className='avatar-part body'
      />
      {hat !== 'none' && (
        <img
          src={`/assets/hats/${hat}`}
          alt='hat'
          className='avatar-part hat'
        />
      )}
      {shirt !== 'none' && (
        <img
          src={`/assets/shirts/${shirt}`}
          alt='shirt'
          className='avatar-part shirt'
        />
      )}
      {pants !== 'none' && (
        <img
          src={`/assets/pants/${pants}`}
          alt='pants'
          className='avatar-part pants'
        />
      )}
      {weapon !== 'none' && (
        <img
          src={`/assets/weapons/${weapon}`}
          alt="weapon"
          className="avatar-part weapon"
        />
      )}
      {boots !== 'none' && (
        <img
          src={`/assets/boots/${boots}`}
          alt="boots"
          className="avatar-part boots"
        />
      )}
    </div>
  );
};

export default Avatar;