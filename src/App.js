import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Landingpage from "./pages/landingpage/landingpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/flippydolphin",
      element: <Homepage />,
    },
    {
      path: "*",
      element: <Landingpage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
