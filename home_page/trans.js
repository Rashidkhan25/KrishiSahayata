document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        fetch('translations.json')
            .then(response => response.json())
            .then(translations => {
                const translation = translations[selectedLanguage];
                if (translation) {
                    document.getElementById('page-title').textContent = translation.title;
                    document.getElementById('hero-heading').textContent = translation['hero-heading'];
                    document.getElementById('hero-description').textContent = translation['hero-description'];
                    document.getElementById('btn-rent').textContent = translation['btn-rent'];
                    document.getElementById('btn-share').textContent = translation['btn-share'];
                    document.getElementById('mission-heading').textContent = translation['mission-heading'];
                    document.getElementById('mission-description').textContent = translation['mission-description'];
                    document.getElementById('how-it-works-heading').textContent = translation['how-it-works-heading'];
                    document.getElementById('step1-heading').textContent = translation['step1-heading'];
                    document.getElementById('step1-description').textContent = translation['step1-description'];
                    document.getElementById('step2-heading').textContent = translation['step2-heading'];
                    document.getElementById('step2-description').textContent = translation['step2-description'];
                    document.getElementById('step3-heading').textContent = translation['step3-heading'];
                    document.getElementById('step3-description').textContent = translation['step3-description'];
                    document.getElementById('testimonials-heading').textContent = translation['testimonials-heading'];
                    document.getElementById('testimonial1').textContent = translation['testimonial1'];
                    document.getElementById('testimonial1-author').textContent = translation['testimonial1-author'];
                    document.getElementById('testimonial2').textContent = translation['testimonial2'];
                    document.getElementById('testimonial2-author').textContent = translation['testimonial2-author'];
                    document.getElementById('feedback-heading').textContent = translation['feedback-heading'];
                    document.getElementById('feedback-description').textContent = translation['feedback-description'];
                    document.getElementById('feedback-name-label').textContent = translation['feedback-name'];
                    document.getElementById('feedback-message-label').textContent = translation['feedback-message'];
                    document.getElementById('feedback-submit').textContent = translation['feedback-submit'];
                    document.getElementById('footer-rights').innerHTML = translation['footer-rights'];
                    document.getElementById('footer-privacy').textContent = translation['footer-privacy'];
                    document.getElementById('footer-terms').textContent = translation['footer-terms'];
                    document.getElementById('footer-support').textContent = translation['footer-support'];
                }
            });
    });
});
