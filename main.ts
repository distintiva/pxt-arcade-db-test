function displayUserData () {
    user_name = arcadeDB.getTextValue("NAME")
    user_age = arcadeDB.getNumberValue("AGE")
    game.showLongText(arcadeDB.toLines(["Player: " + user_name, "Age: " + user_age]), DialogLayout.Full)
}
function displayStoredScores () {
    scores = arcadeDB.toLine("Number of scores: " + convertToText(arcadeDB.listCount("SCORES")))
    for (let index = 0; index <= arcadeDB.listCount("SCORES") - 1; index++) {
        score_at_index = arcadeDB.toLine(convertToText(arcadeDB.listGetValueAt("SCORES", index)))
        scores = "" + scores + score_at_index
    }
    game.showLongText(scores, DialogLayout.Full)
}
let score_at_index = ""
let scores = ""
let user_age = 0
let user_name = ""
if (!(arcadeDB.exists())) {
    game.splash("Database not found", "Filling with sample data")
    arcadeDB.setTextValue("NAME", "JOHN")
    arcadeDB.setNumberValue("AGE", 30)
    arcadeDB.listAddValue("SCORES", 1058)
    arcadeDB.listAddValue("SCORES", 50)
    arcadeDB.listAddValue("SCORES", 30)
}
displayUserData()
displayStoredScores()
if (arcadeDB.listCount("SCORES") > 0 && game.ask("TEST DELETING A LIST", "Delete scores now ?")) {
    arcadeDB.deleteList("SCORES")
    displayStoredScores()
}
if (game.ask("TEST DELETING DATABASE", "Do you want to delete it?")) {
    arcadeDB.deleteAll()
}
if (!(arcadeDB.exists())) {
    game.splash("Database removed from flash", "Restar console")
} else {
    game.splash("Database in flash memory", "Restar console to test")
}
