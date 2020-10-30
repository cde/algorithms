const spanish = ['único','árbol', 'cosas', 'fútbol', 'manzana','burro']

console.log(spanish.sort((a,b)=> {
    return a.localeCompare(b)
}))

//in ruby
// require 'i18n'
//irb(main):059:0> spanish.sort_by { |e| I18n.transliterate e }
// => ["árbol", "burro", "cosas", "fútbol", "manzana", "único"]