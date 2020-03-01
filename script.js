var formdata = new FormData();

var requestOptions = {
  redirect: 'follow'
};
function appendMain(data)
{
  var mainContainer =document.getElementById("mission");
  for(var i = 0; i < data.length;i++)
  {
    var div = document.createElement('div') ;
    div.innerHTML +='<li class ="other"><b><i><u>Mission_name : </u></i></b><br/>'+ data[i].mission_name+'<br/></li>';
    mainContainer.appendChild(div);
    mainContainer =document.getElementById("mission");
    div.innerHTML += '<li class ="other"><b><i><u>Mission_id : </u></i></b><br/>'+ data[i].mission_id+'<br/></li>';
    mainContainer.appendChild(div);
    mainContainer =document.getElementById("mission");
    div.innerHTML +='<li class ="desc"><b><i><u>Description : </u></i></b><br/>'+ data[i].description+'</li>';
    mainContainer.appendChild(div);
  }
}
fetch("https://api.spacexdata.com/v3/missions/?limit=10", requestOptions)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendMain(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
