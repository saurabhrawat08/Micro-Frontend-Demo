import React, { Suspense } from 'react';

// Lazy loading the micro frontend components
const Project = React.lazy(() => import('Project/Project'));
const License = React.lazy(() => import('License/License'));



const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Host Application</h1>
        {/* Render the micro frontend components */}
        <Project/>
        <License/>
      </div>
    </Suspense>
  );
};

export default App;
