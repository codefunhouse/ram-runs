import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import JigsawIndex from "./pages/jigsaw";
 // eslint-disable-next-line
import Jigsaw from "./pages/jigsaw/jiqsaw";
import Landingpage from "./pages/landingpage/landingpage";
import Learn from "./pages/learn/learn";

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
    // {
    //   path: "/jigsaw",
    //   element: <Jigsaw />,
    // },
    {
      path: "/jigsaw",
      element: <JigsawIndex />,
    },
    {
      path: "/learn",
      element: <Learn />,
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
