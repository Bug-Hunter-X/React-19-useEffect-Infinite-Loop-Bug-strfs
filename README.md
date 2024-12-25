# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 involving infinite loops within `useEffect` hooks.  The bug arises from incorrectly updating state within the `useEffect`'s dependency array, leading to continuous re-renders and potential application crashes.

## Bug Description
The provided `MyComponent` uses `useState` to manage a count. The `useEffect` hook attempts to increment this count on every render, creating an infinite loop because the dependency array is empty ([]). This means the effect runs continuously, triggering another state update, which leads to another effect execution, and so on.

## Solution
The solution involves correctly managing the dependency array.  If the effect should run only once on mount, include an empty dependency array. If it should run based on certain state changes, include those state variables in the dependency array.   The example below uses `useRef` to store the count outside the state, eliminating the problem.
