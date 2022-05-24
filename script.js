(function () {
  const ex1 = document.getElementById('ex1_button')
  const ex1c = document.getElementById('ex1_content')
  const ex2 = document.getElementById('ex2_button')
  const ex2c = document.getElementById('ex2_content')

  ex1.addEventListener("click",function(){
    var data = "";
    for(var i=0;i<10;i++)
      {
        if(i!=0)
          data+=",";
        data += i.toString();
      }
    ex1c.innerHTML=data;
  })
 
    var nr = document.getElementById("ex2_text");
    const log = document.getElementById("ex2_content");
    const log1 = document.getElementById("ex3_content");
    const log2 = document.getElementById("ex4_content");
    const log3 = document.getElementById("ex2_content");
    nr.addEventListener("input",function(){
      if(nr.value.match(/^[0-9]+$/)&&nr.value.length==9)
        log.textContent="Numer telefonu jest poprawny";
      if(nr.value.match(/[\w]/))
        log1.textContent="Numer nie może zawierać znaków specjalnych";
      if(nr.value.length!=9)
        log2.textContent="Dlugość numeru musi być równa 9";
      else
        log.textContent=" ";
      if(nr.value.match(/a-zA-Z/))
        log3.textContent="Numer nie moze zawierac liter";
      else
        log.textContent=" ";
    
      
      
    
  })

   
      
  
  
  
    
})();