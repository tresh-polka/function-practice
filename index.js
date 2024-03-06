function getMenCountByYear(users) {
    let men = users.filter((user) => user.gender === 'male')
    const menYearsOfBirth = men.reduce((acc, user) => {
        let year = user.birthday.slice(0, 4)
        if (!Object.hasOwn(acc, year)) {
        acc[year] = 0;
        }
        acc[year] += 1;
        return acc;
    }, {});
    return menYearsOfBirth;
}

export default getMenCountByYear
