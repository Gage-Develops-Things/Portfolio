import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './pages/Footer';

function App() {
  return (
    <section class='vp-container'>
      <Nav />
      <main class='container'>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;
