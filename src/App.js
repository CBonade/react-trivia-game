import './App.css';
import {useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import Category from './components/category.js'
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
      <div className="category-board">
        {categories.map((category, index) => (
          <Category key={`category-${index}`} categoryIndex={index} category={category.name} questions={questions.filter(question => question.category.toLowerCase() === category.name.toLowerCase())} />
        ))}
      </div>
    </div>
  );
}

export default App;
