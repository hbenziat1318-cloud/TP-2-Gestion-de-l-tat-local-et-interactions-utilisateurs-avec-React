import React from 'react';
import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import AffichageDynamique from './AffichageDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurTitre from './CompteurTitre';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">TP State React</h1>
        <p className="app-subtitle">Gestion d'état avec hooks React</p>
      </header>
      
      <div className="components-grid">
        <div className="component-card">
          <h2 className="component-title">Compteur Simple</h2>
          <Compteur />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Message Bouton</h2>
          <MessageBouton />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Formulaire Nom</h2>
          <FormulaireNom />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Compteur avec Effet</h2>
          <CompteurEffet />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Affichage Dynamique</h2>
          <AffichageDynamique />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Formulaire Inscription</h2>
          <FormulaireInscription />
        </div>
        
        <div className="component-card">
          <h2 className="component-title">Compteur avec Titre</h2>
          <CompteurTitre />
        </div>
      </div>
    </div>
  );
}

export default App;
