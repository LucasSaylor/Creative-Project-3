document.getElementById("totalSubmit").addEventListener("click", function(event) {
  event.preventDefault(); //Prevents defult browers behavior
  const year = document.getElementById("yearSubmit").value;
  const month = document.getElementById("monthSubmit").value;
  const day = document.getElementById("daySubmit").value;
  if (year === "")
    return;

  if(day == 0 && month == 0) {
  const url = "https://calendarific.com/api/v2/holidays?&api_key=0f984fc4e5393f33bf504770042ab791d4b75be1&country=US&year=" + year;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      let results = "";
      localStorage.clear();
      let count = 0;
      for (let i = 0; i < json.response.holidays.length; i++) {
        results += "<div class='result_box'>";
        results += "<div class='name_1'>" + "<h2>" + json.response.holidays[i].name + "</h2>" + "</div>";
        results += "<div class='desc'>" + "<u class='desc_u'><strong>Description</strong></u>: " + json.response.holidays[i].description + "</div>";
        results += "<div class='date'>" + "<u><strong>Holiday Date</strong></u>:  " + " " + json.response.holidays[i].date.iso + "</div>";
        results += "<div class='type'>" + "<u><strong>Type of Holiday</strong></u>:  " + json.response.holidays[i].type + "</div>";
        results += "</div>";


}
      document.getElementById("calenderResults").innerHTML = results;

    });
  }

  else if(day == 0) {
  const url = "https://calendarific.com/api/v2/holidays?&api_key=0f984fc4e5393f33bf504770042ab791d4b75be1&country=US&month=" + month + "&year=" + year;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      let results = "";
      localStorage.clear();
      let count = 0;
      for (let i = 0; i < json.response.holidays.length; i++) {
        results += "<div class='result_box'>";
        results += "<div class='name_1'>" + "<h2>" + json.response.holidays[i].name + "</h2>" + "</div>";
        results += "<div class='desc'>" + "<u class='desc_u'><strong>Description:</strong></u>: " + json.response.holidays[i].description + "</div>";
        results += "<div class='date'>" + "<u><strong>Holiday Date</strong></u>:  " + " " + json.response.holidays[i].date.iso + "</div>";
        results += "<div class='type'>" + "<u><strong>Type of Holiday</strong></u>:  " + json.response.holidays[i].type + "</div>";
        results += "</div>";


}
      document.getElementById("calenderResults").innerHTML = results;

    });
  }

  else {
  const url = "https://calendarific.com/api/v2/holidays?&api_key=0f984fc4e5393f33bf504770042ab791d4b75be1&country=US&day=" + day + "&month=" + month + "&year=" + year;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      let results = "";
      localStorage.clear();
      let count = 0;
      for (let i = 0; i < json.response.holidays.length; i++) {
        results += "<div class='result_box'>";
        results += "<div class='name_1'>" + "<h2>" + json.response.holidays[i].name + "</h2>" + "</div>";
        results += "<div class='desc'>" + "<u class='desc_u'><strong>Description</strong></u>: " + json.response.holidays[i].description + "</div>";
        results += "<div class='date'>" + "<u><strong>Holiday Date</strong></u>:  " + " " + json.response.holidays[i].date.iso + "</div>";
        results += "<div class='type'>" + "<u><strong>Type of Holiday</strong></u>:  " + json.response.holidays[i].type + "</div>";
        results += "</div>";


}
      document.getElementById("calenderResults").innerHTML = results;

    });
  }
});
