funcConnect = () => {
  console.log("Connecting..");
  client = mqtt.connect(document.getElementById('broker').value)
  console.log(document.getElementById('broker').value);

  client.on("connect", function(){
    console.log("Successfully connected");
  })
  client.on("message", function (topic, payload) {
    console.log("Received { topic: " + topic + "; payload: " + payload + " } ");
  })
  funcPublish = () => {
    client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
    console.log("Published { topic:" + document.getElementById('pub-topic').value +
    ";payload: " + document.getElementById('pub-payload').value + "}");
  }
  funcSubscribe = () => {
    client.subscribe(document.getElementById('sub-topic').value);
    console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + "}");
  }
}
