import Loading from '@/components/Loading';
import { auth, db } from '@/firebase'
import { useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth' 
import Login from './login';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user){
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        {merge: true}
      );
    }
  }, [user]);
  

  if(loading) return <Loading/>
  if(!user) return <Login/>

  return <Component {...pageProps} />
}
