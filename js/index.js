

const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
}

const pickUserHand = (hand) => {
    console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // Show the next page with the hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // Set the user pick
    document.getElementsByID("userPickImage").src = handOptions[hand];


    
}