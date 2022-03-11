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