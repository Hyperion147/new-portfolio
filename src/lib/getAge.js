const getAge = (birthMonth, birthDay, birthYear, currentDate = new Date()) => {
    let age = currentDate.getFullYear() - birthYear;
    const birthdayThisYear = new Date(
        currentDate.getFullYear(),
        birthMonth - 1,
        birthDay,
    );

    if (currentDate < birthdayThisYear) {
        age -= 1;
    }

    return age;
};

export const getSuryansuAge = (currentDate) =>
    getAge(7, 3, 2005, currentDate);

export default getAge;