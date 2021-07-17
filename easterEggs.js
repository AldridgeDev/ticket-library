// Matrix Theme
const matrixButton = document.getElementById('matrix');

matrixButton.onclick = () => {
    if (body.classList.contains("dark")) {
      body.classList.replace('dark', 'matrix');
      localStorage.setItem('theme', 'matrix'); 
    } else if (body.classList.contains("light")) {
      body.classList.replace('light', 'matrix');
      localStorage.setItem('theme', 'matrix'); 
    } 
  };