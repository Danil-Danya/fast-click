class GAME {
    constructor (game) {
        this.ctx   = game.context;
        this.time  =   game.timer;
        this.x     =    game.posX;
        this.y     =    game.posY;


        this.result = document.querySelector('.result');
        this.input  =  document.querySelector('.input');
        this.timer  =  document.querySelector('.timer');
        this.block  =  document.querySelector('.block');
        this.btn    =    document.querySelector('.btn');

        this.color = [
                      '#5fc3e4',    '#fff',  '#73ff00',
                      '#ff0000', '#ffff00',  '#e55d87',
                      'orange',  '#26ff00',  '#6f00ff'
        ]
                    
        this.number = 0;

        this.btn.onclick = () => this.draw(5, 20, 49); 
        this.btn.onclick = () => this.timerGame(); 
    }
    timerGame () {
        if (this.input.value > 0) {
            this.min = Math.floor(this.input.value / 60);
            this.sec = this.input.value % 60;

            this.input.value--;
            
            this.timer.innerHTML = `0${this.min} : ${this.sec}`;

            setTimeout(() => this.timerGame(), 1000);
            setTimeout(() => this.draw(5, 20, 49),1000);
        } 
        else if (this.input.value == 0) {
            this.timer.innerHTML = 'Игра Окончена';
        }
        else if (this.input.value < 0) {
            this.timer.innerHTML = 'Вы ввели отрицательное число';
        }
    }
    
    
    draw (min, maxX, maxY) {
        this.x = Math.floor(Math.random() * 10 * (min, maxX));
        this.y = Math.floor(Math.random() * 10 * (min, maxY));
        this.colorIndex = Math.floor(Math.random() * 10);

        this.colorIndex === 9 ? this.colorIndex-- : '';

        this.elips = document.createElement('div');

        this.block.append(this.elips);
        this.elips.classList.add('elips');
        
        this.elips.style = `top: ${this.y}px;
                            left: ${this.x}px;
                            background: ${this.color[this.colorIndex]};
                            box-shadow: 0 0 10px ${this.color[this.colorIndex]}, 
                                        0 0 20px ${this.color[this.colorIndex]}, 
                                        0 0 40px ${this.color[this.colorIndex]};`;

        this.elipsHtml = document.querySelectorAll('.elips');
        
        for (let i = 0; i < this.elipsHtml.length; i++) {
            let deleteElips = (elips) => elips.remove();

            this.elipsHtml[i].onclick = () => {
                deleteElips(this.elipsHtml[i]);
                
                this.number++;
                console.log(this.number);

                this.result.innerHTML = this.number;
            }

            setTimeout(() => deleteElips(this.elipsHtml[i]),3000);
        }
    }
}

const game = new GAME ({
    timer: 0,
    posX: 0,
    posY: 0,
})