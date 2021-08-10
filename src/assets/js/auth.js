jQuery(function () {

  $(document).on('click', '#signup', function (e) {
    e.preventDefault();
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var password_ = $('#repassword').val();

    if (!username || !email || !password || !password_) {
      alert("Please fill all fields!");
    }
    else if (password != password_) {
      alert("Passwords don't match!");
    } 
    else {
      alert(`Successful Sign Up!\n\nusername: ${username}\nemail: ${email}\npassword: ${password}\nconfirm password: ${password_}`);
      $("form").submit();
    }

  });

  $(document).on('click', '.toggle-password', function () {
    var index = $('.toggle-password').index(this);

    if ($('.password').eq(index).attr("type") == "password") {
      $('.password').eq(index).attr("type", "text")
      $('.toggle-password').eq(index).removeClass('fa-eye').addClass('fa-eye-slash')
    } else {
      $('.password').eq(index).attr("type", "password")
      $('.toggle-password').eq(index).removeClass('fa-eye-slash').addClass('fa-eye')
    }
  });
});
$('.navMenu').on('click', 'li', function () {
  $('.navMenu li.active').removeClass('active');
  $(this).addClass('active')
});

$("ducument").ready(function () {

  if (window.matchMedia('(max-width: 858px)').matches)
    $('ul').css("display", "none");
  else
    $('ul').css("display", "block");

  $('.create').click(function () {
    $('.noteList').fadeOut("fast");
    $('.aboutUs').fadeOut("fast");
    if (window.matchMedia('(max-width: 858px)').matches)
      $('ul').css("display", "none");
    $('.addNote').slideDown("slow", function () {
    });
  });
  $('.about').click(function () {
    $('.addNote').fadeOut("fast");
    $('.noteList').fadeOut("fast");
    if (window.matchMedia('(max-width: 858px)').matches)
      $('ul').css("display", "none");
    $('.aboutUs').slideDown("slow");
  });

  $('.home').click(function () {
    $('.addNote').fadeOut("fast");
    $('.aboutUs').fadeOut("fast");
    if (window.matchMedia('(max-width: 858px)').matches)
      $('ul').css("display", "none");
    $('.noteList').slideDown("slow", function () {

    });
  });
  $('#check').click(function () {
    $('ul').css("display", "block");
  });


  $(function () {
    $('#email').keyup(function () {
      if (validateEmail()) {
        $('#email').css("border", "2px solid blue");
        $('.emsg').html("<p class='text-primary'>You Entered is a valid as an email</p>");
      } else {
        $('#email').css("border", "2px solid red");
        $('.emsg').html("<p class='text-warning'>You Entered is invalid email!</p>");
        return false;
      }
    });
  });

  function validateEmail() {
    var email = $("#email").val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  $(function () {
    $('#repassword').keyup(function () {
      var password = $("#password").val();
      var repassword = $("#repassword").val();

      if (password != repassword) {
        $('#repassword').css("border", "2px solid red");
        $('.rmsg').html("<p class='text-warning'>The Password & Confirm-Password Does not match\!</p>");
        return false;
      } else
        $('#repassword').css("border", "2px solid blue");
      $('.rmsg').html("<p class='text-primary'>The Password & Confirm-Password has successfuly has\!</p>");
      return true;
    });
  });

});
