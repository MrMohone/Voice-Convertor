let speech = new SpeechSynthesisUtterance();

let voices = [];
 let voiceSelect = document.querySelector("select");

 window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()/* get all voices in our device,but not give acces */;
    speech.voice = voices[0];/* by default give first sounder name only */


    /* To get/list all sounder names alternativers , but not acces it*/
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
 }

 // To access all sounder which listed on screen
 voiceSelect.addEventListener("change", () => {
    speech.voice = voices/* by default thier have many voices in smart devices,but.. */ 
                        [/*it select only displyed on your screen */voiceSelect.value];
 })



//speech only
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})