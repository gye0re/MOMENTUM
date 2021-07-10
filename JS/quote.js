const quotes = [

    {quote: "인생은 경험을 쌓기 위한 여행이지, 풀어야 하는 문제가 아니란다.",
    author: "곰돌이 푸"},
    {quote: "너가 보고있는 그 이상을 봐",
    author: "라이온킹"},
    {quote: "내 기분은 내가 정해. 오늘은 행복으로 할래.",
    author: "이상한 나라의 엘리스"},
    {quote: "너는 아직 꿈을 이룰 충분한 시간이 있어",
    author: "피터팬"},
    {quote: "남들이 어떻게 생각하는지는 중요하지 않아, 나 자신이 어떻게 생각하는지가 중요해.",
    author: "인어공주"},
    {quote: "성공은 공짜로 주어지는게 아니야. 목표를 위해 무엇이든 할 수 있어야 해.",
    author: "코코"},
    {quote: "잘못된 일에만 신경쓰지마. 항상 즐거움으로 되돌릴 방법이 있으니깐!",
    author: "인사이드 아웃"},
    {quote: "약간의 모험과 약간의 반항은 성장의 일부지",
    author: "라푼젤"},
    {quote: "당신을 억누르고 있는 그것들이 당신을 끌어올릴 수 있을 거예요.",
    author: "덤보"},
    {quote: "오늘의 특별한 순간들은 내일의 추억들이야",
    author: "알라딘"}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;