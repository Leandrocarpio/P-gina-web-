// ===== NAV TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navList.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navList.classList.remove('open');
            });
        });
    }

    // ===== CARGAR PROYECTOS DE GITHUB =====
    const projectsList = document.getElementById('projects-list');
    if (projectsList) {
        loadGitHubProjects();
    }

    // ===== CONTACT FORM HANDLER =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== FUNCIÓN: CARGAR PROYECTOS GITHUB =====
function loadGitHubProjects() {
    const container = document.getElementById('projects-list');
    const user = 'leocarpiotombino';

    // Mostrar mensaje de carga
    container.innerHTML = '<div class="col-12 text-center"><p class="text-muted"><i class="bi bi-hourglass-split"></i> Cargando proyectos...</p></div>';

    fetch(`https://api.github.com/users/${user}/repos?per_page=8&sort=updated`)
        .then(res => {
            if (!res.ok) throw new Error('Error al conectar con GitHub');
            return res.json();
        })
        .then(repos => {
            if (!repos || repos.length === 0) {
                container.innerHTML = '<div class="col-12"><p class="text-muted text-center">No se encontraron repositorios públicos.</p></div>';
                return;
            }

            container.innerHTML = ''; // Limpiar

            repos.slice(0, 6).forEach(repo => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card project-card h-100';

                const body = document.createElement('div');
                body.className = 'card-body';

                // Título
                const titleH4 = document.createElement('h4');
                titleH4.className = 'card-title';
                const titleLink = document.createElement('a');
                titleLink.href = repo.html_url;
                titleLink.target = '_blank';
                titleLink.rel = 'noopener';
                titleLink.textContent = repo.name;
                titleH4.appendChild(titleLink);

                // Descripción
                const desc = document.createElement('p');
                desc.className = 'card-text';
                desc.textContent = repo.description || 'Sin descripción disponible.';

                // Metadata
                const meta = document.createElement('div');
                meta.className = 'project-meta';
                const metaParts = [];
                if (repo.stargazers_count && repo.stargazers_count > 0) {
                    metaParts.push(`⭐ ${repo.stargazers_count}`);
                }
                metaParts.push(`Actualizado: ${new Date(repo.updated_at).toLocaleDateString('es-AR')}`);
                meta.textContent = metaParts.join(' • ');

                body.appendChild(titleH4);
                body.appendChild(desc);
                body.appendChild(meta);
                card.appendChild(body);
                col.appendChild(card);
                container.appendChild(col);
            });
        })
        .catch(err => {
            console.error('Error cargando proyectos:', err);
            container.innerHTML = '<div class="col-12"><p class="text-danger text-center"><i class="bi bi-exclamation-triangle"></i> Error al cargar proyectos. Intenta más tarde.</p></div>';
        });
}

// ===== FUNCIÓN: MANEJAR FORMULARIO CONTACTO =====
function handleContactForm(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre')?.value || 'Visitante';
    const email = document.getElementById('email')?.value;
    const mensaje = document.getElementById('mensaje')?.value;
    const feedback = document.getElementById('contact-feedback');

    if (!email || !mensaje) {
        if (feedback) {
            feedback.innerHTML = '<div class="alert alert-danger"><i class="bi bi-exclamation-circle"></i> Por favor completa todos los campos.</div>';
        }
        return;
    }

    // Simular envío (en producción, enviarías a un servidor)
    if (feedback) {
        feedback.innerHTML = `<div class="alert alert-success"><i class="bi bi-check-circle"></i> ¡Gracias ${nombre.split(' ')[0]}! Tu mensaje fue enviado. Te responderé pronto.</div>`;
        e.target.reset();
        setTimeout(() => {
            feedback.innerHTML = '';
        }, 6000);
    }
}

// ===== FUNCIÓN: REDIRECT A WHATSAPP =====
function redirectWhatsApp(e) {
    if (e) e.preventDefault();
    const message = encodeURIComponent('Hola Leo, me interesa saber más sobre tus landings y me gustaría cotizar');
    window.open(`https://wa.me/542616123777?text=${message}`, '_blank');
}