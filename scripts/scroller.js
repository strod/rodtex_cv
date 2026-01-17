document.addEventListener('DOMContentLoaded', function () {
  const timelineContainerWork = document.getElementById('work-experience-container');
  const timelineContainerEducation = document.getElementById('education-container');
  const timelineContainerPortfolio = document.getElementById('portfolio-container');
  
  const timelineCardsWork = timelineContainerWork.querySelectorAll('.timeline > div');
  const timelineCardsEducation= timelineContainerEducation.querySelectorAll('.timeline > div');
  const timelineCardsPortfolio = timelineContainerPortfolio.querySelectorAll('.timeline > div');

  let currentIndex = 0;
  let cardWorkAux = 0;
  let cardEducationAux = 0;
  let cardPorfolioAux = 0;

  function showCardWork(index) {
    // Hide all cards first
    timelineCardsWork.forEach(card => card.style.display = 'none');

    // Calculate the correct index based on the number of cards
    const cardIndex = (index + timelineCardsWork.length) % timelineCardsWork.length;

    // Show the card with the calculated index
    timelineCardsWork[cardIndex].style.display = 'block';

    cardWorkAux = cardIndex;

    timelineContainerWork.style.height = timelineCardsWork[cardIndex].offsetHeight + 'px';
  }

  function showCardEducation(index) {
    // Hide all cards first
    timelineCardsEducation.forEach(card => card.style.display = 'none');

    // Calculate the correct index based on the number of cards
    const cardIndex = (index + timelineCardsEducation.length) % timelineCardsEducation.length;

    // Show the card with the calculated index
    timelineCardsEducation[cardIndex].style.display = 'block';

    currentIndex = cardIndex;


  }

  function showCardPortfolio(index) {
    // Hide all cards first
    timelineCardsPortfolio.forEach(card => card.style.display = 'none');

    // Calculate the correct index based on the number of cards
    const cardIndex = (index + timelineCardsPortfolio.length) % timelineCardsPortfolio.length;

    // Show the card with the calculated index
    timelineCardsPortfolio[cardIndex].style.display = 'block';

    currentIndex = cardIndex;
  }

  function handleScroll(event) {
    const delta = -Math.sign(event.deltaY); // -1 for scrolling up, 1 for scrolling down

    // Show the previous or next card based on the scroll direction
    showCard(currentIndex - delta);
  }

  // Attach the scroll event handler to the timeline container
  timelineContainerWork.addEventListener('wheel', handleScroll);
  timelineContainerEducation.addEventListener('wheel', handleScroll);
  timelineContainerPortfolio.addEventListener('wheel', handleScroll);
});
