var name = "<h1>Wellcome To The Mobile Phone Recominder </h1>"
 document.write( name)

var budget = prompt("enter your budget ( high,medium,low)")
if (budget == "high" || "medium" || "low") {
    console.log(budget)



    var system = prompt("opreating system you prefear (Android,iOS)")
    if (system == "Android" || "iOS") {
        console.log(system)

        var cameraQuality = prompt(" cameraQuality")
        if (cameraQuality == "basic" || "moderat" || "high") {
            console.log(cameraQuality)

            var bateryLife = prompt("bateryLife(short,average,long)")
            if (bateryLife == "short" || "average" || "long") {

                console.log(bateryLife)
                var screenSize = prompt(" screenSize(small,medium,large)")
                if (screenSize == "small" || "medium" || "large") {
                    console.log(screenSize)

                }
            }

        }
    }
}
                       
