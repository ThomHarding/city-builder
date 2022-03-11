export function makeStatsString(landChanges, timeChanges, peopleChanges) {
    return 'land changes: ' + landChanges + ' time changes: ' + timeChanges + ' people changes: ' + peopleChanges;
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