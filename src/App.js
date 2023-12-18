import './App.css';
import Emoji from './components/Emoji';
import emojipedia from './data/emojiBank';




function SingleEmoji(emoji){
  return (
  <div>
    <Emoji
    id = {emoji.id}
    emoji = {emoji.emoji}
    name = {emoji.name}
    meaning = {emoji.meaning}
    />
  </div>
  );
}

function App() {
  return (
    <div>
      {emojipedia.map(SingleEmoji)}
    </div>
  );
}
export default App;
