// 第三方
import React, { memo,Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// 自己配置
import routes from './router';
import store from './store';

// 组件
import WYMusicHeader from 'components/app-header';
import WYMusicFooter from 'components/app-footer';
import AppPlayerBar from 'pages/player/app-player-bar'

const App = memo(() => {
  return (
    <Provider store={store}>

    <HashRouter>

      <WYMusicHeader/>
        
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>

      <WYMusicFooter/>
      
      <AppPlayerBar/>

    </HashRouter>

    </Provider>
  )
})

export default App
