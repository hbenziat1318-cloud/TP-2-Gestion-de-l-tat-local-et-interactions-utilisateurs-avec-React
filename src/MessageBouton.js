import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');

  function changerMessage() {
    setMessage('Vous avez cliqué sur le bouton !');
  }

  return (
    <div>
      <div className="message-affichage">{message}</div>
      <button className="btn btn-secondary" onClick={changerMessage}>
        Changer le Message
      </button>
    </div>
  );
}

export default MessageBouton;
