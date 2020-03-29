const friends = require("./../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(determineFriend(friends));
    });
}


function determineFriend(arrayOfObjects) {
    let userScore = friends[friends.length - 1].scores;
    let scoresArray = [];
    arrayOfObjects.forEach(function (friend) {
        let scores = friend.scores;
        let comparisonArray = [];

        for (var i = 0; i < scores.length; i++) {
            let compare = Math.abs(parseInt(scores[i]) - parseInt(userScore[i]));
            comparisonArray.push(compare);
        };
        let totalScore = 0;
        for (var i = 0; i < comparisonArray.length; i++) {
            totalScore = totalScore + comparisonArray[i];

        }
        scoresArray.push(totalScore);
    })
    scoresArray.pop();
    console.log(scoresArray)

    let winner = 0;
    for (var i = 1; i < scoresArray.length; i++) {
        if (scoresArray[i] < scoresArray[winner]) {
            winner = i;
        }
    }

    console.log("winner: " + winner);
    return {
        name: friends[winner].name,
        image: friends[winner].image,
        description: friends[winner].description
    }


}