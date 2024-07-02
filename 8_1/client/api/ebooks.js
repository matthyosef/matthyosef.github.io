//  https://fakestoreapi.com/products


let grid = document.getElementById("ebooksgrid");
let filterInput = document.getElementById("txtsearch");

fetch('/nopdbjson/film.json')
    .then(res => res.json())
    .then(json =>{
         //console.log(json);
        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });

// add event listener
//filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.getElementsByClassName('col-sm-6 col-md-4 col-lg-4 my-2');
    // console.log(filterValue);
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    for (let i = 0; i < item.length; i++){
      if(i <= beginGet && i <= endGet){
        let span = item[i].querySelector('.card-body');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].classList.remove("d-none");
        }else{
            item[i].classList.add("d-none");
        }
      }
    }listPage();
}


// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "col-sm-6 col-md-4 col-lg-4 my-2";

    let { id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, last_update, user_id } = value;
// in the above scenario, we could only return a result because, the number of columns were 
// the same as those from the database, however it doesnt mean that the column names should be identical
// for example in the database film_id was replaced with id here and the result were still obtained

    div.innerHTML = `
    <div class="card browse-bookcontent">
       <div class="card-body p-0">
          <div class="d-flex align-items-center">
             <div class="col-6 p-0 position-relative image-overlap-shadow">
                <a href="javascript:void();"><img class="img-fluid rounded w-100" src="assets/images/browse-books/07.jpg" alt=""></a>
                <div class="view-book">
                   <a href="blank-post-details.html" class="btn btn-sm btn-white">View Book</a>
                </div>
             </div>
             <div class="col-6 mx-2">
                <div class="mb-2">
                   <h6 class="mb-1">See the More Story</h6>
                   <p class="font-size-13 line-height mb-1">${title}</p>
                   <div class="d-block line-height">
                      <span class="font-size-11 text-warning">
                         <i class="fa fa-star"></i>
                         <i class="fa fa-star"></i>
                         <i class="fa fa-star"></i>
                         <i class="fa fa-star"></i>
                         <i class="fa fa-star"></i>
                      </span>                                             
                   </div>
                </div>
                <div class="price d-flex align-items-center">
                   <h6><b>${description}</b></h6>
                </div>
                <div class="product-action">
                   <a href="javascript:void();" class="btn btn-outline-primary"><i class="fa fa-shopping-cart"></i></a>
                   <a href="javascript:void();" class="ml-2 btn btn-outline-danger"><i class="fa fa-heart"></i></a>
                </div>                                      
             </div>
          </div>
       </div>
    </div>
    `;
    document.getElementById('ebooksgrid').appendChild(div);
}

/// pagination

let thisPage = 1;
let limit = 6;
let list = grid.getElementsByClassName('col-sm-6 col-md-4 col-lg-4 my-2');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'd-none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
    
}