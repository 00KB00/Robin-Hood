function startCountdown(timeUntilHint, timerElementID, buttonElementID){
  const endTime = Date.now() + (timeUntilHint*60*1000);
  const timerElement = document.getElementById(timerElementID)
  const buttonHintElement = document.getElementById(buttonElementID);
  const hintContainer = buttonHintElement.parentElement;
  const hintText = hintContainer.querySelector("p");

  buttonHintElement.style.display = "none";
  hintText.style.display = "none";


  function updateTimer(){
    const now = Date.now();
    const remaining = endTime - now;

    if(remaining <= 0){
      timerElement.textContent = "",
      buttonHintElement.style.display = "block";
      clearInterval(countdown);
      return;
    }

      const minutes = Math.floor(remaining/1000/60);
      const seconds = Math.floor((remaining/1000)%60);

      timerElement.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  }

  buttonHintElement.addEventListener("click", function(){
      hintText.style.display = "block";
      buttonHintElement.style.display = "none";
    });

  updateTimer();
  const countdown = setInterval(updateTimer, 1000)
}


//1000ms = 1s
//60s = 1m
