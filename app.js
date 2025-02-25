function openGmail() {
    let email = "atharvambulkar2003@gmail.com";
    let subject = "Service Inquiry";
    let body = "Hello, I would like to know more about your services.";

    let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, "_blank"); // Opens Gmail in a new tab
}