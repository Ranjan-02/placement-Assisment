// Debounce function
function debounce(func, delay) {
    let timeoutId;
  
    return function() {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  
  // Event handler function
  function handleSearch() {
    // Perform search operation
    console.log('Searching...');
  }
  
  // Add event listener with debouncing
  const input = document.getElementById('searchInput');
  const debouncedSearch = debounce(handleSearch, 300);
  
  input.addEventListener('keyup', debouncedSearch);
  