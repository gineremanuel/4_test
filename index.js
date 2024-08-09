const d = document,
  $fragment = d.createDocumentFragment(),
  $main = d.querySelector('main'),
  myStudents = [],
  MyArray = [
    {
      "name": "Jonh Smith", 
      "title": "Newbie Programer", 
      "buttontext": "Follow", 
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "name": "Alesha Doe", 
      "title": "FullStack Programer",
      "buttontext": "Add Friend",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "name": "Jessica Jones", 
      "title": "Copywriter",
      "buttontext": "View Text", 
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    }
  ],
  MyDeformedArray = [
    {
      "firstName": "Juanse Laverde", 
      "title": "Singer",
      "buttontext": "Sing",
      "icon": "https://reqres.in/img/faces/7-image.jpg"
    },
    { "firstName": "Alesha Doe", 
      "title": "Newbie",
      "buttontext": "Add Oil",
      "icon": "https://reqres.in/img/faces/8-image.jpg"},
    {
      "firstName": "Jonas Uala", 
      "title": "Lier",
      "buttontext": "View Text", 
      "icon": "https://reqres.in/img/faces/11-image.jpg"
    }
  ],
    normalize = (array1, array2) => {
    const mixedData = array1.concat(array2)
    mixedData.map(el => {
      const user = {
        name: el.name || el.firstName,
        title: el.title,
        buttontext: el.buttontext,
        avatar: el.avatar || el.icon
      }
    return myStudents.push(user)
    })
  }



normalize(MyArray, MyDeformedArray)

myStudents.forEach(user => {
  const $userCard = d.createElement('card'),
    $userAvatar = d.createElement('img'),
    $userName = d.createElement('h3'),
    $userTitle = d.createElement('p'),
    $userBtnTxt = d.createElement('button')
    $userCard.classList.add('cardContent', 'col-3')
    $userAvatar.setAttribute("src", user.avatar);
    $userName.innerHTML = user.name
    $userTitle.innerHTML = user.title
    $userBtnTxt.textContent = user.buttontext
    $userCard.appendChild($userAvatar)
    $userCard.appendChild($userName)
    $userCard.appendChild($userTitle)
    $userCard.appendChild($userBtnTxt)
    $fragment.appendChild($userCard)
  })
  $main.appendChild($fragment)



