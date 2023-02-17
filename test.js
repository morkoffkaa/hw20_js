let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().up().up().down().down().down().down().down().down().down().showStep(); 

// Змініть код методів up, down і showStep таким Таким чином, 
// щоб їх виклик можна було зробити по ланцюжку, наприклад:
// // 1