import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import { CartProvider } from './context/cart.js'

import {App} from './components/App';

const root = createRoot(document.getElementById("root"));
root.render(<CartProvider>
    <App />
  </CartProvider>);