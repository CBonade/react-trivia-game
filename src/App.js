import './App.css';
import {useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import Category from './components/category.js'
function App({db}) {
  const [categories, setCategories] = useState([]);
  async function fetchCollection() {
    const categoryCollection = []
    await getDocs(collection(db, "categories")).then((results) => {
      results.forEach(doc => {
        categoryCollection.push(doc.data());
      })
    }).catch(error => console.log(error));
    setCategories(categoryCollection);
  }
  useEffect(() => {
    fetchCollection();
  }, [])
  
  return (
    <div className="App">
      <div className="categories-header">
        {categories.map((category) => (
          <Category category={category.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
