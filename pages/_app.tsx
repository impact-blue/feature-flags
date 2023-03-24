import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="min-h-screen bg-gray-200 p-3">
    <Component {...pageProps} />
  </div>
);

export default App;
