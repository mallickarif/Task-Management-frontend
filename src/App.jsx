import { BrowserRouter as Router,
Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact Component={TaskList} />
          <Route path='/create-task'
          Component={TaskForm} />
          <Route path='/edit-task/:id'
          Component={TaskForm} />
          <Route path='/login'
          Component={AuthForm} />
          <Route path='/signup'
          Component={AuthForm} />
          <Route path='/dashboard'
          Component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
