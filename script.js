document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`Cảm ơn, ${name}! Chúng tôi sẽ sớm liên hệ với bạn tại email ${email}.`);
});
