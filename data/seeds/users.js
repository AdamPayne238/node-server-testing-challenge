
exports.seed = function(knex, Promise) {
  return knex('users')
    //add truncate to delete entries and reset ids
    .truncate()
    .then(function(){
      return knex('users').insert([
        {username: 'adam', email: 'adam@gmail.com'},
        {username: 'bae', email: 'bae@gmail.com'},
        {username: 'notadam', email: 'notadam@gmail.com'},
        {username: 'user', email: 'user@gmail.com'},
      ]);
    })
};
