function meditation(){
     
    var meditations = [
        "my breath",
        "my pulse",
        "my voice",
        "my brain",
        "my eyes",
        "my legs",
        "touch",
        "my friends",
        "my sister",
        "my mother",
        "my brother",
        "my father",
        "my ancestors",
        "my history",
        "my teachers",
        "my family",
        "my home",
        "the air",
        "the light",
        "the universe",
        "existence",
        "mind",
        "movement",
        "my animal friends",
        "art",
        "language",
        "the vast",
        "the infinite",
        "my cosmic insignificance".
        "culture",
        "the beautiful",
        "science"
        
    ];
      
    var rn = Math.floor(Math.random()*meditations.length);
    document.getElementById('meditation').innerHTML = meditations[rn];

} 
