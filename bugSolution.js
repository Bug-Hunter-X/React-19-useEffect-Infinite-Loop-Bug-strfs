```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Correct: Only runs once on mount
    countRef.current = countRef.current + 1;
  }, []);

  return <div>Count: {countRef.current}</div>;
}
```