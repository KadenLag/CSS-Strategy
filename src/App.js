import ThemeButton from './ThemeButton';
import CardTail from './CardTail';
import CardBem from './CardBem';
import './App.css';

function App() {
  return (
    <div className="app bg-white dark:bg-black">
      <div className="flex justify-center items-center pt-5">
        <ThemeButton />
      </div>
      <div className="flex justify-center items-center">
        <div className="p-5">
          <CardTail />
        </div>
        <div className="p-5">
          <CardBem />
        </div>
      </div>
    </div>
  );
}

export default App;
