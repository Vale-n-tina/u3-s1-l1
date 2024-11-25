
import './App.css';
import ButtonComponents from './components/ButtonComponents';
import ImageContent from './components/ImageContent';

function App() {
  return (
    <div className="App">
     
      <main>
        <div className='div'>
          <ImageContent src="https://placedog.net/500/280" alt="cane"/>
       <ButtonComponents label="Ciaone"/>
          <ImageContent src="https://placedog.net/300/280" alt="cane"/>
       <ButtonComponents label="bella"/>
       </div>
      </main>
    </div>
  );
}

export default App;
