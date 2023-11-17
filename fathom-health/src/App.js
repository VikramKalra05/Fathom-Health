import styles from "./styling.module.css"
import Navbar from './Routes/Navbar';
import {AllRoutes} from "./Routes/AllRoutes";
import Footer from './Routes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={styles.main}>
        <AllRoutes/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
