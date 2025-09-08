"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Terminal, Zap } from 'lucide-react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayText}</span>;
};

interface CodeSnippet {
  language: string;
  code: string;
  color: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    language: "Python",
    code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`,
    color: "text-blue-400"
  },
  {
    language: "JavaScript",
    code: `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`,
    color: "text-yellow-400"
  },
  {
    language: "TypeScript",
    code: `interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (userData: User): Promise<User> => {
  return api.post('/users', userData);
};`,
    color: "text-cyan-400"
  },
  {
    language: "React",
    code: `const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`,
    color: "text-purple-400"
  },
  {
    language: "CSS",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #667eea, #764ba2);
}`,
    color: "text-pink-400"
  },
  {
    language: "SQL",
    code: `SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.created_at > '2024-01-01'
GROUP BY users.id
ORDER BY order_count DESC;`,
    color: "text-green-400"
  }
];

const CodeTypingBackground: React.FC = () => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedCode, setDisplayedCode] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex];
    
    if (isTyping && charIndex < currentSnippet.code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + currentSnippet.code[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (isTyping && charIndex >= currentSnippet.code.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (!isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedCode("");
        setCharIndex(0);
        setCurrentSnippetIndex(prev => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentSnippetIndex, isTyping, charIndex]);

  const currentSnippet = codeSnippets[currentSnippetIndex];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="relative h-full w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">
                  {codeSnippets[(currentSnippetIndex + index) % codeSnippets.length].language}
                </span>
              </div>
              <pre className={`${codeSnippets[(currentSnippetIndex + index) % codeSnippets.length].color} whitespace-pre-wrap`}>
                {index === 0 ? (
                  <>
                    {displayedCode}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </>
                ) : (
                  <Typewriter 
                    text={codeSnippets[(currentSnippetIndex + index) % codeSnippets.length].code}
                    speed={20 + index * 10}
                  />
                )}
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const CodeHero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Code", "Build", "Deploy", "Scale", "Innovate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <CodeTypingBackground />
      <FloatingElements />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                Multi-Language Support
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Write. </span>
              <span className="relative inline-block">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  {titles[titleIndex]}
                </motion.span>
              </span>
              <span className="text-foreground">.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Experience the future of coding with our AI-powered platform. 
              Write in Python, JavaScript, TypeScript, and more with intelligent 
              auto-completion and real-time collaboration.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Terminal className="w-4 h-4" />
              Start Coding Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Zap className="w-4 h-4" />
              View Examples
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Multi-Language</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeHero;
