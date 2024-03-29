const jedi = []

jedi[0] = `Luke`

jedi.push(`Obi-Wan Kenobi`)

jedi.unshift(`Yoda`)

jedi.pop()

jedi.shift()

console.log(jedi)

const sithLords = [
    `Darth Vader`,
    `Darth Sidious`,
    `Darth Maul`
]

const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
]

const starWarsVillains = sithLords.concat(imperialOfficers)

console.log(starWarsVillains)

console.log(starWarsVillains.slice(2, 4))

const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
}

console.log(droids[`astromech`])

console.log(droids.protocol)

droids[`assassin`] = `IG-11`

console.log(starWarsVillains[0][6])

console.log(starWarsVillains.slice(-4, -3))

const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace", 
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens", 
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }

]
starWarsMovies.splice(1,0, "Solo", "Rogue One")

console.log(starWarsMovies)