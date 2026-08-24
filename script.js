
function searchProducts(){
 let q=document.getElementById('search').value.toLowerCase();
 document.querySelectorAll('.card').forEach(c=>{
 c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none';
});
}
function buy(name){alert("Demo checkout for "+name+"\nNo real payment.");}
