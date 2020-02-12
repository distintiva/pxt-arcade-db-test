function displayStoredScores () {
    scores = arcadeDB.toLine("Number of scores: " + convertToText(arcadeDB.listCount("SCORES")))
    for (let index = 0; index <= arcadeDB.listCount("SCORES") - 1; index++) {
        score_at_index = arcadeDB.toLine(convertToText(arcadeDB.listGetValueAt("SCORES", index)))
        scores = "" + scores + score_at_index
    }
    game.showLongText(scores, DialogLayout.Full)
}
function displayUserData () {
    user_name = arcadeDB.getTextValue("NAME")
    user_age = arcadeDB.getNumberValue("AGE")
    game.showLongText(arcadeDB.toLines(["Player: " + user_name, "Age: " + user_age]), DialogLayout.Full)
}
function askNameAndAge () {
    user_name = game.askForString("Enter your player name")
    user_age = game.askForNumber("How old are you ?")
    arcadeDB.setTextValue("NAME", user_name)
    arcadeDB.setNumberValue("AGE", user_age)
}
let user_age = 0
let user_name = ""
let score_at_index = ""
let scores = ""
if (arcadeDB.exists() && game.ask("FOUND EXISTING DATABASE", "Do you want to delete it?")) {
    arcadeDB.deleteAll()
}
if (!(arcadeDB.exists())) {
    askNameAndAge()
    arcadeDB.listAddValue("SCORES", 226)
    arcadeDB.listAddValue("SCORES", 669)
    arcadeDB.listAddValue("SCORES", 13)
}
displayUserData()
displayStoredScores()
