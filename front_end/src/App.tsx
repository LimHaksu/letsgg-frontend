import React, {useLayoutEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";

import 'app.scss';

import IntroPage from "pages/intropage/IntroPage";
import MapPage from "pages/mappage/MapPage";

// 창 크기 재조정될때마다 호출됨
// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

interface Props{
  // setWindowSize?: (width: number, height: number)=>{};
}


export default function App({} : Props) {
  // App 에는 state 사용하면 안됨
  // const [width, height] = useWindowSize();
  // setWindowSize!(width, height);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/map" component={MapPage} />
        </Switch>
      </Router>
      {/* <div className="App">
        <Counter />
        <hr />
        <SuperMarket />
      </div> */}
    </div>
  );
}

// export default inject(({ window }) => ({
//   setWindowSize: window.setWindowSize,
// }))(observer(App));

