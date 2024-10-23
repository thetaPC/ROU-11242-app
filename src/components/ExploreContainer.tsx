import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonSelect aria-label="Fruit" interface="action-sheet" placeholder="Select fruit">
      <IonSelectOption value="apples">Apples</IonSelectOption>
      <IonSelectOption value="oranges">Oranges</IonSelectOption>
      <IonSelectOption value="bananas">Bananas</IonSelectOption>
    </IonSelect>
  );
};

export default ExploreContainer;
