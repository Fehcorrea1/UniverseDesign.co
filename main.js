document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initReveal();
    initSmoothScroll();
});

// Cursor Follower
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, .work-item, .expertise-card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('active'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// Work Image Reveal
function initReveal() {
    const revealImg = document.getElementById('reveal-img');
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const imgPath = item.getAttribute('data-img');
            if (imgPath) {
                revealImg.style.backgroundImage = `url('${imgPath}')`;
                revealImg.style.opacity = '1';
                revealImg.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
            }
        });

        item.addEventListener('mouseleave', () => {
            revealImg.style.opacity = '0';
            revealImg.style.transform = 'translate(-50%, -50%) scale(0) rotate(-5deg)';
        });

        // Optional: Move image with cursor slightly (Parallax)
        item.addEventListener('mousemove', (e) => {
            // Can add complex math here for magnetic effect if needed
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
