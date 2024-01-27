function checkLoginColor(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var login_btn = document.getElementById('loginP');

  if (username !== '' && password !== ''){
    login_btn.classList.add('yellow');
      } else {
        login_btn.classList.remove('yellow');
      }
  }

  function login_btn(){
    alert("Login button clicked");
  }
