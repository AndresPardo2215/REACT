import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import ProtectedRoute from './components/protect/ProtectedRouteProfile';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]



  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?: ', logged);
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to={'/'}>|| HOME |</Link>
          <Link to={'about'}>| ABOUT |</Link>
          <Link to="/online-state">| Online State ||</Link>
          <Link to={'faqs'}>| FAQs |</Link>
          <Link to={'task/1'}>| Task 1 |</Link>
          <Link to={'task/2'}>| Task 2 |</Link>
          <Link to={'/login'}>| Login |</Link>
          <Link to={'/any404'}>| Not Existing Route ||</Link>
        </aside>

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/online-state" element={<StatePage />} />
            {/* pagina de login, redirihe a home si ta esta loggeado */}
            <Route path="/login" 
              element={
                <ProtectedRoute logged={logged} loginRoute={true}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            {/* 2 rutas que cargan un mismo componente*/}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            {/* Ruta para el perfil, redirige a login si no está loggeado */}
            <Route path="/profile" 
              element={
                <ProtectedRoute logged={logged} loginRoute={false}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/tasks" element={<TasksPage />} />
            <Route 
              path="/task/:id" 
              element={<TaskDetailPage taskList={taskList} />} 
            />
            {/* Ruta de página no encontrada */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>

      </div>


      
    </Router>
  );
}

export default AppRoutingOne;
