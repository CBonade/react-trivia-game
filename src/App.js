import {useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { Routes, Route, Link } from "react-router-dom";
import './styles/styles.scss'
import StartGame from './pages/start-game'
import './styles/styles.scss'

function App({db}) {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  async function fetchCollection() {
    const categoryCollection = []
    const questionCollection = []
    await getDocs(collection(db, "categories")).then((results) => {
      results.forEach(doc => {
        categoryCollection.push(doc.data());
      })
    }).catch(error => console.log(error));
    setCategories(categoryCollection);
    await getDocs(collection(db, "questions")).then((results) => {
      results.forEach(doc => {
        questionCollection.push(doc.data());
      })
    }).catch(error => console.log(error));
    setQuestions(questionCollection);
  }
  useEffect(() => {
    fetchCollection();
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartGame categories={categories} questions={questions} />} />
      </Routes>
    </div>
  );
}

export default App;
