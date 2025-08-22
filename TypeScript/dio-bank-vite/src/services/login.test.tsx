import { expect, test, describe, vi } from 'vitest'
//import { screen, render } from '@testing-library/react'
import { login } from './login'

//const mockSetIsLoggedIn = vi.fn()
//const mockNavigate = vi.fn()

//Exemplos de mock desestruturando o react

// vi.mock(import("react"), async (importOriginal) => {
//     const actual = await importOriginal()
//     return {

//         ...actual,
//         useContext: () => ({
//             setIsLoggedIn: mockSetIsLoggedIn
//         })
//     }
// })

// vi.mock(import("react-router-dom"), async (importOriginal) => {
//     const actual = (await importOriginal()) as any
//     return {
//         ...actual,
//         useNavigate: () => mockNavigate
//     }
// })
describe('login', () => {
    const mockEmail = 'alex@gmail.com'
    const mockSenha = '123456'

    test('Deve exibir um alert com boas vindas caso seja valido', async () => {
        const response = await login(mockEmail, mockSenha)
        expect(response).toBeTruthy()

    })

    test('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@example.com', '123451')
        expect(response).toBeFalsy()
    })
})