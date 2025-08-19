import { useState, useEffect, useRef } from 'react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      id: 'projects',
      targetValue: 10,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'From concept to completion'
    },
    {
      id: 'competitions',
      targetValue: 7,
      suffix: '',
      label: 'Competitions Placed',
      description: 'Awards and recognitions earned'
    },
    {
      id: 'startups',
      targetValue: 6,
      suffix: '',
      label: 'Startup Collaborations',
      description: 'Early-stage ventures supported'
    }
  ];

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Jump straight to final values
      setAnimatedValues(metrics.map((metric, index) => 
        metric.compactValue !== undefined ? metric.compactValue : metric.targetValue
      ));
      return;
    }

    // Animate each metric with staggered timing
    metrics.forEach((metric, index) => {
      const duration = 1200 + (index * 150); // 1.2s base + stagger
      const startTime = Date.now() + (index * 100); // Stagger start times
      const targetValue = metric.compactValue !== undefined ? metric.compactValue : metric.targetValue;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic: 1 - (1 - t)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * targetValue);

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      setTimeout(() => requestAnimationFrame(animate), index * 100);
    });
  }, [isVisible]);

  const formatNumber = (value: number, metric: typeof metrics[0], index: number) => {
    const animatedValue = animatedValues[index];
    
    if (metric.compactValue !== undefined) {
      // For large numbers like 2M+
      return `${animatedValue}${metric.suffix}`;
    }
    
    // Add commas for thousands
    const formatted = animatedValue.toLocaleString();
    return `${formatted}${metric.suffix}`;
  };

  return (
    <section ref={sectionRef} className="pt-16 px-4 bg-white">
      {/* Left-aligned heading */}
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-900">Impact by Numbers</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Numbers that reflect my journey of curiosity, learning, and making meaningful impact across different domains.
        </p>
      </div>
      
      {/* Statistics blocks */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <div 
            key={metric.id}
            className="text-center px-4"
          >
            {/* Large number with count-up animation */}
            <div 
              className="text-4xl font-bold mb-3"
              style={{ color: '#BE3D2A' }}
              aria-live="off"
              aria-label={`${formatNumber(metric.targetValue, metric, index)}`}
            >
              {formatNumber(metric.targetValue, metric, index)}
            </div>
            
            {/* Bolded label */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {metric.label}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
