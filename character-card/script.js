const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    
    attacked() {
      if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
      } else {
        alert('Character Died');
      }
    },
  
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
  };
  
  function updateUI() {
    document.querySelector('.image').src = character.image;
    document.querySelector('.name').textContent = character.name;
    document.getElementById('class').textContent = character.class;
    document.getElementById('level').textContent = character.level;
    document.getElementById('health').textContent = character.health;
  }
  
  document.getElementById('attacked').addEventListener('click', () => {
    const message = character.attacked();
    document.getElementById('log').textContent = message;
    updateUI();
  });
  
  document.getElementById('levelup').addEventListener('click', () => {
    const message = character.levelUp();
    document.getElementById('log').textContent = message;
    updateUI();
  });
  

  updateUI();
  