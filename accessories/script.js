function downloadZip() {
    let password = prompt("Enter Password");
    if (password === "iCode002") {
        window.location.href = "https://icode-files.s3.amazonaws.com/resources2023.zip";
    } else {
        alert("Incorrect Password");
    }
}

function viewPasswords() {
    let password = prompt("Enter Password");
    if (password === "iCode002") {
        window.location.href = "https://icode-files.s3.amazonaws.com/password_sheet.jpg";
    } else {
        alert("Incorrect Password");
    }
}

