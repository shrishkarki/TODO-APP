
//for adding new todo
//for adding new todo

const getAdd=document.querySelector('.add');

const list=document.querySelector('.todos');
const generateTemplate=todo=>{

    const html=`  <li class="list-group-item list d-flex justify-content-between align-items-center align-items-center">
    <span  style="color: thistle; font-size: larger; ">${todo}</span> <i class="fas fa-trash-alt delete"></i> </li>`;
    list.innerHTML+=html;
};



getAdd.addEventListener('submit',e=>{

    e.preventDefault();

    //here add is the value of name attributes in html
    const todo=getAdd.add.value.trim();
    
    //here trim helps to remove the spaces when we add new todo containg spaces in forward & backward 

    // console.log(todo);



    //this shows if todo.length is zero then condition becomes false & we cannot use if clause
    if(todo.length){ 
        generateTemplate(todo);

        getAdd.reset();  //this helps to reset the following enter text inside a new todo
    }
   
});
//end of code to add new todo




//for deleting  todo
//for deleting todo



// const delTodo=document.querySelectorAll('i');
// const getUl=document.querySelector('ul');


// delTodo.forEach(e => {
//     e.addEventListener('click',del=>{

       
//           if(del.target.tagName ==='I')
//             del.target.remove();
            
//     });

// });



// const getLi=document.querySelector('Li');
// getUl.addEventListener('click',e=>{
    
//     getLi.remove();
    
    
//   });




//for deleting  todo
//for deleting todo
//for deleting  todo
//for deleting todo
//for deleting  todo
//for deleting todo
//for deleting  todo
//for deleting todo


const getUl=document.querySelector('ul');

getUl.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){

        e.target.parentElement.remove();

    }


});



//for searching todos
//for searching todos
//for searching todos
//for searching todos



// const input=document.querySelector('.search input');

// const lists=document.querySelectorAll('li');
// input.addEventListener('input',filter=>{
//     const getInput=input.value.toUpperCase();
//     lists.forEach(ele => {
 


//     const text=ele.innerHTML.toUpperCase();
//     const found =text.indexOf(getInput);

//     if(getInput=="")
//     {
//         ele.style.display="block";
        
//     }
//     else if(found== -1)
//     {
//         ele.style.display="none";
//     }
//     else{
//         ele.style.display="block";
//     }
// });

// });





//another ways 
//another ways 
//another ways 
//another ways 





// const inputs=document.querySelector('.search input');




// inputs.addEventListener('keyup',e=>{
   
//     const getInput=e.target.value.toUpperCase();

//     const lists=document.getElementsByTagName('li');

//     Array.from(lists).forEach(ele => {

         

//         const text=ele.firstElementChild.textContent;

//      if(text.toUpperCase().indexOf(getInput)==-1){
//         ele.classList.add('filtered');
        
//     }
//     else{
//         ele.classList.remove('filtered');
//     }
//      });

    
// });



//3rd ways 3rd ways 3rd ways


const search=document.querySelector('.search input');


const filterTodo=(term)=>{
    // console.log(list.children); //here list is define at top

    //it is html collection

    Array.from(list.children)
    .filter(todo=>{
        // console.log(todo.textContent);
        // return true;
        return !todo.textContent.includes(term);  //for not matching 
    })
    .forEach(e=>{
        e.classList.add('filtered');
    });





    Array.from(list.children)
    .filter(todo=>{
        // console.log(todo.textContent);
        // return true;
        return todo.textContent.includes(term); //for matching
    })
    .forEach(e=>{
        e.classList.remove('filtered');
    });
};




search.addEventListener('keyup',e=>{

    const term =search.value.trim();
    // console.log(term);
    filterTodo(term);




});




     
 