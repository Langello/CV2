import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete && onComplete();
          }, 500);
          return 100;
        }
        return prevProgress + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <img 
            src={process.env.PUBLIC_URL + "/yoCV.png"} 
            alt="Gastón Langellotti" 
            className="preloader-image"
          />
        </div>
        <h2 className="preloader-title">Gastón Langellotti</h2>
        <p className="preloader-subtitle">Desarrollador Web Full Stack</p>
        <div className="preloader-progress">
          <div 
            className="preloader-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="preloader-percentage">{Math.round(progress)}%</p>
      </div>
      
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          color: white;
        }
        
        .preloader-content {
          text-align: center;
          max-width: 400px;
          padding: 2rem;
        }
        
        .preloader-logo {
          margin-bottom: 1rem;
        }
        
        .preloader-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid white;
          object-fit: cover;
        }
        
        .preloader-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .preloader-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #cccccc;
        }
        
        .preloader-progress {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        
        .preloader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #007bff, #00d4ff);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .preloader-percentage {
          font-size: 0.9rem;
          color: #cccccc;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
