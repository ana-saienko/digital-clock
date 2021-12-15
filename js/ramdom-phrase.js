const quoteEl = document.getElementById('phrase')
const nextBtn = document.getElementById('next-quote')

generateJoke();

function generateJoke() {


    fetch("https://type.fit/api/quotes")
          .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    quoteEl.innerHTML = data.text;
                  });
}
