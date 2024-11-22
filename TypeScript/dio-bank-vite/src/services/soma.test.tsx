import { expect, test } from 'vitest'
import { soma, multiplica } from './soma'

test('deve somar 1 ao número informado', () => {
    const value = soma(1)
    expect(value).toBe(2)
})

test('deve multiplicar o número por dois', () => {
    const value = multiplica(2, 2)
    expect(value).toBe(4)
})

test('deve multiplicar o número por 3', () => {
    const value = multiplica(4, 3)
    expect(value).toBe(12)
})

test('Deve informar um erro, com multiplicador diferente de 2 ou 3', () => {
    const value = multiplica(2, 4)
    expect(value).toBe('Multiplicador não aceito')
})