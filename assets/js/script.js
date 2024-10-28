const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rafasukses07@gmail.com",
        Password: "B6C3C2190944D8338023433D4D63937C74AF",
        To: 'rafasukses07@gmail.com',
        From: "rafasukses07@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});