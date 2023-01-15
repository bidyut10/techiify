import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Create } from './components/Create';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { Protected } from "./components/Protected";
import { Read } from './components/Read';
import { AllBlog } from './components/AllBlog';
import { Update } from './components/Update';
import { About } from './components/About';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Protected Component={HomePage} />}></Route>
          <Route path="/create" element={<Protected Component={Create} />}></Route>
          <Route path="/read" element={<Protected Component={Read} />}></Route>
          <Route path="/allblogs" element={<Protected Component={AllBlog} />}></Route>
          <Route path="/update/:blogId" element={<Protected Component={Update} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
