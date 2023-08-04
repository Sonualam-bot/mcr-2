import { Route, Routes } from "react-router";
import './App.css';
import { Homepage } from "./pages/Homepage";
import { SingleHabitPage } from "./pages/SingleHabitPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singleHabit/:habitIndex" element={<SingleHabitPage />} />
      </Routes>
    </div>
  );
}

export default App;
