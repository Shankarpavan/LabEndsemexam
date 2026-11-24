const editBtn = document.getElementById('editBtn');
if (editBtn) {
  editBtn.addEventListener('click', () => alert('Profile editing feature clicked!'));
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    document.getElementById('response').textContent = `Thank you, ${name}! Message submitted.`;
    contactForm.reset();
  });
}
