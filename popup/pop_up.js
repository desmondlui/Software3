$(document).ready(function () {

    var synth = window.speechSynthesis;

    synth.onvoiceschanged = function () {
        var voices = synth.getVoices();
        for (i = 0; i < voices.length; i++) {
            var option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
            console.log(voices[i].nameoices);
        }

    }

});
