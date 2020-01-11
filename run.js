function start(counter) {
    if (counter >= options.length) {
        counter = 0
    }
    setTimeout(function () {
        console.log("Clicking option " + counter);

        try {
            options[counter].click();
            counter++;  
        }
        catch{
            options = document.getElementsByClassName("answer-outer")
            counter = 0
        }
        start(counter)
    }, 1000);
}

var options = document.getElementsByClassName("answer-outer")
start(0);
