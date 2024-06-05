import Catalog from "./feature/Catalog";
import BasicNavbar from "./layout/BasicNavbar";
import "bootswatch/dist/journal/bootstrap.min.css";
import ProductPage from "./feature/product/ProductPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./feature/home/HomePage";
import AboutPage from "./feature/about/AboutPage";
import Contact from "./feature/contact/Contact";
import ProductDetail from "./feature/product/ProductDetail";
import BootstrapNavbar from "./layout/BootstrapNavbar";
import { ToastContainer } from "react-toastify";
import ServerError from "./feature/error/ServerError";
import { AxiosInterceptor } from "./interceptor/AxiosInterceptor";
import PageNotFound from "./feature/error/PageNotFound";

function App() {
  return (
    <>
      <AxiosInterceptor>
        <ToastContainer position="bottom-right" />
        <BasicNavbar />
        <BootstrapNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:productId" element={<ProductDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="manage-product" element={<ProductPage />} />
          <Route path="server-error" element={<ServerError />} />
          <Route path="not-found" element={<PageNotFound />} /> 
        </Routes>
      </AxiosInterceptor>
    </>
  );
}

export default App;
