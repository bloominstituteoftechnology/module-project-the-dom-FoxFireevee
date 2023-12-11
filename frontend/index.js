function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach((widget, index) => {
    widget.classList.add('widget');
    widget.setAttribute('tabindex', index + 1 + '')
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomQuote = quotes[Math.floor(Math.random() * 10)];

  const chosenQuote = document.createElement('div');
  chosenQuote.textContent = randomQuote.quote;
  const authorAndDate = document.createElement('div');
  authorAndDate.textContent = `${randomQuote.author} in ${randomQuote.date || 'an unknown date'}`;

  document.querySelector('.quoteoftheday').appendChild(chosenQuote);
  document.querySelector('.quoteoftheday').appendChild(authorAndDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomAdverbs = adverbs[Math.floor(Math.random() * 10)];
  const randomNouns = nouns[Math.floor(Math.random() * 10)];
  const randomVerbs = verbs[Math.floor(Math.random() * 10)];

  const corporateSpoke = document.createElement('p');
  corporateSpoke.textContent = `We need to ${randomVerbs} our ${randomNouns} ${randomAdverbs} in order to ${randomVerbs} our ${randomNouns} ${randomAdverbs}.`;

  document.querySelector('.corporatespeak').appendChild(corporateSpoke);


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countingDown = document.querySelector('.countdown');
  let count = 5;
  const countDown = document.createElement('p');
  countDown.textContent = `T-minus ${count}...`;

  countingDown.appendChild(countDown);

  const id = setInterval(() => {
    if(count === 1) {
      countDown.textContent = 'Liftoff! 🚀'
      clearInterval(id);
    } else {
      countDown.textContent = `T-minus ${--count}...`;
    }
    
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  const randomFriend = document.createElement('p');

  document.querySelector('.friends').appendChild(randomFriend);

  const year = randomPerson.dateOfBirth.split('-')[0];

  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `;

  if (!randomPerson.friends.length) {
    sentence += 'has no friends.'
  } else {
    sentence += 'is friends with '
    for (let i = 0; i < randomPerson.friends.length; i++) {
      const friendId = randomPerson.friends[i];
      const friend = people.find(p => p.id === friendId);
      const fullName = `${friend.fname} ${friend.lname}`
      console.log(fullName)
      let isLastI = i === randomPerson.friends.length - 1;
      let isNextToLastI = i === randomPerson.friends.length - 2;
      if(isLastI) {
        sentence += `${fullName}.`
      } else if(isNextToLastI) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }

  randomFriend.textContent = sentence;
  console.log(randomFriend);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  // const 

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
