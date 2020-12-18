let thisIsConsole = document.getElementById("consoleSelect").value; 
let thisIsUsername = document.getElementById("textBox").value
let data = loadData();
let validUsers = document.getElementById("usersToBePainted")



function paintData(a, b) {
  data.users.forEach(user => {
    let $username = user.username
    let $match = $username.includes(b)
     const $user = 
           document.createElement("div")
        if((user.console = a) && ($match == true)) {
 $user.innerHTML = `<p>${user.contact}
 </p>`;
        }
      else {
        $user.innerHTML = `<p>"undefined"</p>`
      }
        validUsers.append($user)
    })
}



function loadData () {
  const users = [
    {
      "username" : "jimbob47",
      "console"  : "playstation",
      "contact"  : "jimbob23 - insta"
     },
    {
      "username" : "Dukas24#23",
      "console"  : "Xbox",
      "contact"  : "itsDukas - Twitter"
    },
    {
      "username" : "sniperman27",
      "console"  : "other",
      "contact"  : "RogSmith47 - insta"
    }
  ]
    return {
      "users" : users
    }
      
      
}
