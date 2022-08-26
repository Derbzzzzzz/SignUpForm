var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
        document.getElementById('password').setCustomValidity('');
      document.getElementById('confirm_password').setCustomValidity('');
    } else {
      document.getElementById('password').setCustomValidity('Passwords do not match');
      document.getElementById('confirm_password').setCustomValidity('Passwords do not match');
    }
  }