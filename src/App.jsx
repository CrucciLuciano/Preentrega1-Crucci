import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemCount from './components/ItemCount/ItemCount'

function App() {



  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi proyecto de React CoderHouse" />
      <ItemCount stock={10} />
    </div>
  )
}

export default App
