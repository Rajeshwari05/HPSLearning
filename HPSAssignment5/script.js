function chechTogling(e){
    console.log(e.target.value);

    if (e.target.value  == 'on') {
        if(e.target.id == 'minor'){
            document.getElementById('sever').checked = false;
            document.getElementById('major').checked = false;   
        }else if(e.target.id == 'major'){
            document.getElementById('minor').checked = false
            document.getElementById('sever').checked = false   
        }else{
            document.getElementById('minor').checked = false
            document.getElementById('major').checked = false  
        }
    }
}
