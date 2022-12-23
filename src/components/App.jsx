import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { PrivateRoute } from './utils/PrivateOutlet';

const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));
const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
