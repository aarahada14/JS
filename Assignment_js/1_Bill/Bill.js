


document.getElementById("bill").onclick = function(){
    console.log("click")
    
    let name =document.getElementById("name").value
    let no =document.getElementById("no").value
    let biln =document.getElementById("biln").value 
    
    let choco = document.getElementById("choco").value;
    let Noodles = document.getElementById("Noodles").value;
    let silk = document.getElementById("silk").value;
    let atta = document.getElementById("atta").value;
    let pasta = document.getElementById("pasta").value;
    let daal = document.getElementById("daal").value;
    let soap = document.getElementById("soap").value;
    let shampoo = document.getElementById("shampoo").value;
    let face = document.getElementById("face").value;
 
    
    document.getElementById("biln1").innerHTML = biln
    document.getElementById("name1").innerHTML = name
    document.getElementById("no1").innerHTML = no
    
    
    document.getElementById("choco1").innerHTML = choco
    document.getElementById("Noodles1").innerHTML = Noodles
    document.getElementById("silk1").innerHTML = silk
    document.getElementById("atta1").innerHTML = atta
    document.getElementById("pasta1").innerHTML = pasta
    document.getElementById("daal1").innerHTML = daal
    document.getElementById("soap1").innerHTML = soap 
    document.getElementById("shampoo1").innerHTML = shampoo
    document.getElementById("face1").innerHTML = face
    
    document.getElementById("choco2").innerHTML = choco * 50
    document.getElementById("Noodles2").innerHTML = Noodles * 30
    document.getElementById("silk2").innerHTML = silk * 150
    document.getElementById("atta2").innerHTML = atta * 40
    document.getElementById("pasta2").innerHTML = pasta * 20
    document.getElementById("daal2").innerHTML = daal * 60
    document.getElementById("soap2").innerHTML =  soap * 30
    document.getElementById("shampoo2").innerHTML = shampoo * 100
    document.getElementById("face2").innerHTML = face * 80
 
    
    document.getElementById("total").innerHTML = choco*50 + Noodles*30 + silk*150 + atta*40 +  daal *60 +  shop *30 + pasta*20 + shampoo*100 + face*80;
    
    }
    