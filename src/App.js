import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Jigsaw from "./pages/jigsaw/jiqsaw";
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
      path: "/jigsaw",
      element: <Jigsaw />,
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
