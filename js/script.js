const DEBUG_MODE = 1;

console.log(
    "-*-*-*-*-*-*-*-*-*-*-*-\n"
    + "| debug mode " + (DEBUG_MODE ? "Enabled" : "Disabled")
    + " |\n-----------------------"
    );

var AFFCTIV_AI = "    ___    ________     __  _          ___    ____\n\
   /   |  / __/ __/____/ /_(_)   __   /   |  /  _/\n\
  / /| | / /_/ /_/ ___/ __/ / | / /  / /| |  / /  \n\
 / ___ |/ __/ __/ /__/ /_/ /| |/ /  / ___ |_/ /   \n\
/_/  |_/_/ /_/  \\___/\\__/_/ |___/  /_/  |_/___/   \n\
"

var LAB_URL = "https://affctiv.ai/"

console.log(AFFCTIV_AI)
console.log("Check Out -> " + LAB_URL)
console.log("2022. Laboratory Intern. Team A(In)")

document.write("<pre id='a1' align='center'>" + AFFCTIV_AI + (DEBUG_MODE ? "-- Debug Mode --" : "") +"</pre>");
document.write("<pre id='a2' align='center'>" + "Check Out -> " + 
                "<a href='https://affctiv.ai/'>" + LAB_URL + "</a>" + 
                "</pre>");
document.write("<pre id='a3' align='center'>" + "2022. Laboratory Intern. Team A(In)" + "</pre>");