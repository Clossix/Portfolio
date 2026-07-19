// Die Liste der Wörter, die durchrotieren sollen
  const words = ['Web', 'UI', 'UX', '3D'];
  let currentIndex = 0;

  // Das HTML-Element greifen
  const rotatingElement = document.getElementById('rotating-text');

  if (rotatingElement) {
    // 1. Das erste Wort direkt sichtbar machen, sobald die Seite lädt
    rotatingElement.classList.add('is-visible');

    // 2. Das Intervall für den Wechsel starten (alle 2.5 Sekunden)
    setInterval(() => {
      // Schritt A: Aktuelles Wort ausblenden (CSS-Transition startet)
      rotatingElement.classList.remove('is-visible');

      // Schritt B: Warten, bis das Ausblenden fertig ist (300ms, passend zu deinem CSS)
      setTimeout(() => {
        // Nächstes Wort berechnen
        currentIndex = (currentIndex + 1) % words.length;
        
        // Text austauschen
        rotatingElement.textContent = words[currentIndex];

        // Schritt C: Neues Wort einblenden (CSS-Transition startet erneut)
        rotatingElement.classList.add('is-visible');
      }, 300); // Diese 300ms matchen exakt deine "transition: 0.3s" aus dem CSS
      
    }, 2500); // Alle 2500ms (2.5 Sekunden) wechselt das Wort
  }