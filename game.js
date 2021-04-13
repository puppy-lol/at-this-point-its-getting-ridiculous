player1_name = LocalStorage.getItem("player_1_name");
player2_name = LocalStorage.getItem("player_2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player_1_user").innerHTML = player1_name + ":";
document.getElementById("player_2_user").innerHTML = player2_name + ":";
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    product = parseInt(number1) * parseInt(number2);

    question_word = "<h4>" + number1 + " x " + number2 + "</h4>"
    input_box = "<br> Answer: <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}