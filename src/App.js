import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Content from "./components/Content/Content";
import Music from "./components/Music/Music";
import Groups from "./components/Groups/Groups";
import clases from "./components/Content/Content.module.css";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";


//Route следят за URL и отрисовывают ту компоненту которя указана, а URL меняют NavLink
const App = () => {
    return (
      <div className="MainPage">
        <Header />
        <Nav />
        <div className={clases.content}>
        <Route exact path="/" component={News} />
          <Route path="/content" render={() => (<Content/>)}/>
          <Route path="/music" component={Music} />
          <Route path="/groups" component={Groups} />
          <Route path="/users" render={() => (<UsersContainer/>)} />
          <Route path="/dialog" render={() => (<DialogContainer/>)}/>
        </div>
        <Footer />
      </div>
  );
};

export default App;
