((scriptName, checkTimeMs, timeOutMs) => {
  let elapsedTime = 0;
  return new Promise((resolve, reject) => {
    setTimeout(x => reject("script: " + scriptName + " Timed out!"), timeOutMs);
    const time = setInterval(() => {
      elapsedTime += checkTimeMs;
      if (document.body.innerHTML.indexOf(scriptName) > -1) {
        resolve({
          response: "script: " + scriptName + " found!",
          time: (elapsedTime / 1000).toFixed(2) + "s"
        });
        clearInterval(time);
      }
    }, checkTimeMs);
  });
})("script_name.js", 100, 20000)
  .then(res => console.log(res))
  .catch(err => console.log(err));

//  5.) check if certain script has loaded
