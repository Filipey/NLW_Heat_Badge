const socialMedia = {
  github: 'Filipey',
  youtube: 'UC6dfD3ZcTuX0OFy6wqLx7NQ',
  facebook: 'zuck',
  instagram: 'filipe_augustosm',
  twitter: 'DzFilipeDz'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.name)((userBio.textContent = data.bio))(
        (userLink.href = data.html_url)
      )((userImage.src = data.avatar_url))((userLogin.textContent = data.login))
    })
}

getGitHubProfileInfos()