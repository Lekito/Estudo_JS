import { describe, expect, it, vi } from "vitest";
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const diobank = {
    login: false
}

describe('storage', () => {
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = vi.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        const mockSetItem = vi.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        const mockSetItem = vi.spyOn(Storage.prototype, 'setItem')
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})