
var myEmptyDiv = $("#empty-div")
var myImage = ['assets/images/image1.png', 'assets/images/image2.png', 'assets/images/image3.png', 'assets/images/image4.png'];
var wins = 0;
var losses = 0;
var totalScore = 0;
var numbers = [];
var targetScore = 65;



//generate different for main random number

function randomNumber() {
    for (var i = 0; i < 4; i++) {
        var number = Math.floor(Math.random() * 9) + 1;
        numbers.push(number)
    }
    $('#targetScore').text(targetScore)
}
randomNumber();
function imageGenerator() {
    myEmptyDiv.empty();
    for (var j = 0; j < numbers.length; j++) {
        var img = $('<img>');
        img.attr('src', myImage[j]);
        img.addClass('myimages')
        img.attr('data-value', numbers[j])
        myEmptyDiv.append(img)
    }
    startgame();
}
imageGenerator()


//start game
function startgame() {
    $('.myimages').on('click', function () {

        var value = Number($(this).attr('data-value'));
        totalScore += value;
        $('#totalScore').text(totalScore);
        console.log(totalScore, targetScore);
        ///wins and DOM
        if (totalScore == targetScore) {
            wins++;
            console.log("line 39");
            $('#wins').text(win);

            targetScore = Math.floor(Math.random() * 120) + 19;
            console.log(targetScore);
            $('#targetScore'.text(targetScore))

            totalScore = 0;
            $('#totalScore').text(totalScore);
            randomNumber();
            imageGenerator();
            console.log('wins ' + wins)
        }
        ///loseses and DOM
        if (totalScore > targetScore) {
            losses++;
            $('#losses').text(losses);

            targetScore = Math.floor(Math.random() * 98) + 1;
            totalScore = 0;
            $('#totalScore').text(totalScore);
            randomNumber();
            imageGenerator();

        }



    });
}
startgame();























