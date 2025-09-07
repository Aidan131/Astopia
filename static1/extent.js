const element = document.getElementById('myElement');


function toggleCard(card) {
            const allCards = document.querySelectorAll('.card');
            const wasActive = card.classList.contains('active');
            
            
            allCards.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });
            
            if (!wasActive) {
                card.classList.add('active');
                card.style.display = 'block';
                card.style.width = '77vw';
            } else {
                allCards.forEach(c => {
                    c.style.display = 'block';
                    c.style.width = ''; 
                });
            }
        }
