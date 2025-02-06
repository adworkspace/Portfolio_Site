
function showContent(x) {
    let doc1=document.getElementById('about')
    let doc2=document.getElementById('skills')
    let doc3=document.getElementById('projects')
    // let doc4=document.getElementById('resume')
    doc1.style.display="none";
    doc2.style.display="none";
    doc3.style.display="none";
    // doc4.style.display="none";
    if (x==1) { 
        doc1.style.display="block";  
    }
    else if (x==2) {
        doc2.style.display="block";
    } 
    else if(x==3) {
        doc3.style.display="block";
    }
    // else if(x==4){
    //     doc4.style.display="block";
    // }
    
    
}