function formdata(){
    // Initialize the string
    var string = document.getElementById("text").value;

    // Here Encode the string value
    var encodedString = btoa(string);
    document.writeln("<h1 style='padding-top: 10%; color:black; font-size:40px; text-align: center; font-family: arial'>" + "Your Encoded String: " + encodedString + "</h1>" + "<br>");         // display the hash(encoded)
    // console.log("Your hash is: " + encodedString);                 // Outputs in console: "............"


    // Here Decode the string value
    var decodedString = atob(encodedString);
    document.writeln("<h1 style='color:gray; font-size:35px; text-align: center; font-family: arial'>" + "Your Decode String: " + decodedString + "</h1>");       // display the input string(decoded)
    // console.log("Your input is: " + decodedString);      // Outputs in console: "............."
}
