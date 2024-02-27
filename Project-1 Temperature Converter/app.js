// get button select inputs etc...

let convertBtn = document.querySelector("#convertBtn");

let selectInput = document.querySelector("#selectInput");

let degreeInput = document.querySelector("#degreeInput");

let showConvertedTemperature = document.querySelector(
  "#showConvertedTemperature"
);

let digreeO = document.querySelector("#digreeO");

let showTemperatureUnit = document.querySelector("#showTemperatureUnit");

// button pe click ka event lagaya

convertBtn.addEventListener("click", (e) => {
  // button pe click karny sy page reload hota he isi liye is ka default behaviour change kiya

  e.preventDefault();

  //   input:number ka draw back ye he ky is me numbers ky elawa "e" bhi hm likh sakty hen.

  // agar 123e number ky sath e use hoga to input ki value "" empty hojati he isi liye hm ny pehly hi check kar liya ky agar user input field ko empty kar ky button pe click kary to usy error show ho or agar number ky sath "e" use kary tb bhi us ko error show ho

  if (degreeInput.value === "") {
    showConvertedTemperature.innerHTML = "Invalid Input";
    digreeO.innerHTML = "";
    showTemperatureUnit.innerHTML = "";
  } else {
    if (selectInput.value === "celsius") {
      // hm ny yahan check kr liya ky agar selectInput ki value celsius ho to is block of code me aye or ye formula laga diya jo hm ny google sy othaya tha celsius to fahrenheit convertor ka

      // input:number bhi jo hamen value return karta he wo string me hoti he isi liye us ko Number() ki madad sy number me convert kiya ta ky formula me koi problem nhi ho

      let celsiusOutput = (Number(degreeInput.value) * 9) / 5 + 32;

      //   toFixed() me hm wo value daty hen jo hm chahty hen ky a'ashariya ky bd kitny zero allow hen. agar ye method use nhi karen gy to kuch values 23.45444444 is tra point ky bd bohot lambi value return karen gi

      //  or is method ko use karny ky bd 23.45 sirf itni hi value return hogi jo ky dakhny me bhi acha lagta he

      showConvertedTemperature.innerHTML = celsiusOutput.toFixed(2);
      digreeO.innerHTML = "&deg;";
      showTemperatureUnit.innerHTML = "F";
    } else {
      // yahan hm ny same wohi fahrenheit to celsius convertor ka formula use kiya

      let fahrenheitOutput = ((Number(degreeInput.value) - 32) * 5) / 9;

      showConvertedTemperature.innerHTML = fahrenheitOutput.toFixed(2);
      digreeO.innerHTML = "&deg;";
      showTemperatureUnit.innerHTML = "C";
    }
  }
});
