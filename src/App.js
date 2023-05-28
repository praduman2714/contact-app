// Importing some the of the dependiences from the react-router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Importing Componets
import NavBar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
// Importing pages
import AddToContact from './Pages/AddToContact/AddToContact';
import Edit from './Pages/EditContact/EditContact';
// Importing css file
import './App.css';

function App() {

  // Creating Routes
  const router = createBrowserRouter([
     {path : '/' , element : <NavBar /> , children : [
      {path : '/' , element : <Home />},
      {path : 'add-contact' , element : <AddToContact /> },
      {path : 'edit-contact' , element : <Edit />}
     ]}
  ]);

  return (
    <div className="App">
      {/* Assigning Routes */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
