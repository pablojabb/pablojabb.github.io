let card = document.getElementById('fc-container');
let bg = document.getElementById('bg');
let planes = document.getElementById('planes');
let building = document.getElementById('building');

window.addEventListener('scroll', () => {
  let value = window.scrollY;


  planes.style.left = value * 1 + 'px';
  bg.style.top = value * 0.1 + 'px';
  card.style.transform = `translateY(${value * 0.3}px)`;

});

function copyToClipboard(text) {
  if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Email Address has been copied to your clipboard');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  } else {
      let tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Email Address has been copied to your clipboard');
  }
}


function resetAnimation() {
  const svg = document.querySelector('.animated-svg');
  const clone = svg.cloneNode(true); // Clone the SVG element
  svg.parentNode.replaceChild(clone, svg); // Replace the original with the clone
}

// Call resetAnimation every 2 seconds
setInterval(resetAnimation, 3500);