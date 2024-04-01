const loadCatagory =async()=>{
     const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
     const data = await res.json();
    //  console.log(data.data.
    //     news_category
    //     );
    const loadData=data.data.
    news_category;
    const caragoryContainer =document.getElementById('catagory-bar-container')

    loadData.forEach((item) => {
        // console.log(item)
        const div=document.createElement('div')
        div.innerHTML=`<button onclick="loadNews('${item.category_id}')" class="btn ">${item.category_name}</button>`

        caragoryContainer.appendChild(div);
       
    });
}

const loadNews =async(catagori_Id)=>{
    // console.log(catagori_Id)
    document.getElementById('loading-ring').style.display='block';
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagori_Id}`)
    const data = await response.json();
    // console.log(data)
const newsContainer = document.getElementById('news-content')

newsContainer.innerHTML='';

    data.data.forEach((item)=>{
        // console.log(item);
        const div =document.createElement('div');
       
        div.innerHTML=`<div class="singleNews bg-base-200 ml-0 max-w-[60vw] rounded-xl shadow-2xl shadow-gray-700">
        <!-- inner style of  news  -->
        <div class=" hero-content flex-col lg:flex-row">
            <div class="news-photo">
                <img src="${item.image_url}" class="sm:w-ful h-auto lg:max-w-auto rounded-lg ml-0" />
            </div>
            <div class="news-info">
                <div class="flex justify-around">
                    <h1 class="news-header text-3xl font-bold ">${item.title}</h1>
                    <div class="">
                        <p class="text-xl">${item.rating.badge} <sup class="text-xl font-bold ">
                               ${item.rating.number}
                            </sup> </p>
                    </div>
                </div>
                <p class="py-6 max-w-[40vw]">
                ${item.details.slice(0,200)}</p>
            </div>
           
        </div>
        <div class="flex flex-row ml-0 sm:ml-4 mb-2 justify-between">
            <div class="flex space-x-4">
                <img src="${item.author.img}" class="rounded-full w-20 ml-0 pl-0" alt="">
                <div class="pt-4">
                    <h3>${item.author.name}</h3>
                    <p>${item.author.published_date}</p>
                </div>

            </div>
            <div class="flex space-x-3  lg:mr-8">
              
                <img src="./image/eye.png" class="w-6 h-6" alt="">
                <p class="mr-10">${item.total_view}</p>
          
                <button class="btn bg-green-600">Details</button>
            </div>
        </div>
    </div>
`;
newsContainer.appendChild(div);
    })
} ;
const  handleSearch= () =>{
     const inputValue = document.getElementById('inputValue').value;
    //  console.log(inputValue)
    if(inputValue){
        loadNews(inputValue);
    }
    else{
        alert('please enter a valid Id')
    }
}

loadNews("01");

loadCatagory();