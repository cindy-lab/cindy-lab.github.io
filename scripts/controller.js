var btn_connect = document.getElementById('btn-connect');
var btn_publish = document.getElementById('btn-publish');

btn_connect.addEventListener('click', function(e){
  e.preventDefault();
  console.log("connect button")

  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client.subscribe("mqtt/demos")

  client.on("connect", function(){
      console.log("Successfully connected");
  })

  client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
    // client.end();
  })
})

btn_publish.addEventListener('click', function(event){
  event.preventDefault();
  console.log("publish button");
  client.publish("mqtt/demos", "hello world!")
})

// basic functionalities
// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
