import {Navigate, Route, Routes} from 'react-router-dom';
import {Container} from './App.styled';
import React, {lazy, Suspense} from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
 
const Home = lazy(() => import('components/Pages/Home'));
const Movies = lazy(() => import('components/Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {

  return (
  <Container>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path='/' element={<Navigation />}>
                  <Route index element={<Home />}/>
                    <Route path='movies' element={<Movies />}/>
                      <Route path='movies/:movieId' element={<MovieDetails />}>
                          <Route path='cast' element={<Cast />}/>
                          <Route path='reviews' element={<Reviews />}/>
                    </Route>
                  <Route path='*' element={<Navigate to='/'/>}/>
              </Route>
          </Routes>
        </Suspense>
      </main>
  </Container>
    
  )
};

// export default App;