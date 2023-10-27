        
        const todos=document.getElementById('todos');
        const inp=document.getElementById('input');
        const form=document.getElementById("form");
        const rem=document.getElementsByClassName("remBtn");
        
        
        
        function addBtn() {
            if (inp.value=='') {
                alert('Enter Text')
            } 
            else{
                 let li=document.createElement('li');
                li.innerHTML=inp.value;
            form.appendChild(li);
            let cross= document.createAttribute('button',"Remove");
            form.appendChild(cross);
            
            }
            
        }
        function done(inp) {
        inp.classList.add('completed');  
        }
        
        
        
    
        





