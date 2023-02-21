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
    showStep: function () { // РїРѕРєР°Р·С‹РІР°РµС‚ С‚РµРєСѓС‰СѓСЋ СЃС‚СѓРїРµРЅСЊРєСѓ
        alert(this.step);
        return this;
    }
};

ladder.up().up().up().up().down().down().down().down().down().down().down().showStep(); 
