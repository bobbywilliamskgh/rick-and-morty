import './App.css';
import ApolloAppProvider from './ApoloProvider';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

function App () {
  return (
    <ApolloAppProvider>
      <Routes>
        <Route path='/' element={ <CharacterList/> } />
        <Route path='/characters' element={ <CharacterList /> } />
        <Route path='/characters/:id' element={ <CharacterDetails /> }/>
      </Routes>
    </ApolloAppProvider>
  );
}

export default App;
