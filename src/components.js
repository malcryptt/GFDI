/**
 * Shared header + footer components injected into every page.
 * Usage: import { renderHeader, renderFooter } from './components.js';
 *        renderHeader('about');  // pass current page key to highlight nav
 *        renderFooter();
 */

const LOGO_SVG = `
<svg viewBox="0 0 100 100" class="logo-svg" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="none" class="logo-ring" stroke-width="2"/>
  <path d="M22 72 Q36 67 50 72 Q64 67 78 72 L78 76 Q64 71 50 76 Q36 71 22 76 Z" class="logo-book"/>
  <path d="M50 74 v-3" class="logo-accent" stroke-width="1.5"/>
  <circle cx="50" cy="28" r="4" class="logo-fig"/>
  <circle cx="50" cy="40" r="3.5" class="logo-fig"/>
  <circle cx="50" cy="50" r="3" class="logo-fig"/>
  <circle cx="50" cy="58" r="2.5" class="logo-fig"/>
  <circle cx="43" cy="33" r="3" class="logo-fig"/>
  <circle cx="36" cy="38" r="2" class="logo-fig"/>
  <circle cx="57" cy="33" r="3" class="logo-fig"/>
  <circle cx="64" cy="38" r="2" class="logo-fig"/>
  <circle cx="30" cy="45" r="3" class="logo-fig"/>
  <circle cx="30" cy="55" r="2" class="logo-fig"/>
  <circle cx="30" cy="62" r="1.5" class="logo-fig"/>
  <circle cx="70" cy="45" r="3" class="logo-fig"/>
  <circle cx="70" cy="55" r="2" class="logo-fig"/>
  <circle cx="70" cy="62" r="1.5" class="logo-fig"/>
</svg>`;

const WA_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const NAV_ITEMS = [
    { key: 'about', label: 'About', href: '/about.html' },
    { key: 'issues', label: 'The Issues', href: '/issues.html' },
    { key: 'volunteer', label: 'Volunteer', href: '/volunteer.html' },
    { key: 'partners', label: 'Partners', href: '/partners.html' },
    { key: 'resources', label: 'Resources', href: '/resources.html' },
    { key: 'contact', label: 'Contact', href: '/contact.html' },
];

export function renderHeader(active = '') {
    const el = document.getElementById('site-header');
    if (!el) return;

    const navLinks = NAV_ITEMS.map(item =>
        `<a href="${item.href}" class="${item.key === active ? 'nav-active' : ''}">${item.label}</a>`
    ).join('');

    el.innerHTML = `
    <div class="container header-inner">
        <a href="/index.html" class="brand">
            ${LOGO_SVG}
            <div class="brand-text"><span class="brand-name">GFDI</span></div>
        </a>
        <nav class="nav-links">
            ${navLinks}
        </nav>
        <a href="/report.html" class="btn btn-report-nav">Report a Case</a>
        <button class="nav-hamburger" aria-label="Open menu" id="nav-toggle">
            <span></span><span></span><span></span>
        </button>
    </div>
    <div class="nav-mobile-drawer" id="nav-drawer">
        ${NAV_ITEMS.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}
        <a href="/report.html" class="btn btn-report-nav" style="margin-top:1rem;text-align:center;">Report a Case</a>
    </div>`;

    // Mobile hamburger toggle
    const toggle = document.getElementById('nav-toggle');
    const drawer = document.getElementById('nav-drawer');
    if (toggle && drawer) {
        toggle.addEventListener('click', () => {
            drawer.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }
}

export function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML = `
    <div class="container footer-inner reveal">
        <div class="footer-brand">
            <div class="footer-logo">
                <svg viewBox="0 0 100 100" class="logo-svg footer-svg" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="var(--c-cream)" stroke-width="2"/>
                    <path d="M22 72 Q36 67 50 72 Q64 67 78 72 L78 76 Q64 71 50 76 Q36 71 22 76 Z" fill="var(--c-cream)"/>
                    <path d="M50 74 v-3" stroke="var(--c-green)" stroke-width="1.5"/>
                    <circle cx="50" cy="28" r="4" fill="var(--c-cream)"/><circle cx="50" cy="40" r="3.5" fill="var(--c-cream)"/>
                    <circle cx="50" cy="50" r="3" fill="var(--c-cream)"/><circle cx="50" cy="58" r="2.5" fill="var(--c-cream)"/>
                    <circle cx="43" cy="33" r="3" fill="var(--c-cream)"/><circle cx="36" cy="38" r="2" fill="var(--c-cream)"/>
                    <circle cx="57" cy="33" r="3" fill="var(--c-cream)"/><circle cx="64" cy="38" r="2" fill="var(--c-cream)"/>
                    <circle cx="30" cy="45" r="3" fill="var(--c-cream)"/><circle cx="30" cy="55" r="2" fill="var(--c-cream)"/>
                    <circle cx="30" cy="62" r="1.5" fill="var(--c-cream)"/>
                    <circle cx="70" cy="45" r="3" fill="var(--c-cream)"/><circle cx="70" cy="55" r="2" fill="var(--c-cream)"/>
                    <circle cx="70" cy="62" r="1.5" fill="var(--c-cream)"/>
                </svg>
                <span class="brand-name">GFDI</span>
            </div>
            <p class="mission-small">Campaign against female genital mutilation, child labour and human trafficking.</p>
        </div>

        <div class="footer-links">
            <h4>Navigate</h4>
            <ul>
                ${NAV_ITEMS.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('')}
            </ul>
        </div>

        <div class="footer-links">
            <h4>Contact Details</h4>
            <ul>
                <li><a href="mailto:info@gfdinitiative.org">info@gfdinitiative.org</a></li>
                <li><a href="tel:+2348055555336">080 555 55336</a></li>
                <li style="margin-top:.75rem">
                    <a href="https://wa.me/2348055555336" target="_blank" rel="noopener"
                       style="display:inline-flex;align-items:center;gap:.4rem;">
                        ${WA_ICON} WhatsApp Us
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="container footer-bottom">
        <p>&copy; 2026 Gender Frontier Development Initiatives. All rights reserved.</p>
    </div>`;
}

export function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
