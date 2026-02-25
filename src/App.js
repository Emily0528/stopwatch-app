import Container from './components/Container/Container';
import Stopwatch from './components/Stopwatch/Stopwatch';
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {

  return (
    <Container>
      <Stopwatch />
    </Container>
  );

};

export default App;