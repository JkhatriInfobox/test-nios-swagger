// Version selector for NIOS Swagger UI
(function() {
  // Use DOMContentLoaded instead of window.onload to avoid conflict with Swagger UI
  document.addEventListener('DOMContentLoaded', function() {
    // Check if Swagger UI is loaded every 500ms
    const checkInterval = setInterval(function() {
      if (document.querySelector('.swagger-ui')) {
        clearInterval(checkInterval);
        setTimeout(addVersionSelector, 500); // Wait additional time for complete render
      }
    }, 500);
  });
  
  function addVersionSelector() {
    // Available versions - update this when adding new versions
    const versions = [
      { name: 'json', label: 'v2.13.6 (Latest)' },
      { name: 'v2.13.6', label: 'v2.13.6' },
      { name: 'v2.12.3', label: 'v2.12.3' }
    ];
    
    // Get the current version from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentVersion = urlParams.get('version') || 'json';
    
    // Create the floating version selector div
    const versionDiv = document.createElement('div');
    versionDiv.className = 'version-floating-container';
    document.body.appendChild(versionDiv);
    
    // Create the version selector elements
    const label = document.createElement('span');
    label.textContent = 'API Version: ';
    versionDiv.appendChild(label);
    
    const select = document.createElement('select');
    versionDiv.appendChild(select);
    
    // Add versions to select
    versions.forEach(version => {
      const option = document.createElement('option');
      option.value = version.name;
      option.text = version.label;
      option.selected = version.name === currentVersion;
      select.appendChild(option);
    });
    
    // Change handler
    select.onchange = function() {
      const newVersion = this.value;
      const url = new URL(window.location.href);
      url.searchParams.set('version', newVersion);
      window.location.href = url.toString();
    };
    
    // Try to add version badge to the API title
    try {
      const title = document.querySelector('.swagger-ui .title');
      if (title) {
        const versionBadge = document.createElement('span');
        versionBadge.className = 'version-badge';
        versionBadge.textContent = versions.find(v => v.name === currentVersion)?.label || currentVersion;
        title.appendChild(versionBadge);
      }
    } catch (e) {
      console.log('Could not add version badge:', e);
    }
  }
})();
