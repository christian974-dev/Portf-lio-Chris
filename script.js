function showSection(sectionId) {
  // 1. Esconde todas as seções removendo a classe 'active'
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // 2. Mostra apenas a seção selecionada adicionando 'active'
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}