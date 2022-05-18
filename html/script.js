$(document).ready(function($) {
  $('.input-text').keyup(function(event) {
      var textBox = event.target;
      var start = textBox.selectionStart;
      var end = textBox.selectionEnd;
      textBox.value = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1).toLowerCase();
  });
});

window.addEventListener('message', function(event) {
if (event.data.type == "enableui") {
    document.body.style.display = event.data.enable ? "block" : "none";
}else if (event.data.action == "notification") {
  popupkon('هشدار' ,event.data.message);
}
});

$("#name, #family").on("keydown", function(event){
// Allow controls such as backspace, tab etc.
var arr = [8,9,16,17,20,35,36,37,38,39,40,45,46];

// Allow letters
for(var i = 65; i <= 90; i++){
  arr.push(i);
}

// Prevent default if not in array
if(jQuery.inArray(event.which, arr) === -1){
  event.preventDefault();
}
});

//need to recode
function gender(value){
var gender
if (value == "???"){gender = 1}
else{gender = 0}
return gender
}

$(document).ready(function() {
$('#register').on('click', function(e){
  if(($('#name').val().length < 3 ) || ($('#family').val().length < 3 )|| !($("#dateofbirth").val())) {
    popupkon('هشدار', 'نام و نام خانوادگی حداقل می بایست 3 حرف باشد و حتما تاریخ تولد خود را مشخص کنید');
    return false;
  } else {
    var gen = gender($(".list__ul").find('a').html())
    e.preventDefault(); // Prevent form from submitting
    $.post('http://identity/register', JSON.stringify({
      name: $("#name").val(),
      family: $("#family").val(),
      gender: gen,
      dateofbirth: $("#dateofbirth").val(),

    }));

  }
});
});
function popupkon(title,msg) {
$('#modalTitle').text(title);
$('#modalText').text(msg);
$('#clicktomod').click();
}
