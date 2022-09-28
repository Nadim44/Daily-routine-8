
import './App.css';
import Details from './Components/Details/Details';


function App() {
  return (
    <div className="App">
      <Details></Details>
      <Question></Question>
    </div>
  );
}
function Question() {
  return (
    <div>
      <div className='question'>
        <h4>1. How does React Work?</h4>
        <p><strong>Answer:</strong> <small>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</small></p>
      </div>
      <div className='question'>
        <h4 >2. what's the difference between props and state ?</h4>
        <p ><strong>Answer:</strong> <small>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</small></p>
      </div>
      <div className='question'>
        <h4>3. What are the use cases of useEffect without data load?</h4>
        <p ><strong>Answer:</strong> <small>1. Running on state change: validating input field.
          2. Running on state change: live filtering.
          3. Running on state change: trigger animation on new array value.</small></p>
      </div>
    </div>
  )
}

export default App;
