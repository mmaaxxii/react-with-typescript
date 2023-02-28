import { useState, useEffect, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub, SubsResponseFromApi } from './types'
import axios from 'axios';


interface AppState {
  subs: Sub[]
  newSubNum: number
  string: string
}


function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubNum, setNewSubNum] = useState<AppState["newSubNum"]>(0)
  const divRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const fetchSubs = () => {   
      //{/*return fetch('https://dummyjson.com/users?limit=5').then(res => res.json());*/}
      return axios
      .get<SubsResponseFromApi>('https://dummyjson.com/users?limit=5')
      .then(res => res.data);

      
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.users.map(subFromApi => {
        const {
          username: nick,
          age: subMonths,
          image: avatar,
          lastName: description } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
      .then(mapFromApiToSubs)
        .then(setSubs)
      
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubNum(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      
      <h1>midu subs</h1>
      <List subs={subs} string='-'/>
      New Subs: {newSubNum}
      <Form onNewSub={handleNewSub}/>
  
    </div>
  );
}

export default App;
