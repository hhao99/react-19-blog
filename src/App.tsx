import { Route, Link, Switch} from 'wouter'
import Home from '@/pages/home' 
import About from '@/pages/about'
import Blog from './pages/blog'
import Header from './pages/header'
import Footer from './pages/footer'
function App() {

  return (
    <div className="flex flex-col min-h-screen h-screen bg-gray-100 justify-between p-4">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/about" component={About}/>
      
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
