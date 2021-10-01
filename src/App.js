import './App.css';
import './markdown.css';
import Top from './components/common/Top'
import Footer from './components/common/Footer'
import Home from './components/home/Home'
import Project from './components/project/Project'
import ProjectDetail from './components/project/ProjectDetail'
import Resume from './components/resume/Resume'
import Reward from './components/reward/Reward'
import Gallery from './components/gallery/Gallery'
import Timeline from './components/timeline/Timeline'
import Work from './components/work/Work'
import EmptyPage from './components/common/EmptyPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Top/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/project/:id" component={ProjectDetail}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/reward" component={Reward}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/timeline" component={Timeline}/>
          <Route exact path="/work" component={Work}/>
          <Route component={EmptyPage}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
