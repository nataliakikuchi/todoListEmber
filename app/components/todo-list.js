import Component from '@ember/component';

export default Component.extend({
  taskName: "teste",
  actions: {
    inputChange(event){
      this.set('taskName', event.target.value); //comportamento do evento: pega o input do usuário e coloca na variável taskName
    }
  }
});
