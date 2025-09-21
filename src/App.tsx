import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ToastProvider } from "./context/ToastContext";
import { ErrorNotification } from "./components/ErrorNotification/ErrorNotification";
import { Toaster } from "./components/ui/toaster";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { ProductComparison } from "./pages/ProductComparison/ProductComparison";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Blog } from "./pages/Blog/Blog";
import { ToastDemo } from "./pages/ToastDemo/ToastDemo";

export const App = (): JSX.Element => {
  return (
    <ToastProvider>
      <AppProvider>
        <Router>
        <div className="min-h-screen w-full bg-background flex flex-col">
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/comparison" element={<ProductComparison />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/toast-demo" element={<ToastDemo />} />
            </Routes>
          </main>
          <ErrorNotification />
          <Toaster />
        </div>
        </Router>
      </AppProvider>
    </ToastProvider>
  );
};