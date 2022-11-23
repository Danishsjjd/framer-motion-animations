import Example from "./sections/Example";
import Home from "./sections/Home";
import Introduction from "./sections/Introduction";
import Layout from "./sections/LayoutAnimation";
import Overview from "./sections/Overview";

const App = () => {
  return (
    <>
      <h1 className="text-7xl font-bold">Main Page Animation's</h1>
      <Home />
      {/* <div>
        <h1 className="text-7xl font-bold">Getting started</h1>
        <Introduction />
        <Example /> // todo: incomplete
      </div> */}

      <div>
        <h1 className="text-7xl font-bold">Animations</h1>
        <Overview />
        <Layout />
        <h3 className="text-4xl font-medium">Gestures</h3>
      </div>
    </>
  );
};
export default App;
