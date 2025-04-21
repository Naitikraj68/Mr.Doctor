(function(){
  emailjs.init("YOUR_USER_ID"); // EmailJS user ID
})();

document.getElementById("appointment-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    user_name: this.user_name.value,
    user_phone: this.user_phone.value,
    message: this.message.value
  }).then(function(response) {
    document.getElementById("form-msg").innerText = "धन्यवाद! आपका अपॉइंटमेंट सबमिट हो गया है।";
  }, function(error) {
    document.getElementById("form-msg").innerText = "त्रुटि! कृपया पुनः प्रयास करें।";
  });
});
