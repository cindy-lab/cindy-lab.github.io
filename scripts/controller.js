// variables
var broker = "wss://test.mosquitto.org:8081/mqtt";
client = mqtt.connect(broker);
var topic = "cindy/fan/status";
var payload = "The fan is currently off";

//function
client.on("connect", function () {
    console.log("success");
});
client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
    var row = $("<tr>");
    $("<td>").text(topic).appendTo($(row));
    $("<td>").text(payload).appendTo($(row));
    $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#tbl-body").append($(row));

})
//function for off
$("#Off").click(function () {
    payload = "The Fan is currently off";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Ayys!',
                text: 'There is an error!',
            });
        } else {
            console.log("published")
            Swal.fire('Successfully Off !')
            $('#status').html(payload);
        }
    });
});

//function for button 1
$("#1").click(function () {
    payload = "The Fan is turned at 1";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Ayy!',
                text: 'There is an error!',
            });
        } else {
            console.log("published")
            $('#status').html(payload);
        }
    });
});

//function for button 2
$("#2").click(function () {
    payload = "The Fan is turned at 2";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Ayy!',
                text: 'There is an error!',
            });
        } else {
            console.log("published")
            $('#status').html(payload);
        }
    });
});

//function for button 3
$("#3").click(function () {
  payload = "The Fan is turned at 3";
  client.publish(topic, payload, function (err) {
      if (err) {
          Swal.fire({
              type: 'error',
              title: 'Ayy!',
              text: 'There is an error!',
          });
      } else {
          console.log("published")
          $('#status').html(payload);
      }
  });
});