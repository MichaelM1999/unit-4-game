$( document ).ready(function() {
// total score
let score = 0;
console.log(score);
//target score
const goal = Math.floor(Math.random()*300);
console.log(goal);
$('#target').text(goal);
//wins and losses
let wins = 0;
let losses = 0;
//random number for crystals
const crystal1v = Math.floor(Math.random()*30+1);
const crystal2v = Math.floor(Math.random()*20+1);
const crystal3v = Math.floor(Math.random()*15+1);
const crystal4v = Math.floor(Math.random()*2+1);
$('#pic1').attr('data-value1', crystal1v);
$('#pic2').attr('data-value1', crystal2v);
$('#pic3').attr('data-value1', crystal3v);
$('#pic4').attr('data-value1', crystal4v);

console.log(crystal1v);
console.log(crystal2v);
console.log(crystal3v);
console.log(crystal4v);
$('#pic1').on('click', function(){

    let value1 = ($(this).attr("data-value1"));
    value1 = parseInt(value1);
    score += value1;
    console.log(value1);
    console.log(score);
    $('#scoreW').text(score);
});
$('#pic2').on('click', function(){

    let value2 = ($(this).attr("data-value2"));
    value2 = parseInt(value2);
    score += value2;
    console.log(value2);
    console.log(score);
    $('#scoreW').text(score);
});
$('#pic3').on('click', function(){

    let value3 = ($(this).attr("data-value3"));
    value3 = parseInt(value3);
    score += value3;
    console.log(value3);
    console.log(score);
    $('#scoreW').text(score);
});$('#pic4').on('click', function(){

    let value4 = ($(this).attr("data-value4"));
    value4 = parseInt(value4);
    score += value4;
    console.log(value4);
    console.log(score);
    $('#scoreW').text(score);
});
// $('#pic2').on('click', function(){ crystal2 + score});
// $('#pic3').on('click', function(){ crystal3 + score});
// $('#pic4').on('click', function(){ crystal4 + score});
if (score > goal) {
    alert('You Lost');
    losses++;
}
if (score === goal) {
    alert('you Win');
    wins++;
}
$('#wins')
})