import { Route, Routes } from "react-router";
import './App.css';
import { Homepage } from "./pages/Homepage";
import { SingleHabitPage } from "./pages/SingleHabitPage";
import { Toaster } from "react-hot-toast";
import { ArchievePage } from "./pages/ArchievePage";
import { Header } from "./component/Header";

function App() {
  return (
    <div className="App bg-slate-900 h-screen">

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

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singleHabit/:habitIndex" element={<SingleHabitPage />} />
        <Route path="/archieve" element={<ArchievePage />} />
      </Routes>
    </div>
  );
}

export default App;
