import { expect, test, describe, vi } from 'vitest'
//import { screen, render } from '@testing-library/react'
import { login } from './login'

const mockSetIsLoggedIn = vi.fn()
const mockNavigate = vi.fn()

vi.mock(import("react"), async (importOriginal) => {
    const actual = await importOriginal()
    return {

        ...actual,
        useContext: () => ({
            setIsLoggedIn: mockSetIsLoggedIn
        })
    }
})

vi.mock(import("react-router-dom"), async (importOriginal) => {
    const actual = (await importOriginal()) as any
    return {
        ...actual,
        useNavigate: () => mockNavigate
    }
})
describe('login', () => {
    const mockEmail = 'alex@gmail.com'

    test('Deve exibir um alert com boas vindas caso seja valido', async () => {
        await login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    test('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@example.com')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith()
        expect(mockNavigate).not.toHaveBeenCalledWith()
    })
})