function askNameAndAge () {
    user_name = game.askForString("Enter your player name")
    user_age = game.askForNumber("How old are you ?")
}
let user_age = 0
let user_name = ""
if (game.ask("FOUND EXISTING DATABASE", "Do you want to delete it?")) {
    askNameAndAge()
}
game.splash("Player: " + user_name, "Age: " + user_age)
