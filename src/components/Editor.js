import React, { useState } from 'react';
import Avatar from './Avatar.js';
import '../styles/Editor.css';

const Editor = () => {
  // Set up states for equipment
  const [hat, setHat] = useState('none');
  const [shirt, setShirt] = useState('none');
  const [pants, setPants] = useState('none');
  const [boots, setBoots] = useState('none');
  const [weapon, setWeapon] = useState('none');
  const [colour, setColour] = useState('base')

  // Equipment options
  const hatOptions = ['none', 'hat1.png', 'hat2.png'];
  const shirtOptions = ['none', 'shirt1.png', 'shirt2.png'];
  const pantsOptions = ['none', 'pants1.png', 'pants2.png'];
  const bootsOptions = ['none', 'boots1.png', 'boots2.png'];
  const weaponOptions = ['none', 'sword1.png', 'sword2.png'];
  const colourOptions = ['base.png', 'blue.png', 'red.png', 'green.png', 'limegreen.png', 'orange.png', 'purple.png', 'pink.png', 'yellow.png', 'turquoise.png']

  return (
    <div className="avatar-editor">
      <Avatar 
        hat={hat}
        shirt={shirt}
        pants={pants}
        boots={boots}
        weapon={weapon}
        colour={colour}
      />
      <div className="avatar-editor controls">
        {/* Hat Selection */}
        <h3>Select Hat</h3>
        {hatOptions.map((option) => (
          <button key={option} onClick={() => setHat(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/* Shirt Selection */}
        <h3>Select Shirt</h3>
        {shirtOptions.map((option) => (
          <button key={option} onClick={() => setShirt(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/* Pants Selection */}
        <h3>Select Pants</h3>
        {pantsOptions.map((option) => (
          <button key={option} onClick={() => setPants(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/* Weapon Selection */}
        <h3>Select Weapon</h3>
        {weaponOptions.map((option) => (
          <button key={option} onClick={() => setWeapon(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/* Boots Selection */}
        <h3>Select Boots</h3>
        {bootsOptions.map((option) => (
          <button key={option} onClick={() => setBoots(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/* Colour Selection */}
        <h3>Select Colour</h3>
        {colourOptions.map((option) => (
          <button key={option} onClick={() => setColour(option)}>
            {option.replace('.png', '')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Editor;