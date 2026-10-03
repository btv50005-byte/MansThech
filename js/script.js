/**
 * ==========================================================================
 * PORTFOLIO PERSONNEL & MANS ÉLECTRONIQUE
 * Mouhamadou Mansour Seck - Saint-Louis, Sénégal
 * Fichier JavaScript interactif moderne (Vanilla JS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Données complètes des 8 projets pour la modale interactive ---
  const projectsData = {
    1: {
      title: 'Portfolio Web Personnel',
      category: 'Développement Web',
      image: 'images/projets/projet1-portfolio.svg',
      description: 'Conception et développement complet de mon portfolio personnel sous forme de vitrine professionnelle. Réalisé avec les technologies standards du web (HTML5 sémantique, CSS3 moderne avec flexbox, grid, variables et animations, et JavaScript vanilla pour toutes les interactions dynamiques). Ce site met en valeur mon identité, mes compétences et mon entreprise MANS ÉLECTRONIQUE.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Glassmorphism', 'SEO'],
      details: [
        'Architecture mobile-first entièrement fluide pour smartphones, tablettes et ordinateurs.',
        'Système de navigation avec menu mobile réactif et défilement doux.',
        'Intégration directe de la messagerie WhatsApp pour prise de contact rapide.',
        'Code propre, documenté et prêt pour hébergement sur GitHub Pages.'
      ],
      liveLink: '#',
      githubLink: '#'
    },
    2: {
      title: 'Site MANS ÉLECTRONIQUE',
      category: 'Développement Web & Entreprise',
      image: 'images/projets/projet2-mans-electronique.svg',
      description: "Conception d'une plateforme web professionnelle dédiée à l'activité de MANS ÉLECTRONIQUE. Le site a pour objectif de présenter l'ensemble de nos services techniques (réparations, informatique, consoles, réseaux, vidéosurveillance, climatisation), de diffuser notre slogan « Votre partenaire de confiance » et de permettre aux clients de Saint-Louis et du Sénégal de demander des devis d'intervention en ligne.",
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Identité Visuelle', 'Catalogue Services', 'Conversion Client'],
      details: [
        'Présentation exhaustive des 11 services clés de MANS ÉLECTRONIQUE.',
        'Formulaires de contact et devis adaptés aux besoins locaux.',
        'Optimisation des performances de chargement sur connexions mobiles 3G/4G.',
        'Mise en valeur de la localisation et des coordonnées directes à Saint-Louis.'
      ],
      liveLink: '#',
      githubLink: '#'
    },
    3: {
      title: 'Mise en ligne avec GitHub Pages',
      category: 'Déploiement & Git',
      image: 'images/projets/projet3-github-pages.svg',
      description: 'Projet pratique de gestion de version et de déploiement continu à l\'aide de Git et GitHub Pages. Ce projet illustre la capacité à versionner un projet web, gérer des branches, commiter des modifications régulières et déployer instantanément un site statique accessible mondialement sous protocole sécurisé HTTPS.',
      tags: ['Git', 'GitHub', 'GitHub Pages', 'CI/CD', 'HTTPS', 'Version Control'],
      details: [
        'Initialisation de dépôts Git locaux et synchronisation avec GitHub distant.',
        'Gestion des commits structurés et respect des bonnes pratiques de nommage.',
        'Configuration du domaine et du déploiement automatique via la branche main.',
        'Vérification des chemins d\'accès relatifs pour une navigation sans erreur 404.'
      ],
      liveLink: 'https://github.com',
      githubLink: 'https://github.com'
    },
    4: {
      title: 'WordPress + Hébergement InfinityFree',
      category: 'CMS & Hébergement Web',
      image: 'images/projets/projet4-wordpress-infinityfree.svg',
      description: 'Projet d\'apprentissage et de mise en pratique consistant à configurer, installer et héberger un site sous le CMS WordPress sur la plateforme d\'hébergement en ligne InfinityFree. Ce projet a permis de maîtriser l\'environnement LAMP/WAMP, la gestion d\'une base de données MySQL via phpMyAdmin et la gestion des protocoles FTP.',
      tags: ['WordPress', 'InfinityFree', 'MySQL', 'phpMyAdmin', 'FTP', 'PHP', 'SSL'],
      details: [
        'Création et liaison d\'une base de données MySQL sur serveur distant.',
        'Installation guidée de WordPress et configuration des tables.',
        'Personnalisation de thèmes et intégration d\'extensions indispensables.',
        'Configuration du certificat SSL Let\'s Encrypt pour sécuriser les échanges.'
      ],
      liveLink: '#',
      githubLink: '#'
    },
    5: {
      title: 'Installation de Vidéosurveillance IP & PoE',
      category: 'Sécurité & Réseaux',
      image: 'images/projets/projet5-videosurveillance.svg',
      description: 'Déploiement complet d\'un système de vidéosurveillance moderne haute définition pour locaux professionnels et résidences. Installation de caméras dômes et tubes IP, raccordement via switch PoE (Power over Ethernet), configuration de l\'enregistreur NVR, paramétrage de l\'enregistrement continu et vision nocturne infrarouge.',
      tags: ['Caméras IP', 'NVR', 'PoE', 'Câblage Ethernet Cat6', 'Vision Nocturne', 'Accès Smartphone'],
      details: [
        'Étude des angles de vue, de la luminosité et suppression des zones mortes.',
        'Tirage de câbles réseau blindés FTP Cat6 et sertissage de fiches RJ45 étanches.',
        'Configuration des adresses IP fixes, ports et flux vidéo H.265.',
        'Mise en place de l\'application mobile pour visionnage en direct et relecture à distance.'
      ],
      liveLink: '#contact',
      githubLink: '#'
    },
    6: {
      title: 'Architecture Réseaux & Diagnostic',
      category: 'Réseaux Informatiques',
      image: 'images/projets/projet6-reseaux.svg',
      description: 'Travaux pratiques et réalisations sur banc d\'essai et en environnement réel : déploiement d\'architectures réseaux LAN/WAN, paramétrage de routeurs et switchs administrables, adressage IP, serveurs DHCP, serveurs DNS, câblage RJ45 certifié, tests de continuité au testeur de câble et résolution des pannes de connectivité.',
      tags: ['Routeurs', 'Switches Gigabit', 'Adresses IP', 'DHCP', 'DNS', 'LAN / WAN', 'Câblage RJ45'],
      details: [
        'Conception de plans d\'adressage IPv4 et segmentation de réseaux locaux.',
        'Brassage et repérage de baies de brassage professionnelles.',
        'Diagnostic de latence, perte de paquets (Ping, Traceroute, Wireshark).',
        'Sécurisation des accès WiFi par protocoles WPA2/WPA3.'
      ],
      liveLink: '#contact',
      githubLink: '#'
    },
    7: {
      title: 'Réparation & Maintenance Consoles PlayStation',
      category: 'Électronique & Consoles',
      image: 'images/projets/projet7-consoles.svg',
      description: 'Atelier de diagnostic et remise en état de consoles de jeux vidéo PlayStation (PS4, PS4 Pro, PS5) et appareils électroniques divers. Résolution des problèmes fréquents : surchauffe et ventilation bruyante, remplacement de pâte thermique haut de gamme, ports HDMI endommagés (micro-soudure), blocs d\'alimentation défaillants et pannes logicielles.',
      tags: ['PlayStation PS4/PS5', 'Micro-soudure', 'Port HDMI', 'Pâte Thermique', 'Diagnostic Hardware', 'Alimentation'],
      details: [
        'Démontage minutieux et nettoyage intégral des radiateurs et ventilateurs.',
        'Remplacement de composants CMS et connecteurs HDMI à l\'air chaud.',
        'Remplacement et optimisation des disques durs vers des SSD ultra-rapides.',
        'Tests thermiques poussés en conditions réelles de jeu avant restitution.'
      ],
      liveLink: '#contact',
      githubLink: '#'
    },
    8: {
      title: 'Installation & Paramétrage Starlink',
      category: 'Télécoms & Satellite',
      image: 'images/projets/projet8-starlink.svg',
      description: 'Pose, fixation et mise en service complète de kits de connectivité satellite Starlink et antennes paraboliques de réception. Recherche de positionnement sans obstacle céleste à l\'aide de l\'application officielle, fixation sécurisée sur toiture ou mât rigide, passage de câbles étanche et distribution du signal WiFi haut débit.',
      tags: ['Starlink Satellite', 'Antenne Parabole', 'Pointage Azimut', 'Fixation Toiture', 'WiFi Mesh', 'Très Haut Débit'],
      details: [
        'Analyse de champ libre pour garantir 0% d\'obstruction satellite.',
        'Fixation mécanique ultra-résistante aux vents et intempéries de la région.',
        'Câblage soigné avec passe-fils étanches et protection contre les rayons UV.',
        'Configuration du réseau WiFi, test de débit (200+ Mbps) et latence minimale.'
      ],
      liveLink: '#contact',
      githubLink: '#'
    }
  };

  // --- 1. Navigation Header & Scroll Behavior ---
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting on scroll
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Scroll to top button visibility
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  // --- 2. Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Scroll to Top Button Action ---
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 4. Filtres de la section "Mes Projets" ---
  const projectFilterBtns = document.querySelectorAll('.projects-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 5. Filtres de la section "Mes Compétences" ---
  const skillFilterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-skill-filter');

      skillCards.forEach(card => {
        const cardGroup = card.getAttribute('data-skill-group');
        if (category === 'all' || cardGroup.includes(category)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 150);
        }
      });
    });
  });

  // --- 6. Modal de détail des Projets ---
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const viewProjectBtns = document.querySelectorAll('.btn-view-project');

  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTechList = document.getElementById('modalTechList');
  const modalDetailsList = document.getElementById('modalDetailsList');
  const modalWaAction = document.getElementById('modalWaAction');

  if (projectModal && modalClose) {
    viewProjectBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-id');
        const data = projectsData[projectId];

        if (data) {
          modalImg.src = data.image;
          modalImg.alt = data.title;
          modalCategory.textContent = data.category;
          modalTitle.textContent = data.title;
          modalDesc.textContent = data.description;

          // Remplir les badges technologiques
          modalTechList.innerHTML = '';
          data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'project-tech-tag';
            span.textContent = tag;
            modalTechList.appendChild(span);
          });

          // Remplir les points clés
          modalDetailsList.innerHTML = '';
          data.details.forEach(item => {
            const li = document.createElement('li');
            li.style.marginBottom = '0.5rem';
            li.style.color = 'var(--text-secondary)';
            li.style.fontSize = '0.9rem';
            li.innerHTML = `✓ ${item}`;
            modalDetailsList.appendChild(li);
          });

          // Mettre à jour le bouton WhatsApp du modal
          if (modalWaAction) {
            const encodedMsg = encodeURIComponent(`Bonjour Mouhamadou, j'ai vu votre projet "${data.title}" sur votre portfolio et je souhaite obtenir plus d'informations.`);
            modalWaAction.href = `https://wa.me/221772323373?text=${encodedMsg}`;
          }

          projectModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
      }
    });
  }



  // --- 9. Formulaire de Contact avec validation et raccourci WhatsApp ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nom = document.getElementById('nom').value.trim();
      const telephone = document.getElementById('telephone').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('serviceSelect').value;
      const message = document.getElementById('message').value.trim();

      if (!nom || !telephone || !message) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Veuillez renseigner au minimum votre nom, votre numéro de téléphone et votre message.';
        }
        return;
      }

      // Simulation réussie de prise de contact
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `<strong>Merci ${nom} !</strong> Votre message a bien été préparé. Vous pouvez également cliquer sur « Envoyer via WhatsApp » ci-dessous pour démarrer l'échange immédiatement avec Mouhamadou Mansour Seck.`;
      }

      contactForm.reset();
    });

    // Envoi direct via WhatsApp
    if (btnSendWhatsApp) {
      btnSendWhatsApp.addEventListener('click', () => {
        const nom = document.getElementById('nom').value.trim();
        const telephone = document.getElementById('telephone').value.trim();
        const service = document.getElementById('serviceSelect').value;
        const message = document.getElementById('message').value.trim();

        let text = `Bonjour Mouhamadou Mansour Seck,\nJe vous contacte depuis votre portfolio MANS ÉLECTRONIQUE.`;
        if (nom) text += `\n- Nom : ${nom}`;
        if (telephone) text += `\n- Téléphone : ${telephone}`;
        if (service) text += `\n- Service souhaité : ${service}`;
        if (message) text += `\n- Message : ${message}`;

        const waUrl = `https://wa.me/221772323373?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
      });
    }
  }
});
