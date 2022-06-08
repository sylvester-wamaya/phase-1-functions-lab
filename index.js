const companyName = "Scuba";

function distanceFromHqInBlocks(pickUpLocation){
const companyHqLocation = 42;
return Math.abs(companyHqLocation - pickUpLocation);
}
function distanceFromHqInFeet(pickUpLocation){
    return  distanceFromHqInBlocks(pickUpLocation) * 264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (400 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) <= 2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
    } else if (2000 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
        
    } else {
        return `cannot travel that far`;
    }    
}
