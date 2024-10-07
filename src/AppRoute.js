import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'


function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FeaturedProducts />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
