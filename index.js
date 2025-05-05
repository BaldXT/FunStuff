
function rolldice(){
 
    const numofdice = document.getElementById("inputnum").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    
    const values = [];
    const images = [];

    for(let i=0; i<numofdice; i++){
        
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src ="${value}.jpg">`);
        
        diceresult.textContent = `(آیندت: (هر عکس بیشتر اومد همونی `;
        diceimages.innerHTML = images.join("");
    
    }

}


















