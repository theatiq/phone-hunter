const showPhones = async (search) => {
    const allData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const showData = await allData.json()

    setTimeout(() => {
        // console.log("Hello");
        const showSpinner = document.getElementById("spinner")
        showSpinner.style.display = "none"
        displayData(showData.data);
    }, 3000);
}

const showDetails = async (slug) => {
    const detailView = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    const detailData = await detailView.json()
    console.log(detailData.data.slug);
    const modal = document.getElementById("my_modal_5")
    modal.showModal()
    document.getElementById("my_modal_5").innerHTML = `
    <div class="modal-box">
          <h3 class="text-lg font-bold">${detailData.data.mainFeatures.chipSet}</h3>
          <h3 class="text-lg font-bold">${detailData.data.mainFeatures.memory}</h3>
          <h3 class="text-lg font-bold">${detailData.data.releaseDate}</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>

    `

}


const handleSearch = () => {
    const searchText = document.getElementById("search-box").value
    const showSpinner = document.getElementById("spinner")
    showSpinner.style.display = "block"
    // console.log(searchText);
    if (searchText === "") {
        showPhones("iphone")
    } else {
        showPhones(searchText)
    }
}


const displayData = (phones) => {
    // console.log(phones);
    document.getElementById("all-phones").innerHTML = ""
    const allPhones = document.getElementById("all-phones")

    phones.forEach(phone => {
        // console.log(phone);
        const slugId = phone.slug
        // console.log(slugId);
        const div = document.createElement("div")
        div.innerHTML = `
              <figure>
        <img
          src=${phone.image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.phone_name}</p>
        <div id="" class="card-actions justify-end">
          <button onclick = "showDetails('${slugId}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `
        allPhones.appendChild(div)
    })
}



showPhones("iphone")