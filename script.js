// Array is started
let food = [
  // item 1
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&psig=AOvVaw2mv1GIf1T49nZyW03_wN4A&ust=1675504368174000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJC5g6eK-fwCFQAAAAAdAAAAABAE",
    Name: "Burger",
    Category: "Snacks",
    Calories: 300,
    JunkFood: "yes"

  },
  //item 2
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frice-grain&psig=AOvVaw2ANCulIRXkeOSyRFZzMkDg&ust=1675539670232000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDIzeiN-vwCFQAAAAAdAAAAABAE",
    Name: "Rice",
    Category: "lunch",
    Calories: 200,
    JunkFood: "no"

  },
  //item 3
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fchowmein.html&psig=AOvVaw11JZ8N7PEJOxvCrQ8aSadg&ust=1675539726358000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIC66YOO-vwCFQAAAAAdAAAAABAE",
    Name: "Chowmein",
    Category: "Snacks",
    Calories: 400,
    JunkFood: "yes"

  },
  //item 4
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522tawa%2Broti%2522&psig=AOvVaw3KWxdKYxbnXTKHlaN2Hd7i&ust=1675539871641000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCM1ciO-vwCFQAAAAAdAAAAABAE",
    Name: "Roti",
    Category: "Breakfast",
    Calories: 80,
    JunkFood: "no"

  },
  //item 5
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmanchurian&psig=AOvVaw378WUv4zExBvMxvuMEg7TK&ust=1675539936939000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDg7ueO-vwCFQAAAAAdAAAAABAE",
    Name: "Manchurian",
    Category: "Snacks",
    Calories: 350,
    JunkFood: "yes"
  },
  //item 6
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffresh-vegetables&psig=AOvVaw2FCW0ovBO3n-bnaokrvkPL&ust=1675540090300000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjmg7GP-vwCFQAAAAAdAAAAABAE",
    Name: "Vegetables",
    Category: "Breakfast",
    Calories: 180,
    JunkFood: "no"

  },
  //item 7
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fparatha.html&psig=AOvVaw2hTfHacVqNSahlaudh233w&ust=1675540247153000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiU3_uP-vwCFQAAAAAdAAAAABAJ",
    Name: "paratha",
    Category: "Breakfast",
    Calories: 280,
    JunkFood: "no"

  },
  //item 8
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522aloo%2Bsamosa%2522&psig=AOvVaw0jM72iLqIF-t60AIfq5wCI&ust=1675540373569000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKCc9reQ-vwCFQAAAAAdAAAAABAE",
    Name: "Samosa",
    Category: "Snacks",
    Calories: 340,
    JunkFood: "yes"

  },
  //item 9
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fwhite-bread&psig=AOvVaw1gr3KUSeTX6SmaxBj25ltG&ust=1675539454813000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjN74GN-vwCFQAAAAAdAAAAABAE",
    Name: "Bread",
    Category: "Breakfast",
    Calories: 150,
    JunkFood: "no"

  },
  //item 10
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Ffood%2Fpizza&psig=AOvVaw39AH-puOQwWWP4ftnWLtXf&ust=1675539222839000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCP1JOM-vwCFQAAAAAdAAAAABAE",
    Name: "pizza",
    Category: "Breakfast",
    Calories: 320,
    JunkFood: "yes"

  }

];

// the Array part end
let ArrItem = " ";
//To print 
function shows(show) {
  ArrItem += `<div class="item">
 <img align="left-middle" height="48px" width="40px" img alt="off"
     src="${show.fooditemimageurl}">
 <ul>
     <li>Name:${show.Name}</li>
     <li>Category:${show.Category}</li>
     <li>Calories:${show.Calories}</li>
     <li>Junk Food:${show.JunkFood}</li>
 </ul>

</div>`;
  document.getElementById("foodItems").innerHTML = ArrItem;
}

// Function to be called
function filterItem(Category) {
  ArrItem = " ";
  if (Category === "breakfast") {
    food.filter(function (show) {
      if (show.Category == "Breakfast") {
        shows(show);
      }
    });
  } else if (Category === "calories") {
    food.filter(function (show) {
      if (show.Calories > 200) {
        shows(show);
      }
    });
  } else if (Category === "junkfood") {
    food.filter(function (show) {
      if (show.JunkFood == "yes") {
        shows(show);
      }
    });
  } else if (Category === "allItem") {
    location.reload();
  };
}




