const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main() {
    console.log(`
    ██▓███   ▄▄▄        ██████   ██████  █     █░ ▒█████   ██▀███  ▓█████▄ 
    ▓██░  ██▒▒████▄    ▒██    ▒ ▒██    ▒ ▓█░ █ ░█░▒██▒  ██▒▓██ ▒ ██▒▒██▀ ██▌
    ▓██░ ██▓▒▒██  ▀█▄  ░ ▓██▄   ░ ▓██▄   ▒█░ █ ░█ ▒██░  ██▒▓██ ░▄█ ▒░██   █▌
    ▒██▄█▓▒ ▒░██▄▄▄▄██   ▒   ██▒  ▒   ██▒░█░ █ ░█ ▒██   ██░▒██▀▀█▄  ░▓█▄   ▌
    ▒██▒ ░  ░ ▓█   ▓██▒▒██████▒▒▒██████▒▒░░██▒██▓ ░ ████▓▒░░██▓ ▒██▒░▒████▓ 
    ▒▓▒░ ░  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒▓  ▒ 
    ░▒ ░       ▒   ▒▒ ░░ ░▒  ░ ░░ ░▒  ░ ░  ▒ ░ ░    ░ ▒ ▒░   ░▒ ░ ▒░ ░ ▒  ▒ 
    ░░         ░   ▒   ░  ░  ░  ░  ░  ░    ░   ░  ░ ░ ░ ▒    ░░   ░  ░ ░  ░ 
                   ░  ░      ░        ░      ░        ░ ░     ░        ░    
                                                                     ░      
    Generator just for you my friend.                                                                 
    `)

    rl.question('Give the sentence what you want to generate:', (sentence) => {
        if (sentence) {
            if (sentence.length < 3) {
                console.log('I think the sentence is too short :/')
                rl.close()
                return
            }
            const words = sentence.split(' ')
            const password = generatePassword(words, 1)
            console.log(password)
        }
        else {
            console.log('No sentence added :/')
        }
        rl.close()
    })
}

/**
 * Method 0: Every positive character changed to uppercase
 * Method 1: Every consonant change to a number
 * @param {string} words The words from the sentence
 * @param {int} method_index The index of the method
 */
function generatePassword(words, method_index) {
    let password = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase()
        if (i % 2 == 0) {
            password.push(word[0].toUpperCase())
        } else {
            if (method_index == 1) {
                word = word.replace(/[e]/g, '3')
                word = word.replace(/[a]/g, '4')
                word = word.replace(/[o]/g, '0')
                word = word.replace(/[i]/g, '1')
            }
            password.push(word)
        }
        if (word.length > 3) password.push(word[word.length - 1])
    }
    return password.join('') + method_index
}
main()