


function main() {
  var formData = new FormData( document.getElementById("order_burrito") );
  var request = new XMLHttpRequest();
  request.open('POST', 'https://httpbin.org/post', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  request.onload = function () {
    console.log(request.status); // HTTP status code
    console.log(request.response); // response body
  }
  request.send(formData);

}

main()
