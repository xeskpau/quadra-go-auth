document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('loginModal');
    
    // Get the button that opens the modal
    const btn = document.getElementById('loginBtn');
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
    
    // When the user clicks the button, open the modal 
    if (btn) {
        btn.onclick = function() {
            modal.style.display = 'block';
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Form validation
    const emailLoginForm = document.getElementById('emailLoginForm');
    if (emailLoginForm) {
        emailLoginForm.addEventListener('submit', function(e) {
            let valid = true;
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            
            if (!email.value || !isValidEmail(email.value)) {
                emailError.style.display = 'block';
                valid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Password validation
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            
            if (!password.value) {
                passwordError.style.display = 'block';
                valid = false;
            } else {
                passwordError.style.display = 'none';
            }
            
            if (!valid) {
                e.preventDefault();
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}