import React, { useState, useEffect, useRef } from 'react';

// Neural Network Attractor implementation in JavaScript
class NeuralAttractor {
  constructor(N = 4, D = 16, s = 0.75, seed = null) {
    this.N = N;
    this.D = D;
    this.s = s;
    
    // Initialize random number generator with seed
    this.rng = this.createRNG(seed);
    
    // Initialize weights and biases
    this.w = Array(N).fill().map(() => 
      Array(D).fill().map(() => 2.0 * this.rng() - 1.0)); // Uniform in [-1, 1]
    this.b = Array(N).fill().map(() => s * this.rng()); // Uniform in [0, s]
    
    // Initialize state vectors
    this.x = Array(N).fill(0); // Neuron outputs
    this.y = Array(D).fill(0); // Input vector
  }
  
  // Create a seeded random number generator
  createRNG(seed) {
    // If no seed provided, use current time
    if (seed === null) {
      seed = Date.now();
    }
    
    // Simple xorshift128+ implementation for seeded random numbers
    let x = 123456789 + seed;
    let y = 362436069;
    let z = 521288629;
    let w = 88675123;
    
    return function() {
      const t = x ^ (x << 11);
      x = y;
      y = z;
      z = w;
      w = w ^ (w >> 19) ^ (t ^ (t >> 8));
      return (w & 0x7FFFFFFF) / 0x7FFFFFFF; // Return value between 0 and 1
    };
  }
  
  reset(initValue = 0.001) {
    this.x = Array(this.N).fill(initValue);
    this.y = Array(this.D).fill(0);
  }
  
  iterate() {
    // Calculate the output y0
    let y0 = 0;
    for (let i = 0; i < this.N; i++) {
      y0 += this.b[i] * this.x[i];
    }
    
    // Shift the input vector
    for (let i = this.D - 1; i > 0; i--) {
      this.y[i] = this.y[i - 1];
    }
    this.y[0] = y0;
    
    // Calculate the neuron inputs and apply activation function
    const newX = Array(this.N);
    for (let i = 0; i < this.N; i++) {
      let u = 0;
      for (let j = 0; j < this.D; j++) {
        u += this.w[i][j] * this.y[j];
      }
      newX[i] = Math.tanh(u);
    }
    
    this.x = newX;
    return [...this.x];
  }
  
  generateTrajectory(tmax, discard = 0) {
    this.reset();
    
    // Discard initial transient
    for (let i = 0; i < discard; i++) {
      this.iterate();
    }
    
    // Collect trajectory
    const x1Traj = [];
    const x2Traj = [];
    
    for (let t = 0; t < tmax; t++) {
      const x = this.iterate();
      x1Traj.push(x[0]);
      x2Traj.push(x[1]);
    }
    
    return [x1Traj, x2Traj];
  }
}

// Utility function to check if attractor is interesting
function checkIfInteresting(x1, x2, gridSize = 100, threshold = 0.1) {
  // Create a grid for binning
  const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
  
  // Count points in each cell
  for (let i = 0; i < x1.length; i++) {
    // Map values from [-1, 1] to [0, gridSize-1]
    const binX = Math.floor(((x1[i] + 1) / 2) * (gridSize - 1));
    const binY = Math.floor(((x2[i] + 1) / 2) * (gridSize - 1));
    
    // Ensure values are within bounds
    if (binX >= 0 && binX < gridSize && binY >= 0 && binY < gridSize) {
      grid[binX][binY] = 1;
    }
  }
  
  // Count occupied cells
  let occupiedCells = 0;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] > 0) {
        occupiedCells++;
      }
    }
  }
  
  // Calculate fraction of occupied cells
  const fraction = occupiedCells / (gridSize * gridSize);
  
  // Check if the fraction is above the threshold but not too high
  return fraction > threshold && fraction < 0.9;
}

