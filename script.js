// create a basic website, styled with CSS.
// Include a title, and one button that says
// "Download Resource Zip". When the button is
// clicked, the user should be prompted for a password (iCode002).
//
// If the password is correct, the user should be redirected to an
// AWS S3 link that will start the download.
//
// If the password is incorrect, the user should be alerted that
// the password is incorrect.
//
// The AWS link hasn't been created yet, but it will be similar to:
// https://icode-files.s3.amazonaws.com/resources2023.zip
//
//The HTML <body> Code is:
// <div class="container">
//     <h1>Download Resource Zip</h1>
//     <button id="download">Download Resource Zip</button>
// </div>
// <script src="js/script.js"></script>

const button = document.getElementById('download');
button.addEventListener('click', () => {
    const password = prompt('Enter the password');
    if (password === 'iCode002') {
        window.location.href = 'https://icode-files.s3.amazonaws.com/resources2023.zip';
    } else {
        alert('Password is incorrect');
    }
});




