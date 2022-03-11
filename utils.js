export function makeStatsString(firstChanges, secondChanges, thirdChanges) {
    if (firstChanges === 1) {
        firstChanges += ' time';
    } else {
        firstChanges += ' times';
    } if (secondChanges === 1) {
        secondChanges += ' time';
    } else {
        secondChanges += ' times';
    } if (thirdChanges === 1) {
        thirdChanges += ' time';
    } else {
        thirdChanges += ' times';
    }
    return 'first changes: ' + firstChanges + ' second changes: ' + secondChanges + ' third changes: ' + thirdChanges;
}

export function makeTitleString(name, land, time, people) {
    if (land === 'Landscape Type') {
        land = 'Void';
    } if (time === 'Time of Day') {
        time = 'the Time Between Times';
    } if (people === 'Denizen Type') {
        people = 'Inscrutable';
    } if (name === '') {
        name = 'Namelessville';
    }
    return name + ': the City in the ' + land + ' at ' + time + ', home of the ' + people + ' People'; 
}