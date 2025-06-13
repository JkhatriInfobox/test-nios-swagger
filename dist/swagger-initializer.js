window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "nios-swagger/json/dns.json",
    urls: [
      {url: "nios-swagger/json/acl.json", name: "ACL"},
      {url: "nios-swagger/json/cloud.json", name: "Cloud"},
      {url: "nios-swagger/json/dhcp.json", name: "DHCP"},
      {url: "nios-swagger/json/discovery.json", name: "Discovery"},
      {url: "nios-swagger/json/dns.json", name: "DNS"},
      {url: "nios-swagger/json/dtc.json", name: "DTC"},
      {url: "nios-swagger/json/federatedrealms.json", name: "Federated Realms"},
      {url: "nios-swagger/json/grid.json", name: "Grid"},
      {url: "nios-swagger/json/ipam.json", name: "IPAM"},
      {url: "nios-swagger/json/microsoftserver.json", name: "Microsoft Server"},
      {url: "nios-swagger/json/misc.json", name: "Misc"},
      {url: "nios-swagger/json/notification.json", name: "Notification"},
      {url: "nios-swagger/json/parentalcontrol.json", name: "Parental Control"},
      {url: "nios-swagger/json/rir.json", name: "RIR"},
      {url: "nios-swagger/json/rpz.json", name: "RPZ"},
      {url: "nios-swagger/json/security.json", name: "Security"},
      {url: "nios-swagger/json/smartfolder.json", name: "Smart Folder"},
      {url: "nios-swagger/json/threatinsight.json", name: "Threat Insight"},
      {url: "nios-swagger/json/threatprotection.json", name: "Threat Protection"}
    ],
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
