var formdata = new FormData();

var requestOptions = {
  redirect: 'follow'
};
function appendData(data) {
    var mainContainer = document.getElementById("missions");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement('div');
        div.innerHTML = 'mission_name: ' + data[i].mission_name+ ' mission_id:' + data[i].mission_id+ ' description:'+ data[i].description ;
        mainContainer.appendChild(div);
      }
    }

fetch("https://api.spacexdata.com/v3/missions/?limit=10", requestOptions)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
