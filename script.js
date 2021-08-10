var form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var country = document.getElementById('country').value






var url = "https://api.covid19api.com/total/dayone/country/" +country

fetch(url)
.then((res) => {
    if (!res.ok) {
        alert("The data you entered is Invalid or our database doesnt have any match for your query.\n -juswa");
        throw new Error("The data you entered is Invalid.");
      }
      return res.json();
    })
.then((res) =>{
   
   

    console.log(res)
    var length = res.length
    var index = length - 1
    var active = document.getElementById('active')
    var confirmed = document.getElementById('confirmed')
    var deaths = document.getElementById('deaths')
    var recovered = document.getElementById('recovered')
    var place = document.getElementById('place')
    var date = document.getElementById('date')
    

    confirmed.innerHTML = ''
    active.innerHTML = ''
    deaths.innerHTML = ''
    recovered.innerHTML = ''
    place.innerHTML = ''
    date.innerHTML = ''


    place.append(res[index].Country)
    confirmed.append(res[index].Confirmed)
    active.append(res[index].Active)
    deaths.append(res[index].Deaths)
    recovered.append(res[index].Recovered)
    date.append('Last Update: ' + res[index].Date)

})


})