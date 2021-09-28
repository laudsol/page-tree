import React, {Component} from "react";
import "./App.css";
import PageTreeData from "./page-tree/data.js";
import PageList from "./components/pageList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageList: []
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          <PageList pages={this.state.pageList}/>
        </ul>
      </div>
    );
  }

  componentDidMount() {
    PageTreeData().then(result => {
        this.setState({'pageList': result});
      });
  }
}

export default App;
