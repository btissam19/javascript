let cardTitle="Elzero",cardDescription= "Elzero Web School",cardDate="25/10";
let content=`
 <div class="parent">
 <h3>${cardTitle}</h3>
 <p>${cardDescription}</p>
 <span>${cardDate}</span>
 </div>
`;
let contentRepeatet= content.repeat(4);
document.write(contentRepeatet);