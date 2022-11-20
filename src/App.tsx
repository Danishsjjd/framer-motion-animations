import Example from "./sections/Example";
import Introduction from "./sections/Introduction";
import LayoutAnimation from "./sections/LayoutAnimation";
import Overview from "./sections/Overview";

const App = () => {
  return (
    <>
      {/* <div>
        <h1 className="text-7xl font-bold">Getting started</h1>
        <Introduction />
        <Example /> // todo: incomplete
      </div> */}

      <div>
        <h1 className="text-7xl font-bold">Animations</h1>
        <Overview />
        <LayoutAnimation />
      </div>
    </>
  );
};
export default App;
