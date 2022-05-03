import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Coffee.css';

const Coffee: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='warning'>
          <IonTitle class='ion-text-center'>Smoke Coffee </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Coffee;
