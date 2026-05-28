document.addEventListener('DOMContentLoaded', () => {
  
  // DOM element selectors
  const btnStudent = document.getElementById('btnStudent');
  const btnTeacher = document.getElementById('btnTeacher');
  const signInForm = document.getElementById('signInForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Track the current user persona state ("student" or "teacher")
  let currentRole = 'student';

  /* --- ROLE TOGGLE CONTROLLER ACTION HANDLERS --- */
  btnStudent.addEventListener('click', () => {
    if (currentRole !== 'student') {
      currentRole = 'student';
      btnStudent.classList.add('active');
      btnTeacher.classList.remove('active');
      console.log(`Switched context perspective role to: ${currentRole}`);
    }
  });

  btnTeacher.addEventListener('click', () => {
    if (currentRole !== 'teacher') {
      currentRole = 'teacher';
      btnTeacher.classList.add('active');
      btnStudent.classList.remove('active');
      console.log(`Switched context perspective role to: ${currentRole}`);
    }
  });


  /* --- LIVE INPUT CLEANUP VALIDATION ROUTINE --- */
  const clearError = (inputElement) => {
    const group = inputElement.closest('.input-group');
    group.classList.remove('invalid-field');
  };

  const setError = (inputElement) => {
    const group = inputElement.closest('.input-group');
    group.classList.add('invalid-field');
  };

  // Remove red borders instantly upon typing revision activity
  emailInput.addEventListener('input', () => clearError(emailInput));
  passwordInput.addEventListener('input', () => clearError(passwordInput));


  /* --- FORM SUBMISSION VALIDATION LOGIC ENGINE --- */
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Intercept default browser page refresh behavior
    
    let isFormValid = true;
    
    // Core Email validation rule regex patterns matching criteria
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailValue || !emailRegex.test(emailValue)) {
      setError(emailInput);
      isFormValid = false;
    } else {
      clearError(emailInput);
    }

    // Password structural evaluation verification rules code metrics
    const passwordValue = passwordInput.value;
    if (!passwordValue || passwordValue.length < 6) {
      setError(passwordInput);
      isFormValid = false;
    } else {
      clearError(passwordInput);
    }

    // Process secure database package submission when validation checks clear
    if (isFormValid) {
      const payload = {
        role: currentRole,
        username: emailValue,
        password: passwordValue
      };
      
      console.log('Authentication checklist passed! Processing payload package...', payload);
      
      // Simulating a successful login redirect behavior flow
      alert(`Successfully signed in as a ${currentRole.toUpperCase()}!`);
    }
  });

});