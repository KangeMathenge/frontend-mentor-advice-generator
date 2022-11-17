const url = 'https://api.adviceslip.com'
const quoteId = document.getElementById('quote-tag')
const quoteText = document.getElementById('quote')
const randomQuote = document.getElementById('random-advice')
const getAdvice = async ()=>{
    const response = await fetch(`${url}/advice`)
    const data = await response.json()
    return data.slip
}
randomQuote.addEventListener('click', async ()=>{
    const response = await getAdvice()
    quoteId.innerText = `ADVICE  #${response.id}`
    quoteText.innerText = `"${response.advice}"`
})
