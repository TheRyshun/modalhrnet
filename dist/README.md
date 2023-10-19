# hrnetmodaltt

`hrnetmodaltt` est un composant modal React simple et personnalisable que vous pouvez facilement intégrer dans vos applications web (dédié pour le site HRnet).

## Installation

Pour installer `hrnetmodaltt`, utilisez npm ou yarn :

```bash
npm install hrnetmodaltt
# ou
yarn add hrnetmodaltt

```
## Getting Started

Pour utiliser le composant Modal dans votre application React, importez-le et passez-lui les accessoires nécessaires :
```
import React from 'react';
import { Modal } from 'hrnetmodaltt';

<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  desc="Modal description goes here."
  close={/* Close button image URL */}
/>
```
isOpen : un booléen qui contrôle la visibilité de la fenêtre modale.
onClose : une fonction permettant de fermer la fenêtre modale.
title : le titre de la fenêtre modale.
desc : la description ou le contenu de la fenêtre modale.
close : l'URL de l'image du bouton de fermeture.

## Exemple

Voici un exemple d'utilisation du package hrnetmodaltt dans votre projet React :
```
import React, { useState } from 'react';
import { Modal } from 'hrnetmodaltt';
import closeImage from './close.png'; // Replace with your actual close button image URL

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Sample Modal"
        desc="This is a sample modal description."
        close={closeImage}
      >
        {/* Add your modal content here */}
      </Modal>
    </div>
  );
}

export default App;
```