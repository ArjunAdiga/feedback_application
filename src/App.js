
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {motion,AnimatePresence} from 'framer-motion'


function App() {
  const [feedback,setFeedback]=useState(FeedbackData)
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])
  }
  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you want to delete?')) {
      setFeedback(feedback.filter ((item)=> item.id!==id))
    }
  }
 

  return (
    <div>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}/>
      </div>
    </div>
  );
}

export default App;
