chrome.sessions.onChanged.addListener(function (changes) {
    chrome.sessions.getAll(function (sessions) {
      // Process the active sessions here
      console.log(sessions);
    });
  });
  