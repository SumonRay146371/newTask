let cardContainer = document.getElementById("cardContainer");
const cardData = async (categoryName) => {
  cardContainer.textContent = "";
   let loading=document.getElementById('loading')
   loading.classList.remove('hidden')
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  let data = await response.json();
  let allData = data.posts;
  // console.log(allData);
  allData.forEach((item) => {
    // console.log(item);
 
    let div = document.createElement("div");
    div.classList = `bg-[#797DFC1A] lg:w-[772px] border-2 border-[ #797DFC] flex flex-col lg:flex-row my-5 p-4  lg:space-x-6` ;
    // parent
    div.innerHTML = `
        <div class="  lg:w-28  lg:h-28  text-center  lg:rounded-[40px]   ">
        <div class=" ${item.isActive? 'bg-red-400' : 'bg-white'} lg:translate-x-24 fixd  translate-x-72  z-10 w-3 h-3 relative rounded-lg flex items-center justify-center"></div>

        <img class="lg:relative -top-3  w-48  mx-auto mb-4 rounded-[40px]" src="${item.image}" alt="">
        </div>
      
        <div class="">
            <div class="">
                <h1 class="text-[16px]">#${
                  item.category
                } <span>author: <span> ${item.author.name}</span> </span></h1>
            </div>
            <h1 class=" text-[20px] text-gray-black my-3 ">${item?.title || '0'}</h1>
            <p class="pb-3 mb-3  border-b-2 border-dashed"> ${item.description} </p>
   <div class="flex justify-end items-end">
    <div class="flex-1">
        <i class="fa-regular fa-message mr-5  "><span class="ml-2">${
          item.comment_count
        }</span></i>
        <i class="fa-regular fa-eye mr-5 "> <span class="ml-2">${
          item?.view_count || "0"
        }</span> </i>
        <i class="fa-regular fa-clock mr-5 "><span class="ml-2">${
          item?.posted_time || "0"
        }</span></i>
    </div>
    <div class="">
        <button  onclick="parseValue('${item.title}');
        parseValue2('${item.view_count}'); addValue(true)"><i class="fa-solid fa-envelope" style="color: #63E6BE;"></i></button>
    </div>
   </div>
        </div>
     </div>  
        `;

    cardContainer.appendChild(div);

  });
  loading.classList.add('hidden')
};
// ****************************
// counterApp()

let sum = 0
const addValue=(f)=>{
 let count= document.getElementById('count')
sum=sum+1
count.innerHTML=sum
console.log(sum);

}

const parseValue=(item)=>{


const showDetails=document.getElementById('showDetails')
let div2= document.createElement('div')
div2.innerHTML=`
<div class="bg-slate-600 p-4 rounded-md flex items-center justify-between mb-4">
  <div class="">
<h3>${item}</h3>
  </div>
  <div class="">
    <i class="mt-5 fa-regular fa-eye"
      ><span id="view" class="ml-2">1568</span></i
    >
  </div>
`
showDetails.appendChild(div2)

}
// ***************************************************************


let convertNumber=(id)=>{
let convert=document.getElementById(id)
 let result=parseInt(convert)
 return result
}

const parseValue2=(item)=>{
let view=document.getElementById('view')
view.innerHTML=`${item}`
}
// ************************
const handlebtn = () => {
  let searchFeild = document.getElementById("inputTxt");
  let searchText=searchFeild.value
  // console.log(searchFeild);
  cardData(searchText);

};
cardData('Comedy');


