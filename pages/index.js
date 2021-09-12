import { useState } from "react"

function HomePage() {
  const [ isLoading, setIsLoading ] = useState(true); // 나중에 로딩페이지가 있다면 사용
  return (
    <main>
      <h1>홈페이지다</h1>
    </main>
  )
    
}

export default HomePage