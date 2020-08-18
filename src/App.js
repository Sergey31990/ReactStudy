import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Music from "./components/Music/Music";
import Groups from "./components/Groups/Groups";
import Friends from "./components/Friends/Friends";
import clases from "./components/Content/Content.module.css";
import Dialog from "./components/Dialog/Dialog";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="MainPage">
        <Header />
        <Nav />
        <div className={clases.content}>
          <Route
            path="/content"
            render={() => (
              <Content
                dataPost={props.state.content.post}
                addPost={props.addPost}
              />
            )}
          />
          <Route path="/music" component={Music} />
          <Route path="/groups" component={Groups} />
          <Route path="/friends" component={Friends} />
          <Route
            path="/dialog"
            render={() => (
              <Dialog
                dataUsers={props.state.dialog.users}
                dataMessage={props.state.dialog.messages}
              />
            )}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
