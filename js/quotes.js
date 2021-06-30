const quotes = [
    {
        quote : "Don`t worry about what people think. They don`t do it very often.",
        author : "-Unknown-"
    },
    {
        quote : "Why is Monday so far from Friday, and Friday so close to Monday?",
        author : "-Unknown-"
    },
    {
        quote : "Folks are usually about as happy as they make their minds up to be.",
        author : "- Abraham Lincoln-"
    },
    {
        quote : "Happiness comes from peace. Peace comes from indifference.",
        author : "-Naval Ravikant-"
    },
    {
        quote : "Be happy with what you have. Be excited about what you want.",
        author : "-Alan Cohen-"
    },
    {
        quote : "Formula for Success : rise early, work hard, strike oil",
        author : "-J.Paul Getty-"
    },
    {
        quote : "Be careful about reading health books. You may die of a misprint.",
        author : "-Mark Twain-"
    },
    {
        quote : "True friends stab you in the front.",
        author : "-Oscar wilde-"
    },
    {
        quote : "Just keep moving forward and don`t give a shit about what anybody thinks. Do what you have to do, for you.",
        author : "-Johnny Depp-"
    },
    {
        quote : "I never make the same mistake twice, I make it 4 or 5 times, just to be sure.",
        author : "-Unknown-"
    },
    {
        quote : "If not now. When?",
        author : "-Unknown-"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[(Math.floor(Math.random() * quotes.length))];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

