import Menu from "../components/Menu";
import PresenceState from "../components/PresenceState";

const Overview = () => {
  return (
    <>
      <h3 className="text-center text-4xl font-bold">
        Overview (Preserve State)
      </h3>
      <PresenceState />
      <Menu />
    </>
  );
};

export default Overview;
