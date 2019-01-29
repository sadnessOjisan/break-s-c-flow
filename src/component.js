import * as React from "react";
import * as ReactDOM from "react-dom";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root"));
