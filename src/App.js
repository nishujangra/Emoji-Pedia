import './App.css';
import emojipedia from './emojipedia';
import Entry from './components/Entry';

// function createEntry(emojiTerm) {
//   return (
//     <Entry 
//       key = {emojiTerm.id}
//       emoji = {emojiTerm.emoji}
//       name = {emojiTerm.name}
//       description = {emojiTerm.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>Emoji Vista</span>
      </h1>
      <dl className='dictionary'>
        {emojipedia.map( emojiTerm => {
          return (
            <Entry 
              key = {emojiTerm.id}
              emoji = {emojiTerm.emoji}
              name = {emojiTerm.name}
              description = {emojiTerm.meaning}
            />
          )
        })}
      </dl>
    </div>
  );
}

export default App;
