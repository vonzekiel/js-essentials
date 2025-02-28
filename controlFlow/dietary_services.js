let person = "employee";
let authorizationLevel;

switch(person) {
    case "employee":
        authorizationLevel = "Full dietary servicess access"
        break;
    case "enrolled member":
        authorizationLevel = "Dietary Servicess and one-on-one interaction with dietician"
        break;
    case "subscriber":
        authorizationLevel = "Partial dietary services access"
        break;
    case "non-subscriber":
        authorizationLevel = "No access"
        break;
    default:
        "No valid access"
}

console.log("Dietary Access: ", authorizationLevel);

