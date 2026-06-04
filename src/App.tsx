import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { FunComp } from './components/FunComp';
import { ClassComp } from './components/ClassComp';
import { Navigation } from './components/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChildClassComp } from './components/ChildClassComp';
import { AboutTech, HeaderComp, TechVersion } from './components/Header/HeaderComp';
import { UserwithRouterEx } from './components/UserwithRouterEx';
import { Users } from './components/Users';
import { TypographyComp } from './components/MaterialUIExamples/TypographyComp';
import { FlexBoxComp2, FlexLayoutDesign, FlexLayoutDesign2 } from './components/MaterialUIExamples/CssExamples/FlexBoxComp';
import {GridComp4, GridComp5 } from './components/MaterialUIExamples/CssExamples/GridComp';
import TransitionComp from './components/MaterialUIExamples/CssExamples/TransitionComp';
import { TransformComp2 } from './components/MaterialUIExamples/CssExamples/TransformComp';
import { NativePaginationComp } from './components/MaterialUIExamples/JSExamples.tsx/NativePaginationComp';
import { NativeProgressBar } from './components/MaterialUIExamples/JSExamples.tsx/NativeProgressBar';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import ProHome, { ProAbout, ProProfile } from './components/MaterialUIExamples/JSExamples.tsx/ProtectedRoute/ProHome';
import ProLogin from './components/MaterialUIExamples/JSExamples.tsx/ProtectedRoute/ProLogin';
import { ProAutoProvider } from './components/MaterialUIExamples/JSExamples.tsx/ProtectedRoute/ProAuthContext';
import ProRequireAuthComp from './components/MaterialUIExamples/JSExamples.tsx/ProtectedRoute/ProRequireAuthComp';
const LazyComp = React.lazy(()=>import('./components/Header/LazyComp'))
const NamedImportForLazy = React.lazy(()=>import('./components/Header/NamedImportForLazy').then(module => {return {default:module.NamedImportForLazy}})) 
//ex for using lazy with named export

const cache = createCache({
  key: 'mui',
  nonce: "156677"
});


function App() {
  
  return (
    <div className="App">
      <CacheProvider value={cache}>
      <Navigation />
      <ProAutoProvider> {/* Auth stuff */}
      <Routes>
        <Route path='/' element=<FunComp/> />
        <Route path='/about' element=<ClassComp/> />
        <Route path='/about' element=<ClassComp/> />
        <Route path='/profile' element=<HeaderComp/> />
        <Route path='/profile/aboutTech' element=<AboutTech/> />  {/* just for breadcrums */}
        <Route path='/profile/aboutTech/techVersion' element=<TechVersion/> />  {/* just for breadcrums */}
        <Route path='/users' element={<Users/>}>
          <Route index element={<UserwithRouterEx userId={1}/>} />
          <Route path=':userId' element={<UserwithRouterEx/>} />
        </Route>
        <Route path='apps' element={<Suspense fallback={<p>loading</p>}><LazyComp/></Suspense>}/>
        <Route path='bannedapps' element={<Suspense fallback={<p>loading</p>}><NamedImportForLazy/></Suspense>}/>
        <Route path='*' element={<Navigate to={'/'}/>} />



        {/* Auth Routes stuff */}
        <Route path='/proHome' element={<ProRequireAuthComp> <ProHome /> </ProRequireAuthComp>}/>  {/* Auth stuff */}
        <Route path='/proAbout' element={<ProRequireAuthComp><ProAbout /> </ProRequireAuthComp>}/>  {/* Auth stuff */}
        <Route path='/proProfile' element={<ProRequireAuthComp><ProProfile /> </ProRequireAuthComp>}/>  {/* Auth stuff */}
        <Route path='/proLogin' element={<ProLogin />}/>  {/* Auth stuff */}
      </Routes>
      <TypographyComp />
      </ProAutoProvider> {/* Auth stuff */}
      </CacheProvider>
    </div>
  );
}

export default App;
