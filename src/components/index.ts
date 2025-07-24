export { default as CodeEditor } from './CodeEditor';
export { default as CodePreview } from './CodePreview';
export type { CodeTab } from './CodeEditor';

// Export default values for initial state
export const getDefaultCodeValues = () => ({
  html: `
  <div class="container">
    <h1 class="title">Welcome to CSS Visualiser</h1>
    <p class="description">Edit the code and see the results in real-time!</p>
    <div class="demo-box">
      <span>Interactive Demo</span>
    </div>
  </div>
`,
  css: `.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.title {
  color: #2563eb;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.description {
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  text-align: center;
}

.demo-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.demo-box:hover {
  transform: translateY(-5px);
}`,
  scss: `$primary-color: #2563eb;
$secondary-color: #6b7280;
$gradient-start: #667eea;
$gradient-end: #764ba2;
$border-radius: 12px;
$container-width: 800px;

.container {
  max-width: $container-width;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;

  .title {
    color: $primary-color;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .description {
    color: $secondary-color;
    font-size: 1.125rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .demo-box {
    background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
    color: white;
    padding: 2rem;
    border-radius: $border-radius;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}`,
  tailwind: `<div class="max-w-4xl mx-auto p-8 font-sans">
  <h1 class="text-blue-600 text-4xl font-bold mb-4 text-center">
    Welcome to CSS Visualiser
  </h1>
  
  <p class="text-gray-500 text-lg mb-8 text-center">
    Edit the code and see the results in real-time!
  </p>
  
  <div class="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-xl text-center font-bold shadow-xl transform transition-transform hover:-translate-y-2">
    <span>Interactive Demo</span>
  </div>
  
  <!-- Additional Tailwind Examples -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 1</h3>
      <p class="text-gray-600">Tailwind makes styling fast and efficient.</p>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 2</h3>
      <p class="text-gray-600">Responsive design with utility classes.</p>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 3</h3>
      <p class="text-gray-600">Modern and maintainable CSS.</p>
    </div>
  </div>
</div>`
});
