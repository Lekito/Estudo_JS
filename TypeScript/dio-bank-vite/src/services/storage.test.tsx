import { describe, expect, it, vi } from "vitest";
import { getAllLocalStorage } from "./storage";

describe('storage', () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem')
    it('Deve retornar o objeto no localStorage', () => {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })
})