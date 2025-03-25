document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on the header
            header.classList.toggle('active');
            
            // Get the content associated with this header
            const content = header.nextElementSibling;
            content.classList.toggle('active');
            
            // If content is active, set its max-height to its scroll height
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });

    // Add rotation effect to CTA button on hover
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.transform = 'rotate(0deg) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.transform = 'rotate(-2deg)';
        });
    }

    // Add subtle animation to jury and sponsor cards
    const cards = document.querySelectorAll('.jury-card, .sponsor-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseout', () => {
            // Reset to original rotation for jury cards
            if (card.classList.contains('jury-card')) {
                const isOdd = Array.from(card.parentNode.children).indexOf(card) % 2 === 1;
                card.style.transform = isOdd ? 'rotate(-1deg)' : 'rotate(1deg)';
            } else {
                card.style.transform = 'scale(1)';
            }
        });
    });
}); 