function template(first, last, show, tickets){
    return `Dear ${first} ${last}

    Thanks for buying tickets through ticket guru.

    You have bought ${tickets} tickets for the ${show} show. They'll be arriving in the post soon

    Ticket Guru
    `
}

test('multiline template strings', () => {
    let resultText = `Dear Bob Marley

    Thanks for buying tickets through ticket guru.

    You have bought 34 tickets for the Lion King show. They'll be arriving in the post soon

    Ticket Guru
    `
    expect(template('Bob', 'Marley', 'Lion King', 34)).toBe(resultText)
})
