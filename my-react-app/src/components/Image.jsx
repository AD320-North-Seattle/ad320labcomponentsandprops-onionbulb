/**
 * Get the img and src link
 * @param {array} recipe - A single recipe 
 * @returns corresponding img and link for a given recipe
 */
function getImage({recipe}) {
    let imgSrc
    switch (recipe.name) {
        case ("Banana Bread"):
            imgSrc =    <>
                            <img src="./src/assets/bananabread-pexels-alleksana-4114141.jpg" height="500px" width="750px"
                            alt="Banana Bread on the Table"/><br/>
                            <a href="https://www.pexels.com/photo/banana-bread-on-the-table-4114141/">Photo by alleksana from Pexels</a>
                        </>
            break;
        
        case("Pumpkin Bread"):
            imgSrc =    <>
                            <img src="./src/assets/pumpkinbread-pexels-nati-87264186-18602619.jpg" height="700" width="500px"
                            alt="Cozy Autumn Pumpkin Bread Display with Rustic Decor"/><br/>
                            <a href="https://www.pexels.com/photo/a-loaf-of-bread-with-pumpkins-and-other-fall-decorations-18602619/">Photo by Nati from Pexels</a>
                        </>
            break;

        case("Orange and Lemon Nut Bread"):
            imgSrc =    <>
                            <img src="./src/assets/orangeandlemonbread-pexels-catscoming-1571073.jpg" height="500px" width="750px"
                            alt="Photo of Baked Bread on Black Metal Tray"/><br/>
                            <a href="https://www.pexels.com/photo/photo-of-baked-bread-on-black-metal-tray-1571073/">Photo by Cats Coming from Pexels</a>
                        </>
            break;

        case("Zucchini Bread"):
            imgSrc =    <>
                            <img src="./src/assets/zucchinibread-pexels-marta-dzedyshko-1042863-2067626.jpg" height="700" width="500px"
                            alt="Close-Up Photo of Sliced Loaf Bread"/><br/>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-sliced-loaf-bread-2067626//">Photo by Marta Dzedyshko</a>
                        </>
            break;

        default:
            imgSrc = null;
            break;
    }

    return (imgSrc)
}

export default getImage