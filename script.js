document.addEventListener('DOMContentLoaded', function() {
  const counters = [
      { id: 1, count: 0 },
      { id: 2, count: 0 }
  ];

  counters.forEach(counter => {
      const incrementButton = document.getElementById(`increment${counter.id}`);
      const decrementButton = document.getElementById(`decrement${counter.id}`);
      const countElement = document.getElementById(`count${counter.id}`);

      incrementButton.addEventListener('click', function() {
          counter.count++;
          countElement.innerText = counter.count;
      });

      decrementButton.addEventListener('click', function() {
          counter.count--;
          countElement.innerText = counter.count;
      });
  });
});