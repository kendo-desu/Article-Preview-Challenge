//mobile display mode
const mButton = document.getElementById('mobile-button');
const icon = document.getElementById('share-button');
const footer = document.getElementById('bottom-sec');
const avatar = document.getElementById('avatar');
const details = document.getElementById('details');
const social = document.getElementById('social-container');

//desktop display mode
const dButton = document.getElementById('desktop-button');
const popup = document.getElementById('popup');

mButton.addEventListener('click', function (e) {
    //console.log(e.target);
    console.log(e.currentTarget);
    let currentColor = mButton.style.backgroundColor;
    
    mButton.style.backgroundColor = '#6d7f97';
    icon.style.fill = '#ecf2f8';
    footer.style.backgroundColor = 'hsl(217, 19%, 35%)';
    avatar.style.display = 'none';
    details.style.display = 'none';
    social.style.display = 'flex';
  })

  document.querySelector("html").addEventListener("click", function (event) {
    if (event.target !== mButton){
      console.log(event.target);
      console.log(event.currentTarget);
      
      mButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
      icon.style.fill = 'hsl(217, 19%, 35%)';
      footer.style.backgroundColor = 'white';
      avatar.style.display = 'initial';
      details.style.display = 'initial';
      social.style.display = 'none';
      console.log('state returned');
    }
  });

  
  if (window.innerWidth > 768) {
    dButton.addEventListener('click', function (e) {
      console.log(e.target);
      console.log(e.currentTarget);
      console.log('popup open');
      popup.style.display = 'flex';    
    })
  
    document.querySelector("html").addEventListener("click", function (event) {
      if (event.target !== dButton){
        console.log(event.target);
        console.log(event.currentTarget);
        popup.style.display = 'none';
        console.log('popup closed');
      }
    });

}