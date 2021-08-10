import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomeContent from "../content/HomeContent/HomeContent";
import NotFoundContent from "../content/NotFoundContent/NotFoundContent";

// const Matcher = (MatchComp) => {
//   /* HOC to extract `id` from router `match` props.
//    * Sort through `props.match` to find an `id` parameter
//    * And create a `MatchComp` with prop `id` if we find it.  */

//   return (props) => {
//     const { match, ...otherProps } = props;

//     if (!(match && match.params && match.params.id)) {
//       return <NotFoundContent />;
//     }
//     return <MatchComp id={match.params.id} {...otherProps} />;
//   };
// };

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/whatever" exact={false} component={HomeContent} />
        <Route path="/else" exact={false} component={HomeContent} />
        <Route component={NotFoundContent} />
      </Switch>
    );
  }
}

export default Routes;
