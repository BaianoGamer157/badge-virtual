const linksSocialMedia ={
  github: "BaianoGamer157",
  youtube: "UCuPVlWhvvugQaRwPjlEkmpg",
  facebook:"profile.php?id=100012705708195",
  instagram: "kaua_oliveiralima",
  twitter: "KauaLima125",
 }
 function changeSocialMediaLinks(){ 
  for(let li of socialLinks.children){
  const social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
 }
 }
 changeSocialMediaLinks()

 function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userName.textContent = data.name
    //userBio.textContent = data.userBio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
  })
 }

 getGitHubProfileInfos()