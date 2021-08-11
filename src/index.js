function getIpClient() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Typical action to be performed when the document is ready:
      var ip = JSON.parse(xhttp.responseText).ip;
      if (ip === "45.23.176.231") {
        //console.log("local");
        setTimeout(() => {
          window.location.href = "http://192.168.1.248:8123";
        }, 0);
      } else {
        //console.log("external");
        setTimeout(() => {
          window.location.href = "https://shahha.duckdns.org";
        }, 0);
      }
    }
  };
  xhttp.open("GET", "https://api.ipify.org?format=json", true);
  xhttp.send();
}
getIpClient();
