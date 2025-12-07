// Theme toggle functionality
const initTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = theme === 'dark';
        themeToggle.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
};

// Bitcoin address copy functionality
const initBTCCopy = () => {
    const btcAddress = document.getElementById('btc-address');
    if (!btcAddress) return;
    
    btcAddress.addEventListener('click', function(e) {
        e.preventDefault();
        const btcAddressText = '3KLy733p6vQDyaKdEY61iGdQPf9pYt9hPv';
        const copySuccess = document.createElement('div');
        copySuccess.className = 'copy-success';
        copySuccess.textContent = '地址已复制';
        this.appendChild(copySuccess);
        
        navigator.clipboard.writeText(btcAddressText).then(function() {
            copySuccess.classList.add('show');
            setTimeout(() => {
                copySuccess.classList.remove('show');
                setTimeout(() => copySuccess.remove(), 300);
            }, 1500);
        }).catch(function(err) {
            console.error('Copy failed:', err);
            copySuccess.textContent = '复制失败';
            copySuccess.classList.add('show');
            setTimeout(() => {
                copySuccess.classList.remove('show');
                setTimeout(() => copySuccess.remove(), 300);
            }, 1500);
        });
    });
};

// Starfield background animation
const initStarfield = () => {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const stars = [];
    const numStars = 200;
    const nebulas = [];
    const numNebulas = 3;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
            brightness: Math.random() * 0.3 + 0.7,
        });
    }
    
    // Create nebulas
    for (let i = 0; i < numNebulas; i++) {
        nebulas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 200 + 100,
            hue: Math.random() * 60 + 200,
            opacity: Math.random() * 0.2
        });
    }
    
    function drawStar(star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + star.brightness * 0.7})`;
        ctx.fill();
    }
    
    function drawNebula(nebula) {
        const gradient = ctx.createRadialGradient(
            nebula.x, nebula.y, 0,
            nebula.x, nebula.y, nebula.size
        );
        gradient.addColorStop(0, `hsla(${nebula.hue}, 100%, 50%, ${nebula.opacity})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(nebula.x - nebula.size, nebula.y - nebula.size,
                    nebula.size * 2, nebula.size * 2);
    }
    
    function updateStars() {
        stars.forEach(star => {
            star.y -= star.speed;
            if (star.y < -10) {
                star.y = canvas.height + 10;
                star.x = Math.random() * canvas.width;
            }
            star.brightness = Math.sin(Date.now() * 0.001 + star.speed * 10) * 0.3 + 0.7;
        });
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 15, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        nebulas.forEach(drawNebula);
        stars.forEach(drawStar);
        updateStars();
        
        requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    draw();
};

// Initialize Twikoo comment system
const initTwikoo = () => {
    if (typeof twikoo !== 'undefined') {
        twikoo.init({
            envId: '',
            el: '#tcomment'
        });
    }
};

// Smooth scrolling
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Initialize all features
const init = () => {
    initTheme();
    initBTCCopy();
    initStarfield();
    initTwikoo();
    initSmoothScroll();
};

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
