const showPhones = async (search) => {
    const allData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const showData = await allData.json()
    
    setTimeout(() => {
        console.log("Hello");
        const showSpinner = document.getElementById("spinner")
        showSpinner.style.display = "none"
        displayData(showData.data);
    }, 3000);
}



const handleSearch = () => {
    const searchText = document.getElementById("search-box").value
    const showSpinner = document.getElementById("spinner")
    showSpinner.style.display = "block"
    console.log(searchText);
    if (searchText === "") {
        showPhones("iphone")
    } else {
        showPhones(searchText)
    }
}

// setTimeout(function () {
//     handleSearch()
// }, 3000)









const displayData = (phones) => {
    // console.log(phones);
    document.getElementById("all-phones").innerHTML = ""
    const allPhones = document.getElementById("all-phones")

    phones.forEach(phone => {
        // console.log(phone);

        const div = document.createElement("div")
        div.innerHTML = `
              <figure>
        <img
          src=${phone.image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.phone_name}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `
        allPhones.appendChild(div)
    })
}

showPhones("iphone")