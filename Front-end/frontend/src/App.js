import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar/Navbar"
import Footer from "./layouts/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
   <AppRoutes/>
  <Footer/>
    </div>
  );
}

export default App;
