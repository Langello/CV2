import React, { Suspense } from 'react';

// Componentes lazy-loaded
const LazyExperience = React.lazy(() => import('./Experience'));
const LazyEducation = React.lazy(() => import('./Education'));
const LazyLanguages = React.lazy(() => import('./Languages'));
const LazySkills = React.lazy(() => import('./Skills'));

// Componente de loading
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center p-4">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

// Wrapper para componentes lazy
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

// Componentes exportados
export const Experience = (props) => (
  <LazyWrapper>
    <LazyExperience {...props} />
  </LazyWrapper>
);

export const Education = (props) => (
  <LazyWrapper>
    <LazyEducation {...props} />
  </LazyWrapper>
);

export const Languages = (props) => (
  <LazyWrapper>
    <LazyLanguages {...props} />
  </LazyWrapper>
);

export const Skills = (props) => (
  <LazyWrapper>
    <LazySkills {...props} />
  </LazyWrapper>
);

const LazyComponents = {
  Experience,
  Education,
  Languages,
  Skills
};

export default LazyComponents;
