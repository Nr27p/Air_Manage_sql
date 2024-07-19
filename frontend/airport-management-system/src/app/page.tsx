import React from 'react';

// import FlightList from '../components/FlightList';
import FlightForm from '../../components/FlightsForm';
import FlightList from '../../components/FlightList';
import Navbar from '../../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Flight Management</h1>
      <Navbar />
      <FlightForm />
      <FlightList />
      
    </div>
  );
};

export default HomePage;
// import React from 'react';
// import Layout from './layout'; // Ensure the path is correct

// function App({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default App;


