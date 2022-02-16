var date=new Date();
var d=`${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}`;
console.log("Welcome to Console Application");
let inputTodo = prompt ('What you want to do "add/delete/Show List/quit/abondon/abondonlist"');
let todo=[];
while (inputTodo!=='quit'){

    if( inputTodo.toLowerCase() ==='add'){
        let insertName=prompt('Add a todo ');
        let insertStatus=prompt('status "complete or incomplete"');
        todo.push({title: insertName , Status:insertStatus });
        console.log(`Addes item:${insertName} Status: ${insertStatus}`);
    
    }
    else if(inputTodo.toLowerCase()==='delete'){
        let idToDelete=prompt('Enter ID to delete (starting from 0)');
        todo.splice(idToDelete,1);
        console.log(`Item removed :${todo[idToDelete]}`);
    }
    else if(inputTodo.toLowerCase()==='list'){
         for(i=0;i<todo.length;i++){ 
            console.log(`Item :${todo[i].title} date : ${d}`)
         }
         console.log(`***********LIST END*********`);
    }
    else if(inputTodo.toLowerCase()==='abondon'){
        let idToAbondon=prompt("Enter ID to Abondon Element");
        let x=todo.splice(parseInt(idToAbondon),1);
        var abondonArr=[];
        console.log(`${x.title} abondoned from the list }`)
        abondonArr.push(x.title,x.Status);
    }
    else if(inputTodo.toLowerCase()==='abondonlist') {
        for(i=0;i<abondonArr.length;i++){ 
            console.log(abondonArr[i]);
        }
    }
    
    inputTodo= prompt('What you want to do /add/delete/Show List/quit');

}
console.log("Quited Application");
