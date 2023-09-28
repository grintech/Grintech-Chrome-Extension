document.addEventListener('DOMContentLoaded', function () {
    chrome.sessions.getAll(function (sessions) {
      var container = document.getElementById('sessions-container');
      sessions.forEach(function (session) {
        var sessionElement = document.createElement('div');
        sessionElement.textContent = session.tab.url;
        container.appendChild(sessionElement);
      });
    });
});
  