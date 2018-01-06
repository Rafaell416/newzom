const expect = require('chai').expect
const newzom = require('..').default

describe('$newzom test', () => {
  it('si la palabra termina con  "ar"  se le quitan esas dos letras', () => {
    const trasnlation = newzom('Programar')
    expect(trasnlation).to.equal('Program')
  })

  it('si la palabra empieza con Z se le añade  "pe" al final', () => {
    const trasnlation1 = newzom('zorro')
    const trasnlation2 = newzom('Zarpar')
    expect(trasnlation1).to.equal('zorrope')
    expect(trasnlation2).to.equal('Zarppe')
  })

  it('si la palabra traducida tiene 10 o más letras se debe partir por la mitad y unir con un - ', () => {
    const trasnlation = newzom('abecedario')
    expect(trasnlation).to.equal('abece-dario')
  })

  it('si la palabra original es un palindromo ninguna regla cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', () => {
    const trasnlation = newzom('sometemos')
    expect(trasnlation).to.equal('SoMeTeMoS')
  })

})
