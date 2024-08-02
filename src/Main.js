// eslint-disable-next-line import/no-extraneous-dependencies
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import IntroPage from './IntroPage/IntroPage' // Adjust path as needed
import GamePage from './Game' // Your game page component

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  </Router>
)

export default Main
