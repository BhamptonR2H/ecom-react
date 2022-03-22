import React from "react";

import {
  BrowserRouter as Router,
  Outlet,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <header class="container">
        <nav>
          <ul>
            <li>
              <img
                src="/img/logo.png"
                width="50"
                height="50"
                alt="vinyl"
                class="img_class"
              />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Products">Products</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Outlet></Outlet>
      </header>
    );
  }
}
