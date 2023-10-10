import Automation from "./Automation/Automation";
import ParticleBackground from "./Automation/ParticleBackground/ParticleBackground";
import BlinkingSquares from "./BlinkingSquares/BlinkingSquares";

function App() {
  return (
    <>
      <div className="bg-black">
        {/* <BlinkingSquares></BlinkingSquares> */}

        <Automation></Automation>
        {/* <ParticleBackground></ParticleBackground> */}
      </div>
    </>
  );
}

export default App;
