import { expect, test, describe, vi } from 'vitest'
//import { screen, render } from '@testing-library/react'

import { login } from './login'

describe('login', () => {

    const mockAlert = vi.fn()
    window.alert = mockAlert
    test('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})