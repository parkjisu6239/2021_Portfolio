import Concept from "./concept/Concept";
import Greeting from "./greeting/Greeting";
import PeopleSay from "./peopleSay/PeopleSay";
import Portfolio from "./portfoliio/Portfolio";
import Skill from "./skill/Skill";
import Specialize from "./specialize/Specialize";

function Home() {
  return (
    <main>
      <Greeting/>
      <Concept/>
      <Portfolio/>
      <Specialize/>
      <Skill/>
      <PeopleSay/>
    </main>
  )
    
}

export default Home