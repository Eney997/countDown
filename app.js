function startCountdown() {
    var countdownNumber = parseInt(document.getElementById('countdownInput').value);
    
    var countdownElement = document.getElementById('countdownDisplay');
    countdownElement.textContent = countdownNumber;
    
    var intervalId = setInterval(function() {
        countdownNumber--;
        countdownElement.textContent = countdownNumber;
        
        if (countdownNumber <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}
