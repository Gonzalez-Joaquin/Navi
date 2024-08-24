import { Provider } from 'react-redux'

import Navigation from './Routes/Navigation'
import store from './Store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