// Component for drawing the attractor
const AttractorCanvas = ({ x1, x2, width, height, skipValue = 1, lineWidth = 0.5, alpha = 0.2 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!x1 || !x2 || x1.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    
    // Find data bounds
    let minX = Math.min(...x1);
    let maxX = Math.max(...x1);
    let minY = Math.min(...x2);
    let maxY = Math.max(...x2);
    
    // Add padding
    const padding = 0.05;
    const rangeX = maxX - minX;
    const rangeY = maxY - minY;
    minX -= rangeX * padding;
    maxX += rangeX * padding;
    minY -= rangeY * padding;
    maxY += rangeY * padding;
    
    // Function to map data coordinates to canvas coordinates
    const mapX = (x) => width * (x - minX) / (maxX - minX);
    const mapY = (y) => height - height * (y - minY) / (maxY - minY); // Invert Y-axis
    
    // Draw attractor trajectory with color gradient
    ctx.lineWidth = lineWidth;
    
    // Use skipped values for plotting
    const x1Plot = x1.filter((_, i) => i % skipValue === 0);
    const x2Plot = x2.filter((_, i) => i % skipValue === 0);
    
    for (let i = 0; i < x1Plot.length - 1; i++) {
      // Calculate color based on position (similar to Python code)
      const z = Math.abs(Math.sin(1.6 * x2Plot[i] + 0.4 * x1Plot[i]));
      const hue = 240 * z; // Map to blue-red spectrum
      
      ctx.beginPath();
      ctx.moveTo(mapX(x1Plot[i]), mapY(x2Plot[i]));
      ctx.lineTo(mapX(x1Plot[i+1]), mapY(x2Plot[i+1]));
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${alpha})`;
      ctx.stroke();
    }
    
  }, [x1, x2, width, height, skipValue, lineWidth, alpha]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className="border border-gray-300 rounded-lg bg-white"
    />
  );
};

// Slider with label component
const ParamSlider = ({ label, value, min, max, step, onChange, disabled = false }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm text-gray-500">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        disabled={disabled}
      />
    </div>
  );
};

// Main component
const NeuralAttractorWidget = () => {
  // State for parameters
  const [N, setN] = useState(4);
  const [D, setD] = useState(16);
  const [s, setS] = useState(0.75);
  const [seed, setSeed] = useState(12345);
  const [tmax, setTmax] = useState(10000);
  const [skipValue, setSkipValue] = useState(4);
  const [lineWidth, setLineWidth] = useState(0.5);
  const [alpha, setAlpha] = useState(0.15);
  
  // State for generated data
  const [x1, setX1] = useState([]);
  const [x2, setX2] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isInteresting, setIsInteresting] = useState(null);
  const [autoFilter, setAutoFilter] = useState(false);
  
  // Canvas dimensions
  const canvasWidth = 500;
  const canvasHeight = 500;
  
  // Generate new attractor
  const generateAttractor = (autoFilterEnabled = autoFilter) => {
    setIsGenerating(true);
    
    // Use setTimeout to avoid freezing the UI
    setTimeout(() => {
      try {
        let x1Arr, x2Arr, interesting;
        let attempts = 0;
        const maxAttempts = 10;
        
        do {
          // Generate new seed if retrying
          const currentSeed = attempts === 0 ? seed : Math.floor(Math.random() * 1000000);
          if (attempts > 0) {
            setSeed(currentSeed);
          }
          
          // Create neural network attractor
          const nn = new NeuralAttractor(N, D, s, currentSeed);
          
          // Generate trajectory
          const trajectory = nn.generateTrajectory(tmax, 1000);
          x1Arr = trajectory[0];
          x2Arr = trajectory[1];
          
          // Check if interesting
          interesting = checkIfInteresting(x1Arr, x2Arr);
          attempts++;
          
        } while (autoFilterEnabled && !interesting && attempts < maxAttempts);
        
        // Update state with generated data
        setX1(x1Arr);
        setX2(x2Arr);
        setIsInteresting(interesting);
        setIsGenerating(false);
        
        if (autoFilterEnabled && !interesting && attempts >= maxAttempts) {
          alert("Failed to find an interesting attractor after 10 attempts. Try adjusting parameters.");
        }
      } catch (error) {
        console.error("Error generating attractor:", error);
        setIsGenerating(false);
      }
    }, 100);
  };
  
  // Generate attractor on component mount
  useEffect(() => {
    generateAttractor(false);
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Parameters panel */}
        <div className="w-full md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Network Parameters</h2>
            
            <ParamSlider 
              label="Number of neurons (N)" 
              value={N} 
              min={2} 
              max={8} 
              step={1} 
              onChange={setN}
              disabled={isGenerating}
            />
            
            <ParamSlider 
              label="Input dimension (D)" 
              value={D} 
              min={4} 
              max={64} 
              step={4} 
              onChange={setD}
              disabled={isGenerating}
            />
            
            <ParamSlider 
              label="Scaling factor (s)" 
              value={s} 
              min={0.1} 
              max={1.0} 
              step={0.01} 
              onChange={setS}
              disabled={isGenerating}
            />
            
            <ParamSlider 
              label="Random seed" 
              value={seed} 
              min={0} 
              max={1000000} 
              step={1} 
              onChange={setSeed}
              disabled={isGenerating}
            />
            
            <button
              onClick={() => generateAttractor()}
              disabled={isGenerating}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-colors mb-4"
            >
              {isGenerating ? "Generating..." : "Generate Attractor"}
            </button>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="autoFilter"
                checked={autoFilter}
                onChange={() => setAutoFilter(!autoFilter)}
                className="mr-2"
              />
              <label htmlFor="autoFilter" className="text-sm text-gray-700">
                Auto-filter uninteresting attractors
              </label>
            </div>
            
            {isInteresting !== null && (
              <div className={`text-sm ${isInteresting ? 'text-green-600' : 'text-orange-500'} mb-4`}>
                This attractor is {isInteresting ? 'interesting' : 'less interesting'} based on phase space coverage.
              </div>
            )}
            
            <h2 className="text-lg font-semibold mb-4 mt-6">Visualization Parameters</h2>
            
            <ParamSlider 
              label="Number of points" 
              value={tmax} 
              min={1000} 
              max={50000} 
              step={1000} 
              onChange={setTmax}
              disabled={isGenerating}
            />
            
            <ParamSlider 
              label="Skip value" 
              value={skipValue} 
              min={1} 
              max={16} 
              step={1} 
              onChange={setSkipValue}
            />
            
            <ParamSlider 
              label="Line width" 
              value={lineWidth} 
              min={0.1} 
              max={2.0} 
              step={0.1} 
              onChange={setLineWidth}
            />
            
            <ParamSlider 
              label="Transparency" 
              value={alpha} 
              min={0.01} 
              max={0.5} 
              step={0.01} 
              onChange={setAlpha}
            />
          </div>
        </div>
        
        {/* Visualization panel */}
        <div className="w-full md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Attractor Visualization</h2>
            
            {isGenerating ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-lg text-gray-500">Generating attractor...</div>
              </div>
            ) : (
              <div className="flex justify-center">
                <AttractorCanvas 
                  x1={x1} 
                  x2={x2} 
                  width={canvasWidth} 
                  height={canvasHeight} 
                  skipValue={skipValue}
                  lineWidth={lineWidth}
                  alpha={alpha}
                />
              </div>
            )}
            
            <div className="mt-4 text-sm text-gray-600">
              <p>Parameters: N={N}, D={D}, s={s.toFixed(2)}, seed={seed}</p>
              <p className="mt-2">
                The above visualization shows a 2D projection of the attractor&apos;s phase space using the first two neuron outputs.
                Adjust the parameters to explore different attractor patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NeuralAttractorWidget;