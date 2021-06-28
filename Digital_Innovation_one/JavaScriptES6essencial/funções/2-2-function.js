(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name; // esse this tem como referência 'arrow function', pois esse é contexto aonde foi criado. 

    function getName() {
        return this.name; // Já esse this tem outro contexto de criação por isso ele tem como referência a propriedade -> 'name: 'Nome no objeto de execução', ou seja, sua referência é dentro do objeto user.
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName: getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();