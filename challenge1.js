
// return list of children on santas list 

function findChildren(santasList, children) {
    
    let santasList = ["Tom","Errol","Sam","Peter","Jennifer"];
    let children = ["Errol", "Peter", "Jennifer"];

    for (var i=0; i<santasList.length; i++){
        if(santasList === santasList[i]. santasList) {
            current = santasList[i];   
        }else {
            santasList.push(santasList[i].santasList);
        }
    }

    if (current ===null) {
        return children;
    }
   
    for (var i=0; <santasList.length; i++) {
        if(current.list.indexOf(santasList[i]) == -1) {
            result.push(santasList[i]);
        }
    }
  }