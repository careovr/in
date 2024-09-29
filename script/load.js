  document.addEventListener('DOMContentLoaded', function() {
    const cardSliders = document.querySelectorAll('.card-slider-inner');
    
    cardSliders.forEach(slider => {
        const cards = Array.from(slider.children);
        
        // Shuffle the cards
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        // Reappend the cards in the new order
        cards.forEach(card => slider.appendChild(card));
    });
});
