
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { nome: 'Herlmanoel Fernandes Barbosa', email: 'herlmanoel@gmail.com', senha: '00000', permissao: 'administrador'},
        { nome: 'Heloisa  Barbosa', email: 'heloisa@gmail.com', senha: '00000', permissao: 'administrador'},
        { nome: 'Julia Fernandes ', email: 'julia@gmail.com', senha: '00000', permissao: 'administrador'},
      ]);
    });
};
