import { expect, test, describe, vi } from 'vitest'
//import { screen, render } from '@testing-library/react'
import { login } from './login'


describe('login', () => {

    const mockAlert = vi.fn()
    window.alert = mockAlert
    const mockEmail = 'alex@gmail.com'

    test('Deve exibir um alert com boas vindas caso seja valido', async () => {
        await login('alex@gmail.com')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo alex@gmail.com!')
    })

    test('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    test('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@example.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})