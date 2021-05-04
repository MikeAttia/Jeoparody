const tiles = document.getElementsByClassName("tile")

for (let i = 0; i < tiles.length; i++) {

    tiles[i].addEventListener('click', (event) => {

        let classes = event.target.classList
        console.log(classes)
        if (classes.contains('active'))
            event.target.classList.remove('active')
        else
            event.target.classList.add('active')

    })
}


const toggleActive = () => {
    console.log('toggleactive')
}


class Team {
    constructor(name, element) {
        this.name = name;
        this.score = 0;
        
        this.element = element;
    }

    increaseScore(pointValue) {
        this.score = this.score + pointValue;

        this.score += pointValue;
        this.element.children[0].innerText = this.score
        console.log(pointValue)
    }

    decreaseScore(pointValue) {
        this.score -= pointValue;
        this.element.children[0].innerText = this.score
    }

    setup() {
    
        console.log(this.element.children[1])
        this.element.children[1].addEventListener('click', () => {
            this.increaseScore(100)
        })

        this.element.children[2].addEventListener('click', () => {
            this.decreaseScore(100)
        })
    
        return this;
    }

}


const team1 = new Team('team1', document.getElementById('team1'))
const team2 = new Team('team2', document.getElementById('team2'))
const team3 = new Team('team3', document.getElementById('team3'))

team1.setup()
team2.setup()
team3.setup()

console.log(team1.element)