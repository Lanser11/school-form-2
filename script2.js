document.getElementById('admin-login-button').addEventListener('click', function() {
    let username = document.getElementById('admin-username').value;
    let password = document.getElementById('admin-password').value;

    if (username && password) {
        showFeedbackForm('admin');
    } else {
        alert("Please enter both username and password.");
    }
});

document.getElementById('teacher-login-button').addEventListener('click', function() {
    let name = document.getElementById('teacher-name').value;
    let password = document.getElementById('teacher-password').value;
    let schoolName = document.getElementById('school-name').value;

    if (name && password && schoolName) {
        showFeedbackForm('teacher');
    } else {
        alert("Please enter all fields.");
    }
});

document.getElementById('parent-login-button').addEventListener('click', function() {
    let name = document.getElementById('parent-name').value;
    let password = document.getElementById('parent-password').value;
    let emisNumber = document.getElementById('emis-number').value;

    if (name && password && emisNumber) {
        showFeedbackForm('parent');
    } else {
        alert("Please enter all fields.");
    }
});

function showFeedbackForm(userType) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('feedback-section').style.display = 'block';

    if (userType === 'teacher') {
        document.getElementById('community-number').style.display = 'block';
    } else if (userType === 'parent') {
        document.getElementById('community-number').style.display = 'block';
        document.getElementById('community-number').placeholder = "Enter EMIS Number";
    }
}
