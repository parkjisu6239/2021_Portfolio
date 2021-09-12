import { useState } from "react"
import Concept from "../components/home/concept/Concept";
import Greeting from "../components/home/Greeting/Greeting";
import PeopleSay from "../components/home/peopleSay/PeopleSay";
import Portfolio from "../components/home/portfoliio/Portfolio";
import Skill from "../components/home/skill/Skill";
import Specialize from "../components/home/specialize/Skill";

function HomePage() {
  const [ isLoading, setIsLoading ] = useState(true); // 나중에 로딩페이지가 있다면 사용
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

export default HomePage