import { IonBadge, IonButton, IonCard, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonContext } from '@ionic/react/dist/types/contexts/IonContext';
import { error } from 'console';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Food.css';

 
const Food: React.FC = () => {
  const [Total, SetTotal] = useState(0);
  const [big, SetBig] = useState(10);
  const [medium, SetMedium] = useState(8);
  const [small, SetSmall] = useState(12);

  const handleClick = (value: any) => () => console.log(value)

  function ActionLink(value: number, cval: any) {
    function handleClick(e: { preventDefault: () => void; }) {
      e.preventDefault();
  
    }

    const val = cval - 1;
    if(cval == 0){
      return(SetTotal(value + Total))
    }
    else if(value == 55){
      return(
          SetBig(val),
          SetTotal(value + Total)
      );
    }
    else if(value == 35){
      return(
          SetMedium(val),
          SetTotal(value + Total)
      );
    }
    else if(value == 15){
      return(
          SetSmall(val),
          SetTotal(value + Total)
      );
    }
    
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle class='ion-text-center'>Food</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='background-image'>
          <IonList class='center' color='warning-shade'>
          <IonButton expand="block" shape='round' color='danger' class='listelement' onClick={ () => ActionLink(55, big)}>55 TL
          <IonBadge class='setright' color="dark">{big}</IonBadge>
          </IonButton>
          <IonButton expand="block" shape='round' color='warning' class='listelement' onClick={ () => ActionLink(35, medium)}>35 TL
          <IonBadge class='setright' color="dark">{medium}</IonBadge>
          </IonButton>
          <IonButton expand="block" shape='round' color='success' class='listelement' onClick={ () => ActionLink(15, small)}>15 TL
          <IonBadge class='setright' color="dark">{small}</IonBadge>
          </IonButton>
          </IonList>
      </IonContent>
      <IonFooter>
      <IonToolbar color='tertiary'>
        <IonTitle>Total Amount: {Total} TL</IonTitle>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Food;


