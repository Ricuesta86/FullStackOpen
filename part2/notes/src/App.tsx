import Note from './components/Note';
import { typeProps, note } from './types';



const App = ({ notes }: typeProps) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes?.map((note:any)=>(<Note key={note.id} note={note}/>))}
      </ul>
    </div>
  );
};

export default App;
