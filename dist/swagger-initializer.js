window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Get the version from URL parameter or use default
  const urlParams = new URLSearchParams(window.location.search);
  const version = urlParams.get('version') || 'json';
  
  // Map version parameter to the actual directory path
  let basePath;
  switch(version) {
    case 'json':
      basePath = 'nios-swagger/json';
      break;
    case 'v2.13.6':
      basePath = 'nios-swagger/v2.13.6';
      break;
    case 'v2.12.3':
      basePath = 'nios-swagger/v2.12.3';
      break;
    default:
      basePath = 'nios-swagger/json'; // Default fallback
  }
  
  // Initialize Swagger UI
  window.ui = SwaggerUIBundle({
    url: `${basePath}/dns.json`,
    urls: [
      {url: `${basePath}/acl.json`, name: "ACL"},
      {url: `${basePath}/cloud.json`, name: "Cloud"},
      {url: `${basePath}/dhcp.json`, name: "DHCP"},
      {url: `${basePath}/discovery.json`, name: "Discovery"},
      {url: `${basePath}/dns.json`, name: "DNS"},
      {url: `${basePath}/dtc.json`, name: "DTC"},
      {url: `${basePath}/federatedrealms.json`, name: "Federated Realms"},
      {url: `${basePath}/grid.json`, name: "Grid"},
      {url: `${basePath}/ipam.json`, name: "IPAM"},
      {url: `${basePath}/microsoftserver.json`, name: "Microsoft Server"},
      {url: `${basePath}/misc.json`, name: "Misc"},
      {url: `${basePath}/notification.json`, name: "Notification"},
      {url: `${basePath}/parentalcontrol.json`, name: "Parental Control"},
      {url: `${basePath}/rir.json`, name: "RIR"},
      {url: `${basePath}/rpz.json`, name: "RPZ"},
      {url: `${basePath}/security.json`, name: "Security"},
      {url: `${basePath}/smartfolder.json`, name: "Smart Folder"},
      {url: `${basePath}/threatinsight.json`, name: "Threat Insight"},
      {url: `${basePath}/threatprotection.json`, name: "Threat Protection"}
    ],
    supportedSubmitMethods: [],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
